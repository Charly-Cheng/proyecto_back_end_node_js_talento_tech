import express from "express";
import {
  getProductos,
  getProductoById,
  createProducto,
  deleteProducto,
  updateProducto
} from "../controladores/productos.controladores.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Proteger rutas con middleware de autenticación
router.get("/", getProductos);
router.get("/:id", authMiddleware, getProductoById);
router.post("/create", authMiddleware, createProducto);
router.put("/:id", authMiddleware, updateProducto);

router.delete("/:id", authMiddleware, deleteProducto);

export default router;
