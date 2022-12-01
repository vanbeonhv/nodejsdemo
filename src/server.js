import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web';
import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// setup view engine
configViewEngine(app);
initWebRouter(app);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
