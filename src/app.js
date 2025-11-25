/*
Crea un servidor web con express y realiza su configuración en el archivo index.js.
Configura CORS para habilitar las peticiones de origen cruzado, así las aplicaciones Frontend de la empresa
pueden consultar al servicio sin problemas.
Configura el middleware global de body-parser para interpretar los body en formato JSON de las peticiones.
Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.
Crea un archivo .env donde se alojarán las variables de entorno del proyecto.
*/

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/products", productoRutas);
app.use("/auth", authRutas);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
