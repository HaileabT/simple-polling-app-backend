import { IPollOption } from "./IPollOption";
import { IUser } from "./IUser";
import { IVote } from "./IVote";

export interface IPoll {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  startedAt: string;
  endedAt: string;
  totalVotes?: number;
  options?: IPollOption[];
  user: IUser;
  votes?: IVote[];
}
