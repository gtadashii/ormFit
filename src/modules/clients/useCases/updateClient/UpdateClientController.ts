import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateClientUseCase } from "./UpdateClientUseCase";

class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { email, cellphone } = request.body;
    const updateClientUseCase = container.resolve(UpdateClientUseCase);
    await updateClientUseCase.execute({ id, email, cellphone });
    return response.status(204).send();
  }
}

export { UpdateClientController };
