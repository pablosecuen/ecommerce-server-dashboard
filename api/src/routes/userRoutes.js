const express = require("express");
const {
  createUser,
  listUsers,
  getUserById,
  getUserByEmail,
  getUserByPhone,
  updateUser,
  softDeleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/create", createUser);
router.get("/list", listUsers);
router.get("/list/:id", getUserById);
router.get("/list/email/:email", getUserByEmail);
router.get("/list/phone/:phone", getUserByPhone);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", softDeleteUser);

module.exports = router;
