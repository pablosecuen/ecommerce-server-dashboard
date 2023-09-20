const { Payment, Product, User } = require("../database");

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({ where: { isDeleted: false } });
    res.status(200).json({ payments });
  } catch (error) {
    console.error("Error al obtener los pagos:", error);
    res.status(500).json({ message: "Error al obtener los pagos", error: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }

    if (payment.isDeleted) {
      return res.status(404).json({ message: "Pago eliminado" });
    }

    res.status(200).json({ payment });
  } catch (error) {
    console.error("Error al obtener el pago por ID:", error);
    res.status(500).json({ message: "Error al obtener el pago por ID", error: error.message });
  }
};

const getPaymentsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const payments = await Payment.findAll({
      where: { ProductId: productId, isDeleted: false },
    });

    res.status(200).json({ payments });
  } catch (error) {
    console.error("Error al obtener los pagos por producto:", error);
    res
      .status(500)
      .json({ message: "Error al obtener los pagos por producto", error: error.message });
  }
};

const getPaymentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const payments = await Payment.findAll({
      where: { UserId: userId, isDeleted: false },
    });

    res.status(200).json({ payments });
  } catch (error) {
    console.error("Error al obtener los pagos por ID de usuario:", error);
    res
      .status(500)
      .json({ message: "Error al obtener los pagos por ID de usuario", error: error.message });
  }
};

const softDeletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }

    payment.isDeleted = true;
    await payment.save();

    res.status(200).json({ message: "Pago eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el pago:", error);
    res.status(500).json({ message: "Error al eliminar el pago", error: error.message });
  }
};

// Controlador para crear un pago
const createPayment = async (req, res) => {
  try {
    const {
      cardnumber,
      expirationDate,
      securityCode,
      amount,
      cardType,
      cardholderName,
      billingAddress,
      paymentMethod,
      orderNumber,
      comments,
      userId,
    } = req.body;

    const payment = await Payment.create({
      cardnumber,
      expirationDate,
      securityCode,
      amount,
      cardType,
      cardholderName,
      billingAddress,
      paymentMethod,
      orderNumber,
      comments,
      userId,
    });

    res.status(201).json({ payment });
  } catch (error) {
    console.error("Error al crear el pago:", error);
    res.status(500).json({ message: "Error al crear el pago", error: error.message });
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  getPaymentsByProduct,
  getPaymentsByUserId,
  softDeletePayment,
  createPayment,
};
