import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
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
    if (this.projects) {
      return Observable.of(this.projects);
    }
    let url = `${environment.GITLAB_API_BASE_URL}projects?per_page=100`;
    let headers = new Headers({ 'PRIVATE-TOKEN': environment.GITLAB_API_TOKEN});
    return this.http.get(url, {headers: headers})
      .map(rawData => rawData.json())
      .do((projects) => this.projects = projects);
  }

  getColor(project: Project): string {
    return environment.projectsColorMap[project.name] || '#ffffff';
  }

  getColorByProjectId(projectId: number): string {
    if (!this.projects) {
      return 'white';
    }
    let project = this.projects.find((_project) => _project.id === projectId);
    return this.getColor(project);
  }

  getName(projectId: number): string {
    if (!this.projects) {
      return '';
    }
    let project = this.projects.find((_project) => _project.id === projectId);
    return project.name;
  }
}
