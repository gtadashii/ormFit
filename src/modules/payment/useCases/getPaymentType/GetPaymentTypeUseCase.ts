import { PaymentType } from "@modules/payment/infra/typeorm/entities/PaymentType";
import { inject, injectable } from "tsyringe";

import { IPaymentTypesRepository } from "../../repositories/IPaymentTypesRepository";

@injectable()
class GetPaymentTypeUseCase {
  constructor(
    @inject("PaymentTypesRepository")
    private paymentTypesRepository: IPaymentTypesRepository
  ) {}

  async execute(id: string): Promise<PaymentType> {
    const paymentType = await this.paymentTypesRepository.getById(id);
    if (!paymentType) {
      throw new Error("Payment type not found");
    }
    return paymentType;
  }
}

export { GetPaymentTypeUseCase };
