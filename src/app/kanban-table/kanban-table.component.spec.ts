/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ColumnComponent } from '../column/column.component';
import { LegendComponent } from '../legend/legend.component';
import { KanbanTableComponent } from './kanban-table.component';
import { IssuesService } from '../../services/issues.service';
import { ProjectsService } from '../../services/projects.service';

describe('KanbanTableComponent', () => {
  let component: KanbanTableComponent;
  let fixture: ComponentFixture<KanbanTableComponent>;
  let fakeIssuesService = jasmine.createSpyObj('IssuesService', ['listLastUpdated']);
  let fakeProjectsService = jasmine.createSpyObj('ProjectsService', ['listProjects']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanTableComponent, ColumnComponent, LegendComponent ],
      providers: [
        { provide: IssuesService, useValue: fakeIssuesService },
        { provide: ProjectsService, useValue: fakeProjectsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fakeProjectsService.listProjects.and.returnValue(Observable.of([]));
    fixture = TestBed.createComponent(KanbanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should refresh columns every 30s', fakeAsync(() => {

  }));
});
