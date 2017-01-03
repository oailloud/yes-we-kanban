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
  @Input() maxWIP: number;

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

  getProjectColor(issue: Issue): string {
    switch (issue.project_id.toString()) {
      case '2087312': return '#ffb3b3';
      case '1875560': return '#bfcdff';
      case '1606475': return '#bfe8b7';
      case '1576764': return '#ffda95';
      case '1970410': return '#f1ff7a';
      case '1879132': return '#f79eec';
      case '1679368': return '#d6d6d6';
      default: return 'white';
    }
  }
}
