import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePaymentTypeUseCase } from "./DeletePaymentTypeUseCase";

class DeletePaymentTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deletePaymentTypeUseCase = container.resolve(
      DeletePaymentTypeUseCase
    );
    await deletePaymentTypeUseCase.execute(id);
    return response.status(200).send();
  }
}

export { DeletePaymentTypeController };
