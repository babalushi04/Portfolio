import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  marqueeItems = [
    'Available for remote work', '✦',
    'Frontend Developer', '✦',
    'Based in Zeitlarn, DE', '✦',
    'Open to work', '✦',
    'Angular · TypeScript · JavaScript', '✦',
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
