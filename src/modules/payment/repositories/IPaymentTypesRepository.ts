import { PaymentType } from "../infra/typeorm/entities/PaymentType";

interface IPaymentTypesRepository {
  create(description: string): Promise<PaymentType>;
  getById(id: string): Promise<PaymentType | undefined>;
  getByDescription(description: string): Promise<PaymentType | undefined>;
  list(): Promise<PaymentType[]>;
  delete(id: string): Promise<void>;
}

export { IPaymentTypesRepository };
