import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from 'app/issue.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: ''
    });
  }

  addIssue(title: String, responsible: String, description: String, severity: String) {
    this.issueService.addIssue(title, responsible, description, severity)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

  ngOnInit() {
  }

}
