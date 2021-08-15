import { inject, injectable } from "tsyringe";

import {
  ICreatePlanDTO,
  IPlansRepository,
} from "../../repositories/IPlansRepository";

@injectable()
class CreatePlanUseCase {
  constructor(
    @inject("PlansRepository")
    private plansRepository: IPlansRepository
  ) {}

  async execute({ description, price }: ICreatePlanDTO): Promise<void> {
    const planAlreadyExists = await this.plansRepository.findByDescription(
      description
    );

    if (planAlreadyExists) {
      throw new Error("This plan already exists");
    }

    await this.plansRepository.create({ description, price });
  }
}

export { CreatePlanUseCase };
