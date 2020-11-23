// TRAIGO MODULOS NECESARIOS
let express = require("express");
//ASIGNO EXPRESS A APP
let app = express();
//BODY-PARSER - Lo LLamo y Configuro
let bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


//RUTAS DE LA APLICACION

//TRAER TODOS LOS PRODUCTOS -> GET
app.get("/productos", function (req, res) {
    res.status(200).json("hola");
});

//TRAE UN SOLO PRODUCTO -> GET -> ID Por paramentro.
app.get("/productos/:id", function(req, res){
    res.status(200).json("un solo producto")
})

//CREAR PRODUCTO -> POST -> POR BODY(id, nombre, precio, stock)
app.post("/productos/nuevo", function(req,res){
    let producto = req.body;
    res.status(201).json(producto)
});

//MODIFICAR PRODUCTO -> PUT -> POR BODY(nombre, precio, cantidad) -> POR PARAMETRO(id)
app.put("/productos/modificar/:id", function(req, res){
    let producto = req.body;
    res.status(200).json(producto)
})

//BORRAR PRODUCTO -> DELETE -> POR PARAMETRO(id)
app.delete("/productos/eliminar/:id", function(req, res){
    res.status(200).json("producto borrado correctamente")
})

//CONFIGURO PUERTO DE SERVIDOR

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});
