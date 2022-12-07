import { GameRepository } from '../repositories/GameRepository';
import { InsertGameController } from './InsertGameController';
import { InsertGameUseCase } from './InsertGameUseCase';

export const insertGameFactory = () => {
  const gameRepository = new GameRepository();
  const insertGameUseCase = new InsertGameUseCase(gameRepository);
  const insertGameController = new InsertGameController(insertGameUseCase);
  return insertGameController;
};
