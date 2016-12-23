import { Component, OnInit, Input } from '@angular/core';

import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issue';

@Component({
  selector: 'ywk-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() label: string;

  issues: Issue[];

  constructor(
    private issuesService: IssuesService,
  ) {}

  ngOnInit() {
  }

  refresh() {
    this.issuesService.listIssues(this.label).subscribe(_issues => {
      this.issues = _issues;
    });
  }
}
