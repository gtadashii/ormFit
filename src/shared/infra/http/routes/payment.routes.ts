import { Router } from "express";

import { CreatePaymentTypeController } from "../../../../modules/payment/useCases/createPaymentType/CreatePaymentTypeController";
import { DeletePaymentTypeController } from "../../../../modules/payment/useCases/deletePaymentType/DeletePaymentTypeController";
import { GetPaymentTypeController } from "../../../../modules/payment/useCases/getPaymentType/GetPaymentTypeController";
import { ListPaymentTypesController } from "../../../../modules/payment/useCases/listPaymentTypes/ListPaymentTypesController";

const paymentsRoutes = Router();

const createPaymentTypeController = new CreatePaymentTypeController();
const deletePaymentTypeController = new DeletePaymentTypeController();
const getPaymentTypeController = new GetPaymentTypeController();
const listPaymentTypesController = new ListPaymentTypesController();

paymentsRoutes.post("/", createPaymentTypeController.handle);
paymentsRoutes.delete("/:id", deletePaymentTypeController.handle);
paymentsRoutes.get("/", listPaymentTypesController.handle);
paymentsRoutes.get("/:id", getPaymentTypeController.handle);

export { paymentsRoutes };
