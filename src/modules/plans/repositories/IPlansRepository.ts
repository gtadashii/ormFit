import { Plan } from "../infra/typeorm/entities/Plan";

interface ICreatePlanDTO {
  description: string;
  price: number;
}

interface IPlansRepository {
  create({ description, price }: ICreatePlanDTO): Promise<Plan>;
  findById(id: string): Promise<Plan | undefined>;
  findByDescription(description: string): Promise<Plan | undefined>;
}

export { IPlansRepository, ICreatePlanDTO };
