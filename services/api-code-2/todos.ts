import { getPrismaDBClient } from '../../resources/db';
import { PrismaClient } from '@prisma/client';

let prismaClient: PrismaClient;

async function getPrismaClient() {
    if (!prismaClient) {
        prismaClient = await getPrismaDBClient();
    }
    return prismaClient;
}

void getPrismaClient();

export const getTodos = async () => {
    const todos = await prismaClient.todo.findMany();
    return todos;
};

export const createTodo = async (data) => {
    const todos = await prismaClient.todo.create({
        data,
    });

    return todos;
};
