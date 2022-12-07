import { Router } from 'express';

import { router as gameRouter } from './game.route';

export const routes = Router();

routes.use('/game', gameRouter);
