import { inject, injectable } from "tsyringe";

import { IPlansRepository } from "../../repositories/IPlansRepository";

@injectable()
class CreatePlanUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute(description: string): Promise<void> {
    const planAlreadyExists = await this.plansRepository.findByDescription(
      description
    );

    if (planAlreadyExists) {
      throw new Error("This plan already exists");
    }

    this.plansRepository.create(description);
  }
}

export { CreatePlanUseCase };
