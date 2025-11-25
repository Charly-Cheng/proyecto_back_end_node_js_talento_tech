import jwt from "jsonwebtoken";

export const login = async (email, password) => {
  const validUser = email === "admin@demo.com" && password === "123456";

  if (!validUser) return null;

  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
