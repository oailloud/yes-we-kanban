import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issue';

@Component({
  selector: 'ywk-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() label: string;
  @Input() displayedLabel: string;

  issues: Issue[];

  constructor(
    private issuesService: IssuesService,
  ) {}

  ngOnInit() {
  }

  refresh(issuesObservable?: Observable<[Issue]>) {
    if (!issuesObservable) {
      issuesObservable = this.issuesService.listIssues(this.label);
    }
    issuesObservable.subscribe(_issues => {
      this.issues = _issues;
    });
  }
}
