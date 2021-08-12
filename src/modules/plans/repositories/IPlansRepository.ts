import { Plan } from "../infra/typeorm/entities/Plan";

interface IPlansRepository {
  create(description: string): Promise<Plan>;
  findById(id: string): Promise<Plan | undefined>;
}

export { IPlansRepository };
