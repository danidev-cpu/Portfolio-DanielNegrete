import { Injectable } from '@angular/core';
import { About, Experience, Project, Skill } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly about: About = {
    name: 'Daniel Negrete',
    bio: 'Desarrollador de Aplicaciones Web especializado en Angular y Laravel, con experiencia en entornos corporativos PHP y una fuerte orientación a la resolución de problemas.',
  };

  readonly projects: Project[] = [
    {
      name: 'Habitus',
      stack: ['Angular', 'Laravel', 'MySQL'],
      description: 'Lideré el desarrollo de esta app de gestión clínica.',
      featured: true,
    },
    {
      name: 'School Cafeteria',
      stack: ['Spring Boot', 'Java'],
      description: 'Gestión de servicios de cafetería escolar.',
    },
    {
      name: 'Página Web Temática eSports',
      stack: ['HTML/CSS', 'JavaScript', 'Sass'],
      description: 'Presentación y maquetación.',
    },
  ];

  readonly experience: Experience[] = [
    {
      company: 'FGV',
      role: 'Desarrollador Web',
      period: 'Marzo 2026 – Actualidad',
      type: 'current',
      description:
        'Desarrollo y mantenimiento de aplicaciones internas en un entorno corporativo de gran escala.',
      highlights: [
        'Desarrollo con framework PHP estándar en entorno corporativo',
        'Gestión y optimización de consultas SQL sobre bases de datos relacionales',
        'Control de versiones con Git en flujos de trabajo en equipo',
      ],
    },
    {
      company: 'Cliniwin',
      role: 'Técnico de Soporte & Junior Developer',
      period: 'Marzo 2024 – Junio 2024',
      type: 'past',
      description:
        'Prácticas en empresa de software clínico, combinando soporte técnico y desarrollo.',
      highlights: [
        'Resolución de incidencias técnicas en entorno de producción',
        'Atención directa al usuario final y documentación de casos',
        'Colaboración con el equipo de desarrollo en corrección de bugs',
      ],
    },
  ];

  readonly skills: Skill[] = [
    {
      category: 'Desarrollo',
      items: ['Angular', 'Laravel', 'JavaScript', 'PHP', 'Java', 'Spring Boot'],
    },
    {
      category: 'Sistemas',
      items: ['Linux', 'Metasploit', 'Wireshark', 'Git'],
    },
  ];
}
