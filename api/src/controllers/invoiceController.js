// api/controllers/invoiceController.ts

const { Invoice } = require("../database");

// Función para crear una factura
const createInvoice = async (req, res) => {
  try {
    const {
      totalCost,
      paymentMethod,
      date,
      productInfo,
      invoiceNumber,
      customerInfo,
      paymentDetails,
      taxes,
      discounts,
      dueDate,
      notes,
      currency,
      paymentStatus,
      attachedFile,
      userId,
    } = req.body;

    const newInvoice = await Invoice.create({
      userId,
      totalCost,
      paymentMethod,
      date,
      productInfo,
      invoiceNumber,
      customerInfo,
      paymentDetails,
      taxes,
      discounts,
      dueDate,
      notes,
      currency,
      paymentStatus,
      attachedFile,
      isDeleted: false,
    });

    res.status(201).json({ message: "Factura creada con éxito", invoice: newInvoice });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la factura", error });
  }
};

// Función para listar facturas
const listInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();

    res.status(200).json({ invoices });
  } catch (error) {
    console.error("Error al listar facturas:", error);
    res.status(500).json({ message: "Error al listar facturas", error });
  }
};

// Función para obtener una factura por su ID
const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findByPk(id);

    if (invoice) {
      res.status(200).json({ invoice });
    } else {
      res.status(404).json({ message: "Factura no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener factura por ID", error });
  }
};

const getInvoicesByIsDeleted = async (req, res) => {
  try {
    const { isDeleted } = req.params;
    const isDeletedBoolean = isDeleted === "true";
    const invoices = await Invoice.findAll({ where: { isDeleted: isDeletedBoolean } });
    res.status(200).json({ invoices });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar facturas por estado isDeleted", error: error.message });
  }
};

const getInvoicesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const invoices = await Invoice.findAll({ where: { userId } });
    if (invoices) {
      res.status(200).json({ invoices });
    } else {
      res.status(404).json({ message: "Facturas no encontradas para el usuario" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener facturas por ID de usuario", error });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }
    await invoice.update({ isDeleted: true });
    res.status(200).json({ message: "Factura eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la factura", error });
  }
};

module.exports = {
  createInvoice,
  listInvoices,
  getInvoiceById,
  getInvoicesByIsDeleted,
  getInvoicesByUserId,
  deleteInvoice,
};
