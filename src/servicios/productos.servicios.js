import * as productoModelo from "../modelos/productos.modelo.js";

export const getAllProductos = () => productoModelo.getAll();
export const getProducto = (id) => productoModelo.getById(id);
export const createProducto = (data) => productoModelo.create(data);
export const deleteProducto = (id) => productoModelo.remove(id);
