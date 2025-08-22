import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../database/prisma.js";

export const register = async (req, res) => {
  try {
    const { email, password, full_name } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const user = await db.users.create({ email, password_hash: hashed, full_name });
    res.json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
