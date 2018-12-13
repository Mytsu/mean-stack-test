import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

import { Issue } from './issue.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = environment.url;

  getIssues(): Observable<Issue[]> {
    return <Observable<Issue[]>> this.http.get(`${this.url}/api/issues`);
  }

  getIssueById(id: String): Observable<Issue> {
    return <Observable<Issue>> this.http.get(`${this.url}/api/issues/${id}`);
  }

  addIssue(title: String, responsible: String, description: String, severity: String): Observable<Issue> {
    const issue: Issue = {title, responsible, description, severity};
    return <Observable<Issue>> this.http.put(`${this.url}/api/issues/add`, issue);
  }

  updateIssue(id: String, title: String, responsible: String, description: String, severity: String, status: String): Observable<String> {
    const issue: Issue = {title, responsible, description, severity, status};
    return <Observable<String>> this.http.post(`${this.url}/api/issues/update/${id}`, issue, { responseType: 'text'});
  }

  deleteIssue(id: String): Observable<String> {
    return <Observable<String>> this.http.get(`${this.url}/api/issues/delete/${id}`, { responseType: 'text'});
  }

  constructor(private http: HttpClient) { }
}
