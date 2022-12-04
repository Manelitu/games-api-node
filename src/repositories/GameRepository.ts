import prisma from '../../prisma/prismaClient';
import { IGameDTO } from '../entities/Game';
import { IGameRepository } from './IGameRepository';

class GameRepository implements IGameRepository {
  async insert({
    developer,
    genre,
    mode,
    designer,
    name,
    platform,
    releaseData
  }: IGameDTO): Promise<void> {
    await prisma.game.create({
      data: {
        developer,
        genre,
        designer,
        mode,
        name,
        platform,
        releaseData
      }
    });
  }
}

export { GameRepository };
