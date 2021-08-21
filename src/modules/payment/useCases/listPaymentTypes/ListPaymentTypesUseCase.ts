import { PaymentType } from "@modules/payment/infra/typeorm/entities/PaymentType";
import { inject, injectable } from "tsyringe";

import { IPaymentTypesRepository } from "../../repositories/IPaymentTypesRepository";

@injectable()
class ListPaymentTypesUseCase {
  constructor(
    @inject("PaymentTypesRepository")
    private paymentTypesRepository: IPaymentTypesRepository
  ) {}

  async execute(): Promise<PaymentType[]> {
    const paymentTypes = await this.paymentTypesRepository.list();
    return paymentTypes;
  }
}

export { ListPaymentTypesUseCase };
