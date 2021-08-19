import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePaymentTypeUseCase } from "./CreatePaymentTypeUseCase";

class CreatePaymentTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const createdPaymentTypeUseCase = container.resolve(
      CreatePaymentTypeUseCase
    );
    await createdPaymentTypeUseCase.execute(description);
    return response.status(201).send();
  }
}

export { CreatePaymentTypeController };
