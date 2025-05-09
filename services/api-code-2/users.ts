import { getPrismaDBClient } from '../../resources/db';

let prismaClient;

async function getPrismaClient() {
    if (!prismaClient) {
        prismaClient = await getPrismaDBClient();
    }
    return prismaClient;
}

void getPrismaClient();

export const getUsers = async () => {
    const users = await prismaClient.user.findMany();
    return users;
};

export const createUser = async (data) => {
    const users = await prismaClient.user.create({
        data,
    });

    return users;
};
