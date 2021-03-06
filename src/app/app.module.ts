import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IssuesService } from '../services/issues.service';
import { ProjectsService } from '../services/projects.service';
import { KanbanTableComponent } from './kanban-table/kanban-table.component';
import { ColumnComponent } from './column/column.component';
import { LegendComponent } from './legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanTableComponent,
    ColumnComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IssuesService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
