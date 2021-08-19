import { PaymentType } from "../../infra/typeorm/entities/PaymentType";
import { IPaymentTypesRepository } from "../IPaymentTypesRepository";

class PaymentTypesRepositoryInMemory implements IPaymentTypesRepository {
  paymentTypes: PaymentType[] = [];

  async create(description: string): Promise<PaymentType> {
    const paymentType = new PaymentType();
    Object.assign(paymentType, description);
    this.paymentTypes.push(paymentType);
    return paymentType;
  }
  async getById(id: string): Promise<PaymentType | undefined> {
    return this.paymentTypes.find((paymentType) => paymentType.id === id);
  }
  async getByDescription(
    description: string
  ): Promise<PaymentType | undefined> {
    return this.paymentTypes.find(
      (paymentType) => paymentType.description === description
    );
  }
  async list(): Promise<PaymentType[]> {
    return this.paymentTypes;
  }
  async delete(id: string): Promise<void> {
    const paymentType = this.paymentTypes.find(
      (paymentType) => paymentType.id === id
    );
    if (paymentType) {
      this.paymentTypes.splice(this.paymentTypes.indexOf(paymentType));
    }
  }
}

export { PaymentTypesRepositoryInMemory };
