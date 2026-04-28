import { Component } from '@angular/core';

interface Project {
  key: string;
  titleKey: string;
  descKey: string;
  techsKey: string;
  github: string;
  live: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      key: 'join',
      titleKey: 'Join',
      descKey: 'PROJECTS.JOIN_DESC',
      techsKey: 'PROJECTS.JOIN_TECHS',
      github: 'https://github.com/babalushi04/join',
      live: '',
      image: 'assets/img/projects/join-preview.png',
    },
    {
      key: 'elpollo',
      titleKey: 'El Pollo Loco',
      descKey: 'PROJECTS.ELPOLLO_DESC',
      techsKey: 'PROJECTS.ELPOLLO_TECHS',
      github: 'https://github.com/babalushi04/el-pollo-loco',
      live: '',
      image: 'assets/img/projects/elpollo-preview.png',
    },
  ];
}
