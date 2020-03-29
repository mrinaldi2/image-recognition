import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import {indexRouter} from './routes/index';
import {usersRouter} from './routes/users';

const app = express();
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});