import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Client } from "../../../../clients/infra/typeorm/entities/Client";
import { PaymentType } from "../../../../payment/infra/typeorm/entities/PaymentType";
import { Plan } from "../../../../plans/infra/typeorm/entities/Plan";

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
