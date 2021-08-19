import { container } from "tsyringe";

import { PaymentTypesRepository } from "../../modules/payment/infra/typeorm/repositories/PaymentTypesRepository";
import { IPaymentTypesRepository } from "../../modules/payment/repositories/IPaymentTypesRepository";
import { PlansRepository } from "../../modules/plans/infra/typeorm/repositories/PlansRepository";
import { IPlansRepository } from "../../modules/plans/repositories/IPlansRepository";

container.registerSingleton<IPlansRepository>(
  "PlansRepository",
  PlansRepository
);

container.registerSingleton<IPaymentTypesRepository>(
  "PaymentTypesRepository",
  PaymentTypesRepository
);
