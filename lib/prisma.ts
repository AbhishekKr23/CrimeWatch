import { PrismaClient } from "@prisma/client";

declare global {
  // Allow global `prisma` to be modified only in development
  var prisma: PrismaClient | undefined;
}

// Initialize prisma based on environment
const prisma: PrismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
