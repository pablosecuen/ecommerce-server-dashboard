// controllers/productController.js
const { Product } = require("../database");
const { Op } = require("sequelize");

const createProduct = async (req, res) => {
  try {
    const { name, measure, color, price, stock, files, description, isDeleted, inSale } = req.body;

    // Crea un nuevo producto en la base de datos
    const newProduct = await Product.create({
      name,
      measure,
      color,
      price,
      stock,
      files,
      description,
      isDeleted,
      inSale,
    });

    res.status(201).json({ message: "Producto creado exitosamente", product: newProduct });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ message: "Error al crear el producto", error: error.message });
  }
};

// Listar todos los productos completos
const listAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error al listar todos los productos:", error);
    res.status(500).json({ message: "Error al listar todos los productos", error: error.message });
  }
};

// Buscar producto por ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ product });
  } catch (error) {
    console.error("Error al buscar producto por ID:", error);
    res.status(500).json({ message: "Error al buscar producto por ID", error: error.message });
  }
};

const getProductsByName = async (req, res) => {
  try {
    const { name } = req.params;
    const products = await Product.findAll({ where: { name: name } });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos por nombre", error: error.message });
  }
};

const getProductsByMeasure = async (req, res) => {
  try {
    const { measure } = req.params;
    const products = await Product.findAll({ where: { measure: measure } });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos por medida", error: error.message });
  }
};

const getProductsByColor = async (req, res) => {
  try {
    const { color } = req.params;
    const products = await Product.findAll({ where: { color } });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos por color", error: error.message });
  }
};

const getProductsByPrice = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.params; // Cambia de req.query a req.params
    const products = await Product.findAll({
      where: {
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      },
    });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos por precio", error: error.message });
  }
};

const getProductsByDescription = async (req, res) => {
  try {
    const { description } = req.params;
    const products = await Product.findAll({ where: { description } });
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar productos por descripción", error: error.message });
  }
};

const getProductsByIsDeleted = async (req, res) => {
  try {
    const { isdeleted } = req.params; // Cambia de req.params a req.params
    const products = await Product.findAll({ where: { isDeleted: isdeleted } }); // Asegúrate de usar isDeleted en lugar de isdeleted
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({
      message: "Error al buscar productos por estado de eliminación",
      error: error.message,
    });
  }
};

const getProductsInSale = async (req, res) => {
  try {
    const { insale } = req.params; // Cambia de req.params a req.params
    const products = await Product.findAll({ where: { inSale: insale } }); // Asegúrate de usar insale en lugar de inSale
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar productos en venta", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body; // Debes validar y estructurar los datos adecuadamente
    const [rowsUpdated, [updatedProductData]] = await Product.update(updatedProduct, {
      returning: true,
      where: { id },
    });
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ updatedProduct: updatedProductData });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar producto", error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRowCount = await Product.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(204).send({ message: "Producto eliminado con exito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar producto por ID", error: error.message });
  }
};

module.exports = {
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
  listAllProducts,
  createProduct,
};
