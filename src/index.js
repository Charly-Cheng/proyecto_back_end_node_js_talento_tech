import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import productosRutas from "./rutas/productos.rutas.js";
import authRutas from "./rutas/auth.rutas.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/products", productosRutas);
app.use("/auth", authRutas);

// inicio /
// 
app.get("/", (req, res) => {
  res.send({Mensage:"Bienvenido al servidor"});


});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
