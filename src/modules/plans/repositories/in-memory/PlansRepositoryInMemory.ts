import { Plan } from "../../infra/typeorm/entities/Plan";
import { IPlansRepository } from "../IPlansRepository";

class PlansRepositoryInMemory implements IPlansRepository {
  plans: Plan[] = [];
  async create(description: string, price: number): Promise<Plan> {
    const plan = new Plan();
    Object.assign(plan, { description, price });
    this.plans.push(plan);
    return plan;
  }
  async findById(id: string): Promise<Plan | undefined> {
    return this.plans.find((plan) => plan.id === id);
  }
  async findByDescription(description: string): Promise<Plan | undefined> {
    return this.plans.find((plan) => plan.description === description);
  }
}

export { PlansRepositoryInMemory };
