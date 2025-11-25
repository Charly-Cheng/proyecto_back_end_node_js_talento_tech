import * as authService from "../servicios/auth.servicio.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.login(email, password);

  if (!token)
    return res.status(401).json({ error: "Credenciales inválidas" });

  res.json({ token });
};
