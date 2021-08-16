import { Plan } from "@modules/plans/infra/typeorm/entities/Plan";
import { IPlansRepository } from "@modules/plans/repositories/IPlansRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListPlansUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(): Promise<Plan[]> {
    const plans = await this.plansRepository.listAll();
    return plans;
  }
}

export { ListPlansUseCase };
