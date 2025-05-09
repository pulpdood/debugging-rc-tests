import { api } from "@nitric/sdk";
import { getTodos } from "./api-code/todos";
import { getUsers } from "./api-code/users";
import { createTodo } from "./api-code-2/todos";

const mainApi = api("main");

mainApi.get("/todos", async (ctx) => {
  ctx.res.body = await getTodos();

  return ctx;
});


mainApi.post("/todo", async (ctx) => {
  const todo = await createTodo(ctx.req.json())

  ctx.res.body = todo;

  return ctx;
});

mainApi.get("/users", async (ctx) => {
  ctx.res.body = await getUsers();

  return ctx;
});
