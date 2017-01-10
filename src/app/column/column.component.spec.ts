/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ColumnComponent } from './column.component';
import { Issue } from '../../models/issue';
import { IssuesService } from '../../services/issues.service';
import { ProjectsService } from '../../services/projects.service';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;
  let fakeIssuesService = jasmine.createSpyObj('IssuesService', ['listIssues']);
  let fakeProjectsService = jasmine.createSpyObj('ProjectsService', ['getColorByProjectId', 'getName']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnComponent ],
      providers: [
        { provide: IssuesService , useValue: fakeIssuesService },
        { provide: ProjectsService , useValue: fakeProjectsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fakeIssuesService.listIssues.calls.reset();
    fakeProjectsService.getColorByProjectId.calls.reset();
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    component.projects = Observable.of([]);
    fixture.detectChanges();
  });

  it('should get issues on refresh', () => {
    let issue = new Issue();
    issue.title = 'lala';
    issue.iid = '14';
    let issues = [issue];
    fakeIssuesService.listIssues.and.returnValue(Observable.of(issues));
    component = new ColumnComponent(fakeIssuesService, fakeProjectsService);
    component.label = 'labelle';

    component.refresh();
    expect(component.issues).toEqual(issues);
    expect(fakeIssuesService.listIssues).toHaveBeenCalledWith('labelle');
  });
});
