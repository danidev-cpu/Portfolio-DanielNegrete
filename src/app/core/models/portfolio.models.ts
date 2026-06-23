export interface Project {
  name: string;
  stack: string[];
  description: string;
  featured?: boolean;
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: 'current' | 'past';
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  color: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface About {
  name: string;
  bio: string;
}
