import { Router } from "express";

import { CreatePaymentTypeController } from "../../../../modules/payment/useCases/createPaymentType/CreatePaymentTypeController";

const paymentsRoutes = Router();

const createPaymentTypeController = new CreatePaymentTypeController();

paymentsRoutes.post("/", createPaymentTypeController.handle);

export { paymentsRoutes };
