import { IGameDTO } from '../entities/Game';

interface IGameRepository {
  insert(game: IGameDTO): Promise<void>;
}

export { IGameRepository };
