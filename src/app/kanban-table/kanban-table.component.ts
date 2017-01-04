import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';

import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issue';

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

  constructor(
    private issuesService: IssuesService,
  ) {}

  ngOnInit() {
    this.timerSubscription = Observable.timer(0, KanbanTableComponent.REFRESH_PERIOD).subscribe(() =>  {
      this.backlogColumn.refresh();
      this.todoColumn.refresh();
      this.inProgressColumn.refresh();
      this.reviewColumn.refresh();
      this.closedColumn.refresh(this.issuesService.listLastUpdated('closed'));
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
