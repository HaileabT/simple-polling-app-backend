import { IUser } from "./IUser";

export interface IVote {
  id: string;
  uniqueIdentifier: string;
  user: IUser;
}
