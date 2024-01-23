import { env } from "@/env.mjs";
import { PrismaClient } from "@prisma/client";

const prismaClientSignleton = () => {
  return new PrismaClient();
};

type PrismaClientSignleton = ReturnType<typeof prismaClientSignleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSignleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSignleton();

export default prisma;

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
