import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlanPriceUseCase } from "./UpdatePlanPriceUseCase";

class UpdatePlanPriceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { price } = request.body;
    const updatePlanPriceUseCase = container.resolve(UpdatePlanPriceUseCase);
    await updatePlanPriceUseCase.execute({ id, price });
    return response.status(204).send();
  }
}

export { UpdatePlanPriceController };
