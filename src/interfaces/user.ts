import { Timestamp } from '@firebase/firestore-types';

export type UserRole = 'superadmin' | 'admin' | 'coordinator' | 'student';

export interface IUser {
  id: string;
  name: string;
  email: string;
  secondaryEmail: string;
  role: UserRole;
  createdAt: Timestamp;
  createdBy: IUser;
  // * TODO: Adicionar imagem para cada usuário
}
