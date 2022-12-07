import { IGameDTO } from '../entities/Game';
import { IGameRepository } from '../repositories/IGameRepository';

export class InsertGameUseCase {
  constructor(private gameRepository: IGameRepository) {}

  async execute(game: IGameDTO): Promise<void> {
    await this.gameRepository.insert(game);
  }
}
