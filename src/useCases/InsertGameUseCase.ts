import { IGameDTO } from '../entities/Game';
import { IGameRepository } from '../repositories/IGameRepository';

class InsertGameUseCase {
  constructor(private gameRepository: IGameRepository) {}

  async execute(game: IGameDTO): Promise<void> {
    await this.gameRepository.insert(game);
  }
}

export { InsertGameUseCase };
