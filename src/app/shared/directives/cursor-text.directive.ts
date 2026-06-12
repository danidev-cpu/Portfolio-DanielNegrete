import { Directive, HostListener, inject } from '@angular/core';
import { CursorService } from '../../core/services/cursor.service';

/**
 * Apply to headings and highlighted text spans.
 * Switches the cursor to the fine-circle text ring state.
 */
@Directive({
  selector: '[cursorText]',
  standalone: true,
})
export class CursorTextDirective {
  private readonly cursor = inject(CursorService);

  @HostListener('mouseenter') onEnter(): void { this.cursor.set('text'); }
  @HostListener('mouseleave') onLeave(): void { this.cursor.reset(); }
}
