// swagger.js

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de tu aplicación",
      version: "1.0.0",
      description: "Documentación de la API de tu aplicación",
    },
  },
  apis: ["./routes/*.js"], // Especifica la ubicación de tus archivos de rutas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
