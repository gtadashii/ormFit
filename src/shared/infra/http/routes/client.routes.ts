import { Router } from "express";

import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClientController";
import { GetClientController } from "../../../../modules/clients/useCases/getClient/GetClientController";
import { ListClientsController } from "../../../../modules/clients/useCases/listClients/ListClientsController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const getClientController = new GetClientController();
const listClientsController = new ListClientsController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/:id", getClientController.handle);
clientsRoutes.get("/", listClientsController.handle);

export { clientsRoutes };
