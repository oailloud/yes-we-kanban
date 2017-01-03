import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'ywk-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {
  projects : Project[];
  folded: boolean = true;

  constructor(
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.projectsService.listProjects().subscribe((_projects: Project[]) => {
      this.projects = _projects;
    });
  }

  getProjectColor(project: Project): string {
    return this.projectsService.getColor(project);
  }
}
