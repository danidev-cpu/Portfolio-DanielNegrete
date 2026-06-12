import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorActionDirective } from '../../directives/cursor-action.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, CursorActionDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;

  readonly links = [
    { label: 'Inicio', fragment: 'inicio' },
    { label: 'Proyectos', fragment: 'proyectos' },
    { label: 'Experiencia', fragment: 'experiencia' },
    { label: 'Contacto', fragment: 'contacto' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(event: Event, fragment: string): void {
    event.preventDefault();
    this.menuOpen = false;
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
