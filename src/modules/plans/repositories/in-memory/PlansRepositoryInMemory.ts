import { Plan } from "../../infra/typeorm/entities/Plan";
import {
  ICreatePlanDTO,
  IPlansRepository,
  IUpdatePlanPriceDTO,
} from "../IPlansRepository";

class PlansRepositoryInMemory implements IPlansRepository {
  plans: Plan[] = [];
  async create({ description, price }: ICreatePlanDTO): Promise<Plan> {
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
  async listAll(): Promise<Plan[]> {
    return this.plans;
  }
  async updatePrice({ id, price }: IUpdatePlanPriceDTO): Promise<void> {
    const index = this.plans.findIndex((plan) => plan.id === id);
    this.plans[index].price = price;
  }
}

export { PlansRepositoryInMemory };
