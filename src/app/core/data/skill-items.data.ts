import { SkillItem } from '../models/portfolio.models';

export const SKILL_ITEMS: Record<string, Omit<SkillItem, 'name'>> = {
  'Prompt Engineering': {
    color: '#A855F7',
    icon: 'prompt-engineering',
  },
  Angular: {
    color: '#DD0031',
    icon: 'angular',
  },
  Laravel: {
    color: '#FF2D20',
    icon: 'laravel',
  },
  JavaScript: {
    color: '#F7DF1E',
    icon: 'javascript',
  },
  PHP: {
    color: '#777BB4',
    icon: 'php',
  },
  Java: {
    color: '#0074BD',
    icon: 'java',
  },
  'Spring Boot': {
    color: '#6DB33F',
    icon: 'springboot',
  },
  Linux: {
    color: '#FCC624',
    icon: 'linux',
  },
  Metasploit: {
    color: '#2596CD',
    icon: 'metasploit',
  },
  Wireshark: {
    color: '#1679A7',
    icon: 'wireshark',
  },
  Git: {
    color: '#F05032',
    icon: 'git',
  },
};

export function resolveSkillItem(name: string): SkillItem {
  const meta = SKILL_ITEMS[name];

  if (!meta) {
    return { name, color: '#7c6af7', icon: 'default' };
  }

  return { name, ...meta };
}
