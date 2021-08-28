import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("clients")
class Client {
  @PrimaryColumn()
  id!: string;
  @Column()
  name!: string;
  @Column()
  birthdate!: Date;
  @Column()
  gender!: string;
  @Column()
  document!: string;
  @Column()
  email!: string;
  @Column()
  cellphone!: string;
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

export { Client };
