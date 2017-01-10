import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

import { IssuesService } from '../../services/issues.service';
import { ProjectsService } from '../../services/projects.service';
import { Issue } from '../../models/issue';
import { Project } from '../../models/project';

@Component({
  selector: 'ywk-kanban-table',
  templateUrl: './kanban-table.component.html',
  styleUrls: ['./kanban-table.component.css']
})
export class KanbanTableComponent implements OnInit, OnDestroy {

  private static readonly REFRESH_PERIOD = 30000; // 30s

  @ViewChild('backlogColumn') backlogColumn: ColumnComponent;
  @ViewChild('todoColumn') todoColumn: ColumnComponent;
  @ViewChild('inProgressColumn') inProgressColumn: ColumnComponent;
  @ViewChild('reviewColumn') reviewColumn: ColumnComponent;
  @ViewChild('closedColumn') closedColumn: ColumnComponent;
  timerSubscription: Subscription;
  projects: Subject<Project[]> = new Subject();

  constructor(
    private issuesService: IssuesService,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit() {
    this.projectsService.listProjects().subscribe(this.projects);
    this.timerSubscription = Observable.timer(0, KanbanTableComponent.REFRESH_PERIOD).subscribe(() =>  {
      this.backlogColumn.refresh();
      this.todoColumn.refresh();
      this.inProgressColumn.refresh();
      this.reviewColumn.refresh();
      this.closedColumn.refresh(this.issuesService.listLastUpdated('closed'));
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
