import { Directive, HostListener, inject } from '@angular/core';
import { CursorService } from '../../core/services/cursor.service';

/**
 * Apply to interactive CTAs, buttons, and navigation links.
 * Switches the cursor to the dynamic crosshair/reticle state.
 */
@Directive({
  selector: '[cursorAction]',
  standalone: true,
})
export class CursorActionDirective {
  private readonly cursor = inject(CursorService);

  @HostListener('mouseenter') onEnter(): void { this.cursor.set('action'); }
  @HostListener('mouseleave') onLeave(): void { this.cursor.reset(); }
}
