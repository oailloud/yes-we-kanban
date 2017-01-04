import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Project } from '../models/project';
import { environment } from '../environments/environment';

@Injectable()
export class ProjectsService {

  projects: Project[];

  constructor(
    private http: Http
  ) {}

  listProjects(): Observable<[Project]> {
    let url = `${environment.GITLAB_API_BASE_URL}projects?per_page=100`;
    return this.http.get(url).map(rawData => rawData.json())
      .do((projects) => this.projects = projects);
  }

  getColor(project: Project): string {
    switch (project.name) {
      case 'komaks': return '#ff995d';
      case 'getmypool': return '#bfcdff';
      case 'owltail': return '#bfe8b7';
      case 'owlface': return '#e2f1d3';
      case 'owlright': return '#74da6d';
      case 'hashbang': return '#f79eec';
      case 'mngdeps': return '#f1ff7a';
      case 'hosting': return '#d6d6d6';
      case 'lepinard': return '#dc4d66';
      default: return 'white';
    }
  }

  getColorByProjectId(projectId: number): string {
    let project = this.projects.find((_project) => _project.id === projectId);
    return this.getColor(project);
  }
}
