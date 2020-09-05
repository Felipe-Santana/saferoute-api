import { Router } from "express";
import businessRouter from "./routes/businessRoutes";

const router = Router();

router.use("/business", businessRouter);

export default router;
