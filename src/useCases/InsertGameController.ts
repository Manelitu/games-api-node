import { Request, Response } from 'express';

import { IGameDTO } from '../entities/Game';
import { InsertGameUseCase } from './InsertGameUseCase';

export class InsertGameController {
  constructor(private useCase: InsertGameUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const game: IGameDTO = req.body as IGameDTO;
    await this.useCase.execute(game);
    return res.status(201).json({ message: 'Game registered' });
  }
}
