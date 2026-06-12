import { Injectable, signal } from '@angular/core';

export type CursorState = 'default' | 'text' | 'action' | 'drag';

@Injectable({ providedIn: 'root' })
export class CursorService {
  readonly state = signal<CursorState>('default');

  set(state: CursorState): void {
    this.state.set(state);
  }

  reset(): void {
    this.state.set('default');
  }
}
