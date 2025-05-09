import { api } from "@nitric/sdk";
import { getPrismaDBClient } from "../resources/db";

const mainApi = api("main");

mainApi.get("/test", async (ctx) => {
  const prisma = await getPrismaDBClient();

  const todos = await prisma.todo.findMany();

  ctx.res.body = todos;

  return ctx;
});
