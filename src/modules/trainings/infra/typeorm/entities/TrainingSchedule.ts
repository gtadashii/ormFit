import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Client } from "../../../../clients/infra/typeorm/entities/Client";
import { User } from "../../../../users/infra/typeorm/entities/User";

@Entity("training_schedules")
class TrainingSchedule {
  @PrimaryColumn()
  id!: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  client!: Client;

  @Column()
  client_id!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "instructor_id" })
  user!: User;

  @Column()
  instructor_id!: string;

  @Column()
  exercise_id!: string;

  @Column()
  repetitions!: number;

  @Column()
  day_of_week!: string;

  @Column()
  in_use!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @CreateDateColumn()
  updated_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { TrainingSchedule };
