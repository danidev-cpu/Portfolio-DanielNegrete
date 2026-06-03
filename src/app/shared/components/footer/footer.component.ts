import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly email = 'negretegomez120@gmail.com';
  readonly github = 'https://github.com/danidev-cpu';
  readonly location = 'Alboraya, Valencia';
}
