import { IPoll } from "./IPoll";

export interface IPollOption {
  id: string;
  text: string;
  createdAt: string;
  voteAmount?: number;
  poll: IPoll;
}
