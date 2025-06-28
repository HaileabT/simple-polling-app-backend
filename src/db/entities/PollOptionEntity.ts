import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PollEntity } from "./PollEntity";

@Entity("poll_option")
export class PollOptionEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 500 })
  text!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: string;

  @Column({ name: "vote_amount", default: 0 })
  voteAmount!: number;

  @ManyToOne(() => PollEntity)
  @JoinColumn({
    name: "poll_id",
  })
  poll!: PollEntity;
}
