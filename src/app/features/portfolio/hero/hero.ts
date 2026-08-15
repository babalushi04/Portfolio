import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  marqueeItems: string[] = [
    'HERO.MARQUEE.REMOTE_WORK',
    'HERO.MARQUEE.JOB_TITLE',
    'HERO.MARQUEE.LOCATION',
    'HERO.MARQUEE.OPEN_TO_WORK',
    'HERO.MARQUEE.TECH',
  ];

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
