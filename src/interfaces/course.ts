import { Timestamp } from "@firebase/firestore-types";
import { IUser } from "./user.ts";

export type CourseCategory = 'TI' // DIREITO | SAUDE | ENGENHARIA | ETC ETC ETC

export interface ICourse {
  id: string;
  category: CourseCategory;
  coordinator: IUser;
  createdAt: Timestamp;
  createdBy: IUser
}