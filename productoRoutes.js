const express = require('express'); 
const app = express.Router();
const productoController = require('./productoController');


app.get("/productos", productoController.getAllProducts);

app.get("/productos/:id", productoController.getOneProduct);

app.post("/productos/nuevo", productoController.createProduct);

app.put("/productos/modificar/:id", productoController.modifyProduct);

app.delete("/productos/eliminar/:id", productoController.deleteProduct);

module.exports = app;