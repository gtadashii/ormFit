import { IPaymentTypesRepository } from "@modules/payment/repositories/IPaymentTypesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeletePaymentTypeUseCase {
  constructor(
    @inject("PaymentTypesRepository")
    private paymentTypesRepository: IPaymentTypesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const alreadyExists = await this.paymentTypesRepository.getById(id);

    if (!alreadyExists) {
      throw new Error("No payment type found for this id");
    }

    await this.paymentTypesRepository.delete(id);
  }
}

export { DeletePaymentTypeUseCase };
