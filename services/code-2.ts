import { api } from "@nitric/sdk";
import { createTodo } from "./api-code-2/todos";
import { createUser } from "./api-code-2/users";

const mainApi = api("main");

mainApi.post("/todo", async (ctx) => {
  const todo = await createTodo(ctx.req.json())

  ctx.res.body = todo;

  return ctx;
});


mainApi.post("/user", async (ctx) => {
  const user = await createUser(ctx.req.json())

  ctx.res.body = user;

  return ctx;
});