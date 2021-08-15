import { getRepository, Repository } from "typeorm";

import {
  ICreatePlanDTO,
  IPlansRepository,
} from "../../../repositories/IPlansRepository";
import { Plan } from "../entities/Plan";

class PlansRepository implements IPlansRepository {
  private repository: Repository<Plan>;

  constructor() {
    this.repository = getRepository(Plan);
  }

  async create({ description, price }: ICreatePlanDTO): Promise<Plan> {
    const plan = this.repository.create({
      description,
      price,
    });

    await this.repository.save(plan);
    return plan;
  }

  async findById(id: string): Promise<Plan | undefined> {
    const plan = await this.repository.findOne({ id });
    return plan;
  }

  async findByDescription(description: string): Promise<Plan | undefined> {
    const plan = await this.repository.findOne({ description });
    return plan;
  }
}

export { PlansRepository };
