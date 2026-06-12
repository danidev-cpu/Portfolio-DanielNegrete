import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { CursorTextDirective } from '../../shared/directives/cursor-text.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CursorTextDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly experience = this.portfolioService.experience;
}
