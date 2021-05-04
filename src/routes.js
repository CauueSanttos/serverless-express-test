import { Router } from 'express';

import UserController from './app/controllers/UserController';

class Routes {
  constructor() {
    this.routes = new Router();

    this.user();
  }

  user() {
    this.routes.get('/users', UserController.list);
  }
}

export default new Routes().routes;
