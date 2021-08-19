import { inject, injectable } from "tsyringe";

import { IPaymentTypesRepository } from "../../repositories/IPaymentTypesRepository";

@injectable()
class CreatePaymentTypeUseCase {
  constructor(
    @inject("PaymentTypesRepository")
    private paymentTypesRepository: IPaymentTypesRepository
  ) {}

  async execute(description: string): Promise<void> {
    const alreadyExists = await this.paymentTypesRepository.getByDescription(
      description
    );

    if (alreadyExists) {
      throw new Error("This payment type already exists");
    }

    await this.paymentTypesRepository.create(description);
  }
}

export { CreatePaymentTypeUseCase };
