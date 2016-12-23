import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Response, ResponseOptions, RequestMethod, Http } from '@angular/http';

import { IssuesService } from './issues.service';
import { Issue } from '../models/issue';
import { environment } from '../environments/environment';

describe('issue service', () => {

  let issuesService: IssuesService;
  let mockBackend: MockBackend;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
        deps: [MockBackend, BaseRequestOptions]
      },
      IssuesService
    ]
  }));

  beforeEach(inject([IssuesService, MockBackend], (service, mock) => {
    issuesService = service;
    mockBackend = mock;
  }));

  it('should list issues by label', async(() => {
    let issue = new Issue();
    issue.title = 'test';
    let issues = [issue];

    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toBe(environment.GITLAB_API_BASE_URL + 'issues?labels=ToDo');
      expect(connection.request.headers.get('PRIVATE-TOKEN')).toBe(environment.GITLAB_API_TOKEN);
      connection.mockRespond(new Response(new ResponseOptions({
        body: issues
      })));
    });

    issuesService.listIssues('ToDo').subscribe((data) => {
      expect(data).toEqual(issues);
    });
  }));
});