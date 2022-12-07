import { v4 as uuid } from 'uuid';

export interface IGameDTO {
  id?: string;
  name: string;
  designer: string;
  genre: string;
  platform: string;
  developer: string;
  releaseData: string;
  mode: string;
}

export class Game implements IGameDTO {
  id?: string;

  name!: string;

  designer!: string;

  genre!: string;

  platform!: string;

  developer!: string;

  releaseData!: string;

  mode!: string;

  createdAt!: Date;

  updatedAt!: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
