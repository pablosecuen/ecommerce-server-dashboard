// database.ts

const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "marcosjuarez",
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Payment, Product, Invoice, Category, ShoppingCart } = sequelize.models;

//relaciones

User.hasMany(Payment, { foreignKey: "userID" });
Payment.belongsTo(User, { foreignKey: "userID" });

User.hasMany(Invoice, { foreignKey: "userID" });
Invoice.belongsTo(User, { foreignKey: "userID" });

Product.belongsToMany(Invoice, { through: "InvoiceProduct", foreignKey: "productID" });
Invoice.belongsToMany(Product, { through: "InvoiceProduct", foreignKey: "invoiceID" });

Payment.belongsTo(Invoice, { foreignKey: "invoiceID" });
Invoice.hasOne(Payment, { foreignKey: "invoiceID" });

Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

ShoppingCart.belongsTo(User, { foreignKey: "userID" });
User.hasMany(ShoppingCart, { foreignKey: "userID" });

ShoppingCart.belongsTo(Product, { foreignKey: "productId" });
Product.hasMany(ShoppingCart, { foreignKey: "productId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
