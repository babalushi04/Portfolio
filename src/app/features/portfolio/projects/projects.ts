import { Component } from '@angular/core';

export interface Project {
  number: string;
  title: string;
  descKey: string;
  techs: string[];
  github: string;
  live: string;
  image: string;
  displayUrl: string;
  logoMode: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  currentIndex = 0;

  projects: Project[] = [
    {
      number: '01',
      title: 'Join',
      descKey: 'PROJECTS.JOIN_DESC',
      techs: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      github: 'https://github.com/babalushi04/join',
      live: 'https://babalushi04.github.io/Join/',
      image: 'assets/img/projects/join-preview.jpg',
      displayUrl: 'babalushi04.github.io/Join',
      logoMode: false,
    },
    {
      number: '02',
      title: 'El Pollo Loco',
      descKey: 'PROJECTS.ELPOLLO_DESC',
      techs: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/babalushi04/EL-Pollo-Loco',
      live: 'https://babalushi04.github.io/EL-Pollo-Loco/',
      image: 'assets/img/projects/elpollo-preview.jpg',
      displayUrl: 'babalushi04.github.io/EL-Pollo-Loco',
      logoMode: false,
    },
    {
      number: '03',
      title: 'Kochwelt',
      descKey: 'PROJECTS.KOCHWELT_DESC',
      techs: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      github: 'https://github.com/babalushi04/kochwelt',
      live: '',
      image: 'assets/img/projects/kochwelt-preview.svg',
      displayUrl: 'github.com/babalushi04/kochwelt',
      logoMode: false,
    },
    {
      number: '04',
      title: 'Clearifix',
      descKey: 'PROJECTS.CLEARIFIX_DESC',
      techs: ['HTML', 'CSS', 'JavaScript'],
      github: '',
      live: 'https://www.clearifix.com',
      image: 'assets/img/projects/clearifix-preview.jpg',
      displayUrl: 'clearifix.com',
      logoMode: true,
    },
    {
      number: '05',
      title: 'Permacare24',
      descKey: 'PROJECTS.PERMACARE_DESC',
      techs: ['HTML', 'CSS', 'JavaScript'],
      github: '',
      live: 'https://www.permacare24.com',
      image: 'assets/img/projects/permacare-preview.jpg',
      displayUrl: 'permacare24.com',
      logoMode: true,
    },
  ];

  get current(): Project {
    return this.projects[this.currentIndex];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
