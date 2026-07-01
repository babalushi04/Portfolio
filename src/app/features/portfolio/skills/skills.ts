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
    { name: 'HTML',           icon: 'assets/img/skills/Frame 383HTML.svg' },
    { name: 'CSS',            icon: 'assets/img/skills/Frame 383css.svg' },
    { name: 'JavaScript',     icon: 'assets/img/skills/Frame 383JS.svg' },
    { name: 'TypeScript',     icon: 'assets/img/skills/Frame 383TS.svg' },
    { name: 'Angular',        icon: 'assets/img/skills/Frame 383Angular.svg' },
    { name: 'Supabase',       icon: 'assets/img/skills/Frame 383supabase.svg' },
    { name: 'Git',            icon: 'assets/img/skills/Frame 383git.svg' },
    { name: 'Scrum',          icon: 'assets/img/skills/Frame 383scrum.svg' },
    { name: 'REST API',       icon: 'assets/img/skills/Frame 383restApi.svg' },
    { name: 'Material Design',icon: 'assets/img/skills/Frame 383Materialdesign.svg' },
    { name: 'Growth Mindset', icon: 'assets/img/skills/Frame 383growthmindset.svg' },
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
