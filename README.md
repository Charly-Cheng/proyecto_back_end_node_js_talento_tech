---

# 📦 Proyecto Back-End Node.js — Talento Tech

API REST construida con **Node.js**, **Express**, **Firebase Firestore** y **JWT** para el manejo de autenticación y CRUD de productos.

---

## 🚀 Descripción del Proyecto

Este proyecto es una API REST que permite gestionar productos y manejar autenticación mediante tokens JWT.
La arquitectura está organizada en capas separadas:

* **Rutas**
* **Controladores**
* **Servicios**
* **Modelos**
* **Middleware**
* **Firebase Firestore**

El proyecto está listo para desplegarse en **Vercel**, **Render**, **Railway**, o cualquier hosting Node.js.

---

## 📁 Estructura del Proyecto

```bash
project-root/
├── README.md
├── package.json
├── .env
├── src/
│   ├── index.js
│   ├── config/
│   │   └── firebase.js
│   ├── rutas/
│   │   ├── productos.rutas.js
│   │   └── auth.rutas.js
│   ├── controladores/
│   │   ├── productos.controladores.js
│   │   └── auth.controladores.js
│   ├── servicios/
│   │   ├── productos.servicios.js
│   │   └── auth.servicio.js
│   ├── modelos/
│   │   └── productos.modelo.js
│   └── middleware/
│       └── auth.middleware.js
```

---

## 🔧 Tecnologías Utilizadas

* Node.js
* Express
* Firebase Firestore
* JWT (jsonwebtoken)
* dotenv
* body-parser
* CORS

---

## 🔐 Autenticación (JWT)

Para obtener un token se debe hacer una petición:

### **POST /auth/login**

#### Ejemplo de cuerpo (Body):

```json
{
  "email": "admin@demo.com",
  "password": "123456"
}
```

#### Respuesta:

```json
{
  "token": "<jwt_token>"
}
```

#### Encabezado requerido en rutas protegidas:

```
Authorization: Bearer <token>
```

---

## 🛒 Endpoints de Productos

| Método | Ruta                 | Descripción                 | Protegida |
| ------ | -------------------- | --------------------------- | --------- |
| GET    | /api/products        | Obtener todos los productos | Sí        |
| GET    | /api/products/:id    | Obtener producto por ID     | Sí        |
| POST   | /api/products/create | Crear un nuevo producto     | Sí        |
| PUT    | /api/products/:id    | Actualizar un producto      | Sí        |
| DELETE | /api/products/:id    | Eliminar un producto        | Sí        |

---

## 🗃️ Ejemplos de Peticiones

### ✔ Obtener todos los productos

```
GET /api/products
Authorization: Bearer <token>
```

---

### ✔ Crear un producto

```
POST /api/products/create
Authorization: Bearer <token>
```

Body:

```json
{
  "name": "Coca Cola",
  "category": "Bebidas",
  "price": 120,
  "alt": "Botella de Coca Cola de 500ml"
}
```

---

### ✔ Actualizar un producto

```
PUT /api/products/ID_DEL_PRODUCTO
Authorization: Bearer <token>
```

Body:

```json
{
  "name": "Coca Cola Zero",
  "price": 150
}
```

---

### ✔ Eliminar un producto

```
DELETE /api/products/ID_DEL_PRODUCTO
Authorization: Bearer <token>
```

---

## 📌 Notas Importantes

* Todas las rutas de productos requieren **token JWT**.
* La colección de Firestore debe llamarse **products**.
* API organizada de forma modular y escalable.

---

## 📄 Licencia

MIT — Puedes usar este proyecto libremente.

