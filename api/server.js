const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const invoiceRoutes = require("./src/routes/invoicesRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const productRoutes = require("./src/routes/productRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");

const { conn } = require("./src/database");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/payment", paymentRoutes);

app.use(morgan("dev"));

conn.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log("Server is listening on port 3001");
  });
});
