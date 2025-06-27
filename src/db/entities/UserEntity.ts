import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PollEntity } from "./PollEntity";
import { VoteEntity } from "./VoteEntity";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: string;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: string;

  @OneToMany(() => PollEntity, (poll) => poll.user, {
    onDelete: "CASCADE",
  })
  polls?: PollEntity[];

  @OneToMany(() => VoteEntity, (vote) => vote.user, {
    onDelete: "CASCADE",
  })
  votes?: VoteEntity[];
}
