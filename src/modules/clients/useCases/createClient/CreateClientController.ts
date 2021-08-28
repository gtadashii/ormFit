import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, birthdate, gender, document, email, cellphone } =
      request.body;
    const createClientUseCase = container.resolve(CreateClientUseCase);
    await createClientUseCase.execute({
      name,
      birthdate,
      gender,
      document,
      email,
      cellphone,
    });
    return response.status(201).send();
  }
}

export { CreateClientController };
