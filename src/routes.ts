import { Router } from "express";
import businessRouter from "./routes/businessRoutes";
import deliverymanRoutes from "./routes/deliverymanRoutes";

const router = Router();

router.use("/business", businessRouter);
router.use("/deliveryman", deliverymanRoutes);

export default router;
