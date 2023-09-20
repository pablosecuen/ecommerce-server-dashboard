// api/controllers/userController.ts

const { User } = require("../database"); // Importa el modelo de usuario

//funcion para crear usuarios
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, phone } = req.body;
    const newUser = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
      phone,
      isDeleted: false,
    });

    res.status(201).json({ message: "Usuario creado con éxito", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Error al crear el usuario", error });
  }
};

// Función para listar usuarios
const listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error al listar usuarios", error });
  }
};

// Función para obtener un usuario por su ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario por ID", error });
  }
};

// Función para obtener un usuario por su dirección de correo electrónico
const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario por email", error });
  }
};

// Función para obtener un usuario por su número de teléfono
const getUserByPhone = async (req, res) => {
  try {
    const { phone } = req.params;
    const user = await User.findOne({ where: { phone } });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuario por número de teléfono", error });
  }
};

// Función para editar la información del usuario
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const user = await User.findByPk(userId);
    if (user) {
      // Actualiza solo los campos proporcionados en req.body
      await user.update(updatedData);
      res.status(200).json({ message: "Información de usuario actualizada con éxito" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la información del usuario", error });
  }
};

const softDeleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (user) {
      // Cambia el estado de isDeleted a true
      await user.update({ isDeleted: true });
      res.status(200).json({ message: "Usuario marcado como eliminado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al cambiar el estado del usuario a isDeleted", error });
  }
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  getUserByEmail,
  getUserByPhone,
  updateUser,
  softDeleteUser,
};
