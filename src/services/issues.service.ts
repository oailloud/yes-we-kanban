import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Issue } from '../models/issue';
import { environment } from '../environments/environment';

@Injectable()
export class IssuesService {
  constructor(
    private http: Http
  )
  {}

  listIssues(label: string): Observable<[Issue]> {
    let url = `${environment.GITLAB_API_BASE_URL}issues?labels=${label}`;
    let headers = new Headers({ 'PRIVATE-TOKEN': environment.GITLAB_API_TOKEN});
    return this.http.get(url, {headers: headers})
      .map(rawData => rawData.json());
  }
}