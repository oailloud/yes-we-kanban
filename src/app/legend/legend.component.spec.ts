/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LegendComponent } from './legend.component';
import { ProjectsService } from '../../services/projects.service';

describe('LegendComponent', () => {
  let component: LegendComponent;
  let fixture: ComponentFixture<LegendComponent>;

  const fakeProjectsService = jasmine.createSpyObj('ProjectsService', ['listProjects']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendComponent ],
      providers: [
        { provide: ProjectsService, useValue: fakeProjectsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fakeProjectsService.listProjects.and.returnValue(Observable.of([]));
    fixture = TestBed.createComponent(LegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
