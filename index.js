// TRAIGO MODULOS NECESARIOS
let express = require("express");
//ASIGNO EXPRESS A APP
let app = express();
//BODY-PARSER - Lo LLamo y Configuro
let bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



//CONFIGURO PUERTO DE SERVIDOR

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});
