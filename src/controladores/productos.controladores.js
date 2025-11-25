
import * as productoServicios from "../servicios/productos.servicios.js";

export const getProductos = async (req, res) => {
  const products = await productoServicios.getAllProductos();
  res.json(products);
};

export const getProductoById = async (req, res) => {
  const product = await productoServicios.getProducto(req.params.id);
  res.json(product);
};

export const createProducto = async (req, res) => {
  const result = await productoServicios.createProducto(req.body);
  res.json({ message: "Producto creado", id: result });
};

export const updateProducto = async (req, res) => {
  const { id } = req.params;

  try {
    await productoServicios.updateProducto(id, req.body);
    res.json({ message: "Producto actualizado" });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

export const deleteProducto = async (req, res) => {
  await productoServicios.deleteProducto(req.params.id);
  res.json({ message: "Producto eliminado" });
};
