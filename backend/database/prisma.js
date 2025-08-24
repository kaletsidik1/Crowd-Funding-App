import { PrismaClient } from "../generated/index.js";

const prisma = new PrismaClient();

export { prisma as db };
