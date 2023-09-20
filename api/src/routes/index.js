// api/routes/index.ts

import express from "express";
import userRoutes from "./userRoutes";
import invoiceRouters from "./invoicesRoutes";
import categoryRoutes from "./categoryRoutes";
import productRoutes from "./productRoutes";
import paymentRoutes from "./paymentRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/invoices", invoiceRouters);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/payment", paymentRoutes);

export default router;
