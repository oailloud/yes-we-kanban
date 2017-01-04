/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KanbanTableComponent } from './kanban-table.component';

describe('KanbanTableComponent', () => {
  let component: KanbanTableComponent;
  let fixture: ComponentFixture<KanbanTableComponent>;
  let fakeColumnComponent = jasmine.createSpyObj('ColumnComponent', ['refresh']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanTableComponent, fakeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should refresh columns every 30s', fakeAsync(() => {

  }));
});
