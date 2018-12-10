import IssueCtrl from './controllers/issues';
import * as express from 'express';

export default function setRoutes(app) {

  const issues = new IssueCtrl();
  const router = express.Router();

  // APIs
  router.route('/issues').get(issues.getAll);
  router.route('/issues/:id').get(issues.get);
  router.route('/issues/update/:id').post(issues.update);
  router.route('/issues/delete/:id').get(issues.delete);
  router.route('/issues/add').put(issues.insert);

  app.use('/api', router);
}
