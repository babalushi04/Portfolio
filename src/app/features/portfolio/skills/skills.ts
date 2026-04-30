import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { name: 'HTML',           icon: 'assets/img/skills/html.svg' },
    { name: 'CSS',            icon: 'assets/img/skills/css.svg' },
    { name: 'JavaScript',     icon: 'assets/img/skills/javascript.svg' },
    { name: 'TypeScript',     icon: 'assets/img/skills/typescript.svg' },
    { name: 'Angular',        icon: 'assets/img/skills/angular.svg' },
    { name: 'Firebase',       icon: 'assets/img/skills/firebase.svg' },
    { name: 'Git',            icon: 'assets/img/skills/git.svg' },
    { name: 'Scrum',          icon: 'assets/img/skills/scrum.svg' },
    { name: 'REST API',       icon: 'assets/img/skills/rest-api.svg' },
    { name: 'Material Design',icon: 'assets/img/skills/material-design.svg' },
    { name: 'Growth Mindset', icon: 'assets/img/skills/9. Growth Mindset interaction-skill.mobile.jpg' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
