import { PrismaClient } from "@prisma/client";

const NODE_ENV = "production";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export const prisma =
  global.prisma ||
  new PrismaClient({
    errorFormat: "minimal",
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  });

if (NODE_ENV !== "production") global.prisma = prisma;
