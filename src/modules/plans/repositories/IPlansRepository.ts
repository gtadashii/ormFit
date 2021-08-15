import { Plan } from "../infra/typeorm/entities/Plan";

interface IPlansRepository {
  create(description: string, price: number): Promise<Plan>;
  findById(id: string): Promise<Plan | undefined>;
  findByDescription(description: string): Promise<Plan | undefined>;
}

export { IPlansRepository };
