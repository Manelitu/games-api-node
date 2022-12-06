import { IGameDTO } from '../entities/Game';
import { IGameRepository } from '../repositories/IGameRepository';

class InsertGameUseCase {
  constructor(private gameRepository: IGameRepository) {}

  async execute({
    releaseData,
    designer,
    developer,
    genre,
    mode,
    name,
    platform
  }: IGameDTO): Promise<void> {
    await this.gameRepository.insert({
      releaseData,
      designer,
      developer,
      genre,
      mode,
      name,
      platform
    });
  }
}

export { InsertGameUseCase };
