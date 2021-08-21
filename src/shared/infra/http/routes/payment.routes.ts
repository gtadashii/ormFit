import { Router } from "express";

import { CreatePaymentTypeController } from "../../../../modules/payment/useCases/createPaymentType/CreatePaymentTypeController";
import { DeletePaymentTypeController } from "../../../../modules/payment/useCases/deletePaymentType/DeletePaymentTypeController";

const paymentsRoutes = Router();

const createPaymentTypeController = new CreatePaymentTypeController();
const deletePaymentTypeController = new DeletePaymentTypeController();

paymentsRoutes.post("/", createPaymentTypeController.handle);
paymentsRoutes.delete("/:id", deletePaymentTypeController.handle);

export { paymentsRoutes };
