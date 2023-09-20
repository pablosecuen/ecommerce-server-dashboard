const express = require("express");

const {
  createInvoice,
  listInvoices,
  getInvoiceById,
  getInvoicesByIsDeleted,
  getInvoicesByUserId,
  deleteInvoice,
} = require("../controllers/invoiceController");

const router = express.Router();

// Rutas para el controlador de facturas
router.post("/create", createInvoice);
router.get("/", listInvoices);
router.get("/:id", getInvoiceById);
router.get("/user/:userId", getInvoicesByUserId);
router.get("/status/:status", getInvoicesByIsDeleted);
router.delete("/delete/:id", deleteInvoice);

module.exports = router;
