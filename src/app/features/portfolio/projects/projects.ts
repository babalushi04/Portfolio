import { Component, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
export class Projects implements OnDestroy {
  currentIndex = 0;
  hoveredIndex: number | null = null;
  selectedProject: Project | null = null;

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
  ];

  private techIcons: Record<string, string> = {
    'HTML':           'assets/img/skills/Frame 383HTML.svg',
    'CSS':            'assets/img/skills/Frame 383css.svg',
    'JavaScript':     'assets/img/skills/Frame 383JS.svg',
    'TypeScript':     'assets/img/skills/Frame 383TS.svg',
    'Angular':        'assets/img/skills/Frame 383Angular.svg',
    'Supabase':       'assets/img/skills/Frame 383supabase.svg',
    'Git':            'assets/img/skills/Frame 383git.svg',
    'Scrum':          'assets/img/skills/Frame 383scrum.svg',
    'REST API':       'assets/img/skills/Frame 383restApi.svg',
    'Material Design':'assets/img/skills/Frame 383Materialdesign.svg',
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  getTechIcon(tech: string): string {
    return this.techIcons[tech] ?? '';
  }

  get current(): Project {
    return this.projects[this.currentIndex];
  }

  get formattedProjectNumber(): string {
    if (!this.selectedProject) return '';
    return this.selectedProject.number;
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

  openDialog(index: number): void {
    this.currentIndex = index;
    this.selectedProject = this.projects[index];
    this.renderer.addClass(this.document.body, 'project-dialog-open');
    this.renderer.addClass(this.document.documentElement, 'project-dialog-open');
  }

  closeDialog(): void {
    this.selectedProject = null;
    this.renderer.removeClass(this.document.body, 'project-dialog-open');
    this.renderer.removeClass(this.document.documentElement, 'project-dialog-open');
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeDialog();
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'project-dialog-open');
    this.renderer.removeClass(this.document.documentElement, 'project-dialog-open');
  }
}
