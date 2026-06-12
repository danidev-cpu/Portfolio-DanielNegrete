import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorTextDirective } from '../../shared/directives/cursor-text.directive';
import { CursorActionDirective } from '../../shared/directives/cursor-action.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CursorTextDirective, CursorActionDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly email = 'negretegomez120@gmail.com';
  readonly github = 'https://github.com/danidev-cpu';
  readonly mailtoHref = `mailto:negretegomez120@gmail.com?subject=Hablemos%20de%20código`;
}
