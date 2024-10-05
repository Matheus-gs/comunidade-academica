import { Timestamp } from '@firebase/firestore-types';
import { IUser } from './user';

export type PostVisibility =
  | 'Everyone at the same university'
  | 'Everyone in my course';

export interface IPost {
  id: string;
  content: string;
  attachments: File[];
  visibleTo: PostVisibility;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
  createdBy: IUser;
}
