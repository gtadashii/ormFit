import { Plan } from "@modules/plans/infra/typeorm/entities/Plan";
import { IPlansRepository } from "@modules/plans/repositories/IPlansRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetPlanUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(id: string): Promise<Plan> {
    const plan = await this.plansRepository.findById(id);

    if (!plan) {
      throw new Error("Plan not found");
    }

    return plan;
  }
}

export { GetPlanUseCase };
