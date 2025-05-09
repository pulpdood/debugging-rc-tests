import { api } from "@nitric/sdk";
import { getPrismaDBClient } from "../resources/db";
import { getTodos } from "./api-code/todos";
import { getUsers } from "./api-code/users";

const mainApi = api("main");

mainApi.get("/todos", async (ctx) => {
  ctx.res.body = await getTodos();

  return ctx;
});


mainApi.get("/users", async (ctx) => {
  ctx.res.body = await getUsers();

  return ctx;
});
