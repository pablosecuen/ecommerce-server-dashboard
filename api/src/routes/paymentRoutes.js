const express = require("express");
const router = express.Router();
const {
  getAllPayments,
  getPaymentById,
  getPaymentsByProduct,
  getPaymentsByUserId,
  softDeletePayment,
  createPayment,
} = require("../controllers/paymentController");

// Rutas para pagos
router.get("/", getAllPayments);
router.get("/:id", getPaymentById);
router.get("/product/:productId", getPaymentsByProduct);
router.get("/user/:userId", getPaymentsByUserId);
router.delete("/delete/:id", softDeletePayment);
router.post("/create", createPayment);

module.exports = router;
