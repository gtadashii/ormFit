import { Plan } from "../../infra/typeorm/entities/Plan";
import { IPlansRepository } from "../IPlansRepository";

class PlansRepositoryInMemory implements IPlansRepository {
  plans: Plan[] = [];
  async create(description: string): Promise<Plan> {
    const plan = new Plan();
    Object.assign(plan, { description });
    this.plans.push(plan);
    return plan;
  }
  async findById(id: string): Promise<Plan | undefined> {
    return this.plans.find((plan) => plan.id === id);
  }
}

export { PlansRepositoryInMemory };
