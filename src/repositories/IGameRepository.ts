import { IGameDTO } from '../entities/Game';

export interface IGameRepository {
  insert(game: IGameDTO): Promise<void>;
}
