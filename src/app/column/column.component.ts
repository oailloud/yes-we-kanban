import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IssuesService } from '../../services/issues.service';
import { ProjectsService } from '../../services/projects.service';
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
    private projectsService: ProjectsService,
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
    return this.projectsService.getColor(issue.project_id);
  }
}
