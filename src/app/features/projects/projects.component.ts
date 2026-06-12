import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { CursorTextDirective } from '../../shared/directives/cursor-text.directive';
import { CursorActionDirective } from '../../shared/directives/cursor-action.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CursorTextDirective, CursorActionDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly projects = this.portfolioService.projects;
}
