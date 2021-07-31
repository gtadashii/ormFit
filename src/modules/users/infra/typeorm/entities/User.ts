import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id!: string;
  @Column()
  admin!: boolean;
  @Column()
  name!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
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

export { User };
