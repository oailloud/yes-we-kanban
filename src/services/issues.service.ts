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
  ) {}

  listIssues(label: string): Observable<[Issue]> {
    let url = `${environment.GITLAB_API_BASE_URL}issues?labels=${label}&per_page=100`;
    let headers = new Headers({ 'PRIVATE-TOKEN': environment.GITLAB_API_TOKEN});
    return this.http.get(url, {headers: headers})
      .map(rawData => rawData.json());
  }

  listLastUpdated(state: string): Observable<[Issue]> {
    let url = `${environment.GITLAB_API_BASE_URL}issues?state=${state}&order_by=updated_at`;
    let headers = new Headers({ 'PRIVATE-TOKEN': environment.GITLAB_API_TOKEN});
    return this.http.get(url, {headers: headers})
      .map(rawData => rawData.json());
  }

  listWithoutLabels(...excludedLabels: string[]): Observable<[Issue]> {
    let url = `${environment.GITLAB_API_BASE_URL}issues?order_by=updated_at&per_page=100`;
    let headers = new Headers({ 'PRIVATE-TOKEN': environment.GITLAB_API_TOKEN});
    return this.http.get(url, {headers: headers})
      .map(rawData => rawData.json())
      .map((issues) => issues.filter((issue) => {
        for (let issueLabel of issue.labels) {
          if (excludedLabels.indexOf(issueLabel) >= 0) {
            return false;
          }
        }
        return true;
      }));
  }
}
