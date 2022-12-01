import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRouter = (app) => {
  router.get('/', homeController.getHomepage);

  router.get('/login', (req, res) => {
    res.send('Login Page');
  });
  return app.use('/', router);
};

export default initWebRouter;
