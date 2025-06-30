import { IPoll } from "./IPoll";
import { IVote } from "./IVote";

export interface IUser {
  id: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  polls?: IPoll[];
  votes?: IVote[];
}
