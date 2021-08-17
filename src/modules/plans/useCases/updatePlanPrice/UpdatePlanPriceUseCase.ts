import { IPlansRepository } from "@modules/plans/repositories/IPlansRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  price: number;
}

@injectable()
class UpdatePlanPriceUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute({ id, price }: IRequest): Promise<void> {
    const plan = await this.plansRepository.findById(id);
    if (plan) {
      await this.plansRepository.updatePrice({ id, price });
    }
  }
}

export { UpdatePlanPriceUseCase };
