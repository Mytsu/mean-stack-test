import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router } from '@angular/router';
import { Issue } from '../../issue.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
      .getIssues()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        this.dataSource.data = data;
      });
  }

  editIssue(id: String) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id: String) {
    this.issueService
      .deleteIssue(id)
      .subscribe((data: String) => {
        this.fetchIssues();
      });
  }

}
