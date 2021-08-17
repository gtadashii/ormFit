import { Plan } from "../infra/typeorm/entities/Plan";

interface ICreatePlanDTO {
  description: string;
  price: number;
}

interface IUpdatePlanPriceDTO {
  id: string;
  price: number;
}

interface IPlansRepository {
  create({ description, price }: ICreatePlanDTO): Promise<Plan>;
  findById(id: string): Promise<Plan | undefined>;
  findByDescription(description: string): Promise<Plan | undefined>;
  listAll(): Promise<Plan[]>;
  updatePrice({ id, price }: IUpdatePlanPriceDTO): Promise<void>;
}

export { IPlansRepository, ICreatePlanDTO, IUpdatePlanPriceDTO };
