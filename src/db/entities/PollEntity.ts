import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PollOptionEntity } from "./PollOptionEntity";
import { UserEntity } from "./UserEntity";
import { VoteEntity } from "./VoteEntity";

@Entity("poll")
export class PollEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 500 })
  title!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: string;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: string;

  @Column({ type: "datetime", name: "started_at" })
  startedAt!: string;

  @Column({ type: "datetime", name: "ended_at" })
  endedAt!: string;

  @Column({ name: "total_votes", default: 0 })
  totalVotes!: number;

  @OneToMany(() => PollOptionEntity, (pollOption) => pollOption.poll, {
    onDelete: "CASCADE",
  })
  options?: PollOptionEntity[];

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: "user_id",
  })
  user!: UserEntity;

  @OneToMany(() => VoteEntity, (vote) => vote.poll)
  votes?: VoteEntity[];
}
