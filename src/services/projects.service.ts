import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Project } from '../models/project';
import { environment } from '../environments/environment';

@Injectable()
export class ProjectsService {
  constructor(
    private http: Http
  )
  {}

  listProjects(): Observable<[Project]> {
    let url = `${environment.GITLAB_API_BASE_URL}projects?per_page=100`;
    let headers = new Headers({ 'PRIVATE-TOKEN': environment.GITLAB_API_TOKEN});
    return this.http.get(url, {headers: headers})
      .map(rawData => rawData.json());
  }

  getColor(projectId: number): string {
    switch (projectId.toString()) {
      case '2087312': return '#ffb3b3';
      case '1875560': return '#bfcdff';
      case '1606475': return '#bfe8b7';
      case '1576764': return '#ffda95';
      case '1970410': return '#f1ff7a';
      case '1879132': return '#f79eec';
      case '1679368': return '#d6d6d6';
      default: return 'white';
    }
  }
}