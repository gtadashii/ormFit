import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("plans")
class Plan {
  @PrimaryColumn()
  id!: string;
  @Column()
  description!: string;
  @Column()
  price!: number;
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

export { Plan };
