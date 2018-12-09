import * as express from 'express';

import IssueCtrl from './controllers/issues';

export default function setRoutes(app) {

  const issues = new IssueCtrl();

  // APIs
  app.route('/issues').get(issues.getAll);
  app.route('/issues/:id').get(issues.count);
  app.route('/issues/update/:id').post(issues.update);
  app.route('/issues/delete/:id').get(issues.get);
  app.route('/issues/add').put(issues.insert);

}
