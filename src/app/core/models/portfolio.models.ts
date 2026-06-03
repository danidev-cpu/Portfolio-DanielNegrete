export interface Project {
  name: string;
  stack: string[];
  description: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: 'current' | 'past';
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface About {
  name: string;
  bio: string;
}
