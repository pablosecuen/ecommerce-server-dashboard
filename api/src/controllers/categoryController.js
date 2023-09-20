// controllers/categoryController.js

const { Category } = require("../database");

const listCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ message: "Error al obtener categorías", error: error.message });
  }
};

// Controlador para crear una nueva categoría
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = await Category.create({ name, description });
    res.status(201).json({ category: newCategory });
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    res.status(500).json({ message: "Error al crear la categoría", error: error.message });
  }
};

// Controlador para eliminar una categoría por su nombre
const deleteCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Category.findOne({ where: { name } });
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    await category.destroy();
    res.status(204).json({ message: "Categoría eliminada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la categoría por nombre", error: error.message });
  }
};

// Controlador para buscar una categoría por su nombre
const findCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Category.findOne({ where: { name } });
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }
    res.status(200).json({ category });
  } catch (error) {
    console.error("Error al buscar la categoría por nombre:", error);
    res
      .status(500)
      .json({ message: "Error al buscar la categoría por nombre", error: error.message });
  }
};

module.exports = {
  createCategory,
  deleteCategoryByName,
  findCategoryByName,
  listCategories,
};
