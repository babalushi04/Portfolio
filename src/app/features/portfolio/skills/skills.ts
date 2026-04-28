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
    { name: 'HTML5',      icon: 'assets/img/skills/html.svg' },
    { name: 'CSS3',       icon: 'assets/img/skills/css.svg' },
    { name: 'JavaScript', icon: 'assets/img/skills/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/img/skills/typescript.svg' },
    { name: 'Angular',    icon: 'assets/img/skills/angular.svg' },
    { name: 'Firebase',   icon: 'assets/img/skills/firebase.svg' },
    { name: 'Git',        icon: 'assets/img/skills/git.svg' },
    { name: 'Scrum',      icon: 'assets/img/skills/scrum.svg' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
