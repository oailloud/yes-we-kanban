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
    let url = `${environment.GITLAB_API_BASE_URL}issues?labels=${label}&per_page=100`;
    return this.http.get(url).map(rawData => rawData.json());
  }

  listLastUpdated(state: string): Observable<[Issue]> {
    let url = `${environment.GITLAB_API_BASE_URL}issues?state=${state}&order_by=updated_at`;
    return this.http.get(url).map(rawData => rawData.json());
  }
}