import { getPrismaDBClient } from '../../../resources/db';

let prismaClient;

async function getPrismaClient() {
    if (!prismaClient) {
        prismaClient = await getPrismaDBClient();
    }
    return prismaClient;
}

void getPrismaClient();

export const getTodosByName = async (text) => {
    const todos = await prismaClient.todo.findMany({
        where: {
            text: {
                contains: text,
            },
        },
    });
    return todos;
};