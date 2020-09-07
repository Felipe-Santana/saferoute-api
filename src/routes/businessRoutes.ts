import { Router } from "express";
import { create, getById, login } from "../controller/BusinessController";
import { authorize } from "../security/Authorization";

const businessRouter = Router();

businessRouter.post("/", create);
businessRouter.post("/login", login);
businessRouter.get("/:id", authorize, getById);

export default businessRouter;
