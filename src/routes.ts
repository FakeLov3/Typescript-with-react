import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/list-users', UserController.index);
routes.post('/send-email', UserController.create);

export default routes;