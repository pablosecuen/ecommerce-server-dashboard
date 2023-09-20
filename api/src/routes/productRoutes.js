const express = require("express");
const router = express.Router();
const {
  listAllProducts,
  getProductById,
  getProductsByName,
  getProductsByMeasure,
  getProductsByColor,
  getProductsByPrice,
  getProductsByDescription,
  getProductsByIsDeleted,
  getProductsInSale,
  updateProduct,
  deleteProductById,
  createProduct,
} = require("../controllers/productController");

// Rutas para productos
router.get("/list", listAllProducts);
router.get("/:id", getProductById);
router.get("/search/:name", getProductsByName);
router.get("/measure/:measure", getProductsByMeasure);
router.get("/color/:color", getProductsByColor);
router.get("/price/:minPrice/:maxPrice", getProductsByPrice);
router.get("/description/:description", getProductsByDescription);
router.get("/isDeleted/:isdeleted", getProductsByIsDeleted);
router.get("/inSale/:insale", getProductsInSale);
router.post("/create", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProductById);

module.exports = router;
