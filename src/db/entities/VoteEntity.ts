import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";
import { PollEntity } from "./PollEntity";

@Entity("vote")
export class VoteEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "unique_identifier" })
  uniqueIdentifier!: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({
    name: "user_id",
  })
  user?: UserEntity;

  @ManyToOne(() => PollEntity)
  @JoinColumn({
    name: "poll_id",
  })
  poll!: PollEntity;

  @Column({ name: "poll_option_choice" })
  pollOption!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: string;
}
