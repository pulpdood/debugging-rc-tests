import { PrismaClient } from '@prisma/client';
import { getPrismaDBClient } from '../../resources/db';
import { getTodosByName } from './nested/nested';

let prismaClient : PrismaClient;

async function getPrismaClient() {
    if (!prismaClient) {
        prismaClient = await getPrismaDBClient();
    }
    return prismaClient;
}

void getPrismaClient();

export const getTodos = async () => {
    const todos = await prismaClient.todo.findMany();
    const todosByName = await getTodosByName("test");
    return [...todos, ...todosByName];
};

export const createTodo = async (data) => {
    const todos = await prismaClient.todo.create({
        data,
    });

    return todos;
};
