import { IPlansRepository } from "modules/plans/repositories/IPlansRepository";
import { getRepository, Repository } from "typeorm";

import { Plan } from "../entities/Plan";

class PlansRepository implements IPlansRepository {
  private repository: Repository<Plan>;

  constructor() {
    this.repository = getRepository(Plan);
  }

  async create(description: string): Promise<void> {
    const plan = this.repository.create({
      description,
    });

    await this.repository.save(plan);
  }
}

export { PlansRepository };
