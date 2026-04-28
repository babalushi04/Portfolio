import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  marqueeItems = [
    'HTML', '✦', 'CSS', '✦', 'JavaScript', '✦',
    'TypeScript', '✦', 'Angular', '✦', 'Responsive Design', '✦',
    'Git', '✦', 'Firebase', '✦',
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
