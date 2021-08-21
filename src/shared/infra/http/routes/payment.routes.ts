import { GetPaymentTypeController } from "@modules/payment/useCases/getPaymentType/GetPaymentTypeController";
import { Router } from "express";

import { CreatePaymentTypeController } from "../../../../modules/payment/useCases/createPaymentType/CreatePaymentTypeController";
import { DeletePaymentTypeController } from "../../../../modules/payment/useCases/deletePaymentType/DeletePaymentTypeController";

const paymentsRoutes = Router();

const createPaymentTypeController = new CreatePaymentTypeController();
const deletePaymentTypeController = new DeletePaymentTypeController();
const getPaymentTypeController = new GetPaymentTypeController();

paymentsRoutes.post("/", createPaymentTypeController.handle);
paymentsRoutes.delete("/:id", deletePaymentTypeController.handle);
paymentsRoutes.get("/:id", getPaymentTypeController.handle);

export { paymentsRoutes };
