import { Timestamp } from '@firebase/firestore-types';
import { IUser } from './user.ts';

export interface IUniversity {
  id: string;
  name: string;
  owner: IUser;
  createdAt: Timestamp;
  createdBy: IUser;
  // * TODO: Adicionar imagem para representar cada faculdade
}
