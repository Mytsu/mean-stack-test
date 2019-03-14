import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import { Logger } from './logger';
import session = require('express-session');
import uuid = require('uuid/v4');
import setRoutes from './routes';
import 'env';

const MongoStore = require('connect-mongo')(session);

// corsRequests allows Cross-Origin requests to the server

const corsRequests = function(req: express.Request, res: express.Response, next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};

const app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../client')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(corsRequests);
app.use(morgan('dev'));

app.use(session({
  genid: (req: express.Request) => {
    Logger.log('Inside session middleware');
    Logger.log(req.sessionID);
    return uuid();
  },
  store: new MongoStore({
    url: process.env.DB_HOST + '/issuescookies'
  }),
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
}
}));

mongoose.connect('mongodb://' + process.env.DB_HOST + '/issues', { useNewUrlParser: true });
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  setRoutes(app);

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });

  app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'));
  });

});

export { app };
