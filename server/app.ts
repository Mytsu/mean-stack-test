import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import { enviroment } from './enviroment';

import setRoutes from './routes';

const app = express();
app.set('port', (enviroment.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

mongoose.connect('mongodb://' + enviroment.DB_HOST, { useNewUrlParser: true });
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
