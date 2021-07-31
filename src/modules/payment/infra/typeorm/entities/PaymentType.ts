import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("payment_types")
class PaymentType {
  @PrimaryColumn()
  id!: string;
  @Column()
  description!: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { PaymentType };
