import { Router } from "express";
import { create, getById } from "../controller/BusinessController";
import { authorize } from "../security/Authorization";

const businessRouter = Router();

businessRouter.post("/", create);
businessRouter.get("/:id", authorize, getById);

export default businessRouter;
