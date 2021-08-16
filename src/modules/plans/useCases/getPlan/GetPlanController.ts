import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPlanUseCase } from "./GetPlanUseCase";

class GetPlanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getPlanUseCase = container.resolve(GetPlanUseCase);
    const plan = await getPlanUseCase.execute(id);
    return response.json(plan);
  }
}

export { GetPlanController };
