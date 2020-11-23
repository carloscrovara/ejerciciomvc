// TRAIGO MODULOS NECESARIOS
let express = require("express");
//ASIGNO EXPRESS A APP
let app = express();
//BODY-PARSER - Lo LLamo y Configuro
let bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//DATOS DE PRODUCTOS

let data = [
    { id: 1, nombre: "Heladera", precio: 50000, stock: 20 }
];



//RUTAS DE LA APLICACION

//TRAER TODOS LOS PRODUCTOS -> GET
app.get("/productos", function (req, res) {
  res.status(200).json(data);
});

//TRAE UN SOLO PRODUCTO -> GET -> ID Por paramentro.
app.get("/productos/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json("No se encontró producto");
  }
});

//CREAR PRODUCTO -> POST -> POR BODY(id, nombre, precio, stock)
app.post("/productos/nuevo", function (req, res) {
     
  
    let nuevoProducto = {
        id: req.body.id,
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
    }
  
    data.push(nuevoProducto);

    res.status(201).json(nuevoProducto);
});

//MODIFICAR PRODUCTO -> PUT -> POR BODY(nombre, precio, cantidad) -> POR PARAMETRO(id)
app.put("/productos/modificar/:id", function (req, res) {
   
    let producto = data.find(function (item) {
        return item.id === parseInt(req.params.id);
      });

      if(producto){
       
        let modificarProducto = {
            id: req.body.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock
        }
      
        let encontrado = data.indexOf(producto)

        data.splice(encontrado, 1, modificarProducto )

        res.status(200).json("producto modificado");

    }else{
        res.status(404).json("No existe producto");
    }
 
 
      


});




//BORRAR PRODUCTO -> DELETE -> POR PARAMETRO(id)
app.delete("/productos/eliminar/:id", function (req, res) {
  
    let producto = data.find(function (item) {
        return item.id === parseInt(req.params.id);
      });

      if(producto){
       
        let encontrado = data.indexOf(producto)

        data.splice(encontrado, 1 )

        res.status(200).json("producto Eliminado");

    }else{
        res.status(404).json("No existe producto");
    }
});

//CONFIGURO PUERTO DE SERVIDOR

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});
