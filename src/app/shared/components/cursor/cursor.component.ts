import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  inject,
  effect,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { CursorService, CursorState } from '../../../core/services/cursor.service';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorComponent implements OnInit, OnDestroy {
  @ViewChild('cursorEl', { static: false }) cursorEl?: ElementRef<HTMLDivElement>;

  private readonly cursorService = inject(CursorService);
  readonly state = this.cursorService.state;

  private target  = { x: -200, y: -200 };
  private current = { x: -200, y: -200 };
  private rafId   = 0;
  private sub     = new Subscription();
  private active  = false;
  private enabled = false;

  constructor() {
    // Re-trigger entry animations whenever state changes.
    // RAF defers DOM access until after view initialization.
    effect(() => {
      const s = this.state();
      requestAnimationFrame(() => this.playEntryAnimation(s));
    });
  }

  ngOnInit(): void {
    if (this.isTouchDevice() || this.prefersReducedMotion()) return;

    this.enabled = true;
    document.body.classList.add('hide-cursor');

    this.sub.add(
      fromEvent<MouseEvent>(document, 'mousemove').subscribe(e => {
        if (!this.active) {
          // Snap on first move — no lerp lag on entrance
          this.current.x = e.clientX;
          this.current.y = e.clientY;
          this.active = true;
          this.setCursorOpacity('1');
        }
        this.target.x = e.clientX;
        this.target.y = e.clientY;
      })
    );

    this.sub.add(
      fromEvent(document, 'mouseleave').subscribe(() => {
        this.setCursorOpacity('0');
        this.active = false;
      })
    );

    this.sub.add(
      fromEvent(document, 'mouseenter').subscribe(() => {
        this.setCursorOpacity('1');
        this.active = true;
      })
    );

    this.rafId = requestAnimationFrame(this.loop);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    cancelAnimationFrame(this.rafId);
    document.body.classList.remove('hide-cursor');
  }

  // ── RAF lerp loop ────────────────────────────────────────────────────────
  private loop = (): void => {
    const lp = 0.13; // lerp factor — higher = snappier
    this.current.x += (this.target.x - this.current.x) * lp;
    this.current.y += (this.target.y - this.current.y) * lp;

    const el = this.cursorEl?.nativeElement;
    if (el) {
      el.style.setProperty('--cx', `${this.current.x}px`);
      el.style.setProperty('--cy', `${this.current.y}px`);
    }

    this.rafId = requestAnimationFrame(this.loop);
  };

  // ── Entry animations ─────────────────────────────────────────────────────
  private playEntryAnimation(state: CursorState): void {
    const root = this.cursorEl?.nativeElement;
    if (!root || !this.enabled) return;

    if (state === 'action') {
      const ch = root.querySelector<HTMLElement>('.cursor__crosshair');
      if (ch) {
        ch.classList.remove('is-entering');
        void ch.offsetWidth; // force reflow to restart animation
        ch.classList.add('is-entering');
      }
    }

    if (state === 'text') {
      const ring = root.querySelector<HTMLElement>('.cursor__text-ring');
      if (ring) {
        ring.classList.remove('is-entering');
        void ring.offsetWidth;
        ring.classList.add('is-entering');
        // Remove after anim so the continuous pulse takes over
        setTimeout(() => ring.classList.remove('is-entering'), 420);
      }
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  private setCursorOpacity(v: string): void {
    const el = this.cursorEl?.nativeElement;
    if (el) el.style.opacity = v;
  }

  private isTouchDevice(): boolean {
    return typeof window !== 'undefined' &&
      window.matchMedia('(hover: none)').matches;
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
