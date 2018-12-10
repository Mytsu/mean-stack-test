import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = 'http://localhost:3000';

  getIssues() {
    return this.http.get(`${this.url}/api/issues`);
  }

  getIssueById(id: String) {
    return this.http.get(`${this.url}/api/issues/${id}`);
  }

  addIssue(title: String, responsible: String, description: String, severity: String) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
    };
    return this.http.put(`${this.url}/api/issues/add`, JSON.stringify(issue));
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.url}/api/issues/update/${id}`,  JSON.stringify(issue), { responseType: 'text' });
  }

  deleteIssue(id) {
    return this.http.get(`${this.url}/issues/delete/${id}`, { responseType: 'text' });
  }

  constructor(private http: HttpClient) { }
}
