import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IssuesService } from '../../services/issues.service';
import { ProjectsService } from '../../services/projects.service';
import { Issue } from '../../models/issue';
import { Project } from '../../models/project';

@Component({
  selector: 'ywk-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() label: string;
  @Input() displayedLabel: string;
  @Input() maxWIP: number;
  @Input() projects: Observable<Project[]>;

  issues: Issue[] = Array(0);

  constructor(
    private issuesService: IssuesService,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit() {
    this.projects.subscribe(() => {
      for (let issue of this.issues) {
        this.setIssueSpecialFiels(issue);
      }
    });
  }

  refresh(issuesObservable?: Observable<[Issue]>) {
    if (!issuesObservable) {
      issuesObservable = this.issuesService.listIssues(this.label);
    }
    issuesObservable
    .map((issues) => {
      return issues.map((issue) => {
        this.setIssueSpecialFiels(issue);
        return issue;
      });
    })
    .subscribe(_issues => {
      this.issues = _issues;
    });
  }

  private setIssueSpecialFiels(issue: Issue) {
    issue.color = this.projectsService.getColorByProjectId(issue.project_id);
    issue.textColor = this.useDarkText(issue.color) ? '#373a3c' : 'white';
    issue.project = this.projectsService.getName(issue.project_id);
  }

  private useDarkText(hex): boolean {
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0, 2), 16); // hexToR
    var g = parseInt(hex.substring(2, 4), 16); // hexToG
    var b = parseInt(hex.substring(4, 6), 16); // hexToB
    // http://stackoverflow.com/a/3943023/1773450
    return (r*0.299 + g*0.587 + b*0.114) > 186;
  }
}
