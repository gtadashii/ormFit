import { Client } from "modules/clients/infra/typeorm/entities/Client";
import { PaymentType } from "modules/payment/infra/typeorm/entities/PaymentType";
import { Plan } from "modules/plans/infra/typeorm/entities/Plan";
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("memberships")
class Membership {
  @PrimaryColumn()
  id!: string;

  @OneToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  client!: Client;

  @Column()
  client_id!: string;

  @OneToOne(() => Plan)
  @JoinColumn({ name: "plan_id" })
  plan!: Plan;

  @Column()
  plan_id!: string;

  @OneToOne(() => PaymentType)
  @JoinColumn({ name: "payment_type_id" })
  paymentType!: PaymentType;

  @Column()
  payment_type_id!: string;

  @Column()
  due_date!: Date;

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

export { Membership };
