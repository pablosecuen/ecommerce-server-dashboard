// routes/categoryRoutes.js

const express = require("express");
const {
  createCategory,
  deleteCategoryByName,
  findCategoryByName,
  listCategories,
} = require("../controllers/categoryController");

const router = express.Router();

// Rutas para el controlador de categorías
router.post("/create", createCategory);
router.delete("/delete/:name", deleteCategoryByName);
router.get("/find/:name", findCategoryByName);
router.get("/list", listCategories);

module.exports = router;
