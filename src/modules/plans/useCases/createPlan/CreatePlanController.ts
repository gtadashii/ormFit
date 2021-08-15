import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePlanUseCase } from "./CreatePlanUseCase";

class CreatePlanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, price } = request.body;
    const createPlanUseCase = container.resolve(CreatePlanUseCase);
    await createPlanUseCase.execute({ description, price });
    return response.status(201).send();
  }
}

export { CreatePlanController };
