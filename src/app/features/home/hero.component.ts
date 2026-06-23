import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { CursorTextDirective } from '../../shared/directives/cursor-text.directive';
import { CursorActionDirective } from '../../shared/directives/cursor-action.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent, CursorTextDirective, CursorActionDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly portfolioService = inject(PortfolioService);

  readonly about = this.portfolioService.about;
  readonly skills = this.portfolioService.skills;

  readonly aboutText =
    'Actualmente estoy finalizando el grado de Desarrollo de Aplicaciones Web en el IES Serpis. ' +
    'Me apasiona construir interfaces limpias y sistemas robustos, combinando un enfoque metódico ' +
    'en el backend con un ojo crítico en la experiencia de usuario. Busco seguir creciendo en ' +
    'entornos donde la calidad del código y el impacto real del producto importen de verdad.';
}
