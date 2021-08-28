import { Router } from "express";

import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";
import { GetClientController } from "../../../../modules/clients/useCases/getClient/GetClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const getClientController = new GetClientController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/:id", getClientController.handle);

export { clientsRoutes };
