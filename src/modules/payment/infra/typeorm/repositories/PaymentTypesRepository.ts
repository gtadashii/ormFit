import { Repository, getRepository } from "typeorm";

import { IPaymentTypesRepository } from "../../../repositories/IPaymentTypesRepository";
import { PaymentType } from "../entities/PaymentType";

class PaymentTypesRepository implements IPaymentTypesRepository {
  private repository: Repository<PaymentType>;

  constructor() {
    this.repository = getRepository(PaymentType);
  }
  async create(description: string): Promise<PaymentType> {
    const paymentType = this.repository.create({ description });
    await this.repository.save(paymentType);
    return paymentType;
  }
  async getById(id: string): Promise<PaymentType | undefined> {
    const paymentType = await this.repository.findOne({ id });
    return paymentType;
  }
  async getByDescription(
    description: string
  ): Promise<PaymentType | undefined> {
    const paymentType = await this.repository.findOne({ description });
    return paymentType;
  }
  async list(): Promise<PaymentType[]> {
    const paymentTypes = await this.repository.find();
    return paymentTypes;
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export { PaymentTypesRepository };
