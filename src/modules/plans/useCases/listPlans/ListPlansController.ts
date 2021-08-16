import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPlansUseCase } from "./ListPlansUseCase";

class ListPlansController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPlansUseCase = container.resolve(ListPlansUseCase);
    const plans = await listPlansUseCase.execute();
    return response.json(plans);
  }
}

export { ListPlansController };
