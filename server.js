const express = require("express");
const path = require("path");

const app = express();

// Servir archivos estáticos
app.use(express.static(__dirname));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Servidor corriendo en puerto " + port);
});
