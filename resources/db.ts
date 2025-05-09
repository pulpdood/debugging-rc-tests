import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

import { sql } from "@nitric/sdk";

const db = sql("todos", {
  migrations: "dockerfile://migrations.dockerfile",
});

/**
 * Get the Prisma client for the database. This is necessary as we need to pass in the database URL
 * and we have username and password stored separately and we need to combine them in the app config
 * before passing it through to the Prisma Client constructor.
 *
 * @returns PrismaClient
 */
export async function getPrismaDBClient(): Promise<PrismaClient> {
  let dbUrl = "";

  if (process.env.NITRIC_ENVIRONMENT !== "build") {
    const connectionString = await db.connectionString();

    dbUrl = `${connectionString}${
      connectionString.includes("?") ? "&" : "?"
    }connect_timeout=30&pool_timeout=30`;
  }

  if (prisma) {
    return prisma;
  }

  prisma = new PrismaClient({
    datasources: {
      db: {
        url: dbUrl,
      },
    },
  });

  return prisma;
}
