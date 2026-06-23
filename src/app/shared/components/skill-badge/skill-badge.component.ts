import { Component, computed, input } from '@angular/core';
import { SkillItem } from '../../../core/models/portfolio.models';

const ICON_SLUGS: Record<string, string> = {
  angular: 'angular',
  laravel: 'laravel',
  javascript: 'javascript',
  php: 'php',
  springboot: 'springboot',
  linux: 'linux',
  metasploit: 'metasploit',
  wireshark: 'wireshark',
  git: 'git',
};

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss',
})
export class SkillBadgeComponent {
  readonly skill = input.required<SkillItem>();

  protected readonly iconUrl = computed(() => {
    const slug = ICON_SLUGS[this.skill().icon];

    if (!slug) {
      return null;
    }

    const color = this.skill().color.replace('#', '');
    return `https://cdn.simpleicons.org/${slug}/${color}`;
  });

  protected isLightBadge(color: string): boolean {
    return color.toUpperCase() === '#F7DF1E' || color.toUpperCase() === '#FCC624';
  }
}
