import { Router } from 'express';

import { insertGameFactory } from '../useCases/InsertGameFactory';

const router: Router = Router();
const insertGameController = insertGameFactory();

router.post('/newGame', insertGameController.handle.bind(insertGameController));

export { router };
