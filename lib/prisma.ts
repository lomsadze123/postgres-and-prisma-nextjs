import { PrismaClient } from "@prisma/client";

interface CustomGlobalThis {
  prisma: PrismaClient | undefined;
}

declare const globalThis: CustomGlobalThis;

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;
