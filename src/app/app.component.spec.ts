/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { AppModule } from './app.module';
import { ColumnComponent } from './column/column.component';
import { KanbanTableComponent } from './kanban-table/kanban-table.component';
import { LegendComponent } from './legend/legend.component';
import { IssuesService } from '../services/issues.service';

describe('AppComponent', () => {
  const fakeColumnComponent = jasmine.createSpyObj('ColumnComponent', ['do']);
  const fakeKanbanTableComponent = jasmine.createSpyObj('KanbanTableComponent', ['do']);
  const fakeLegendComponent = jasmine.createSpyObj('LegendComponent', ['do']);
  // const fakeIssuesService = jasmine.createSpyObj('IssuesService', ['listIssues']);


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ywk works!'`, () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Yes we Kanban !');
  });

  it('should render title in a h1 tag', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Yes we Kanban !');
  });
});
