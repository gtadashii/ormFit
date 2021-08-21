import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPaymentTypeUseCase } from "./GetPaymentTypeUseCase";

class GetPaymentTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getPaymentTypeUseCase = container.resolve(GetPaymentTypeUseCase);
    const paymentType = await getPaymentTypeUseCase.execute(id);
    return response.status(201).json(paymentType);
  }
}

export { GetPaymentTypeController };
