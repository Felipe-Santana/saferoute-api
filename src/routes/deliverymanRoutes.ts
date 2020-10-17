import { Router } from "express";
import { create, login } from "../controller/DeliverymanController";
import { authorize } from "../security/Authorization";

const deliverymanRoutes = Router();

deliverymanRoutes.post("/", create);
deliverymanRoutes.post("/login", login);

export default deliverymanRoutes;
