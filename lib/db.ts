import {PrismaClient} from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;

}



export const db = globalThis || new PrismaClient();


if (process.env.NODE_ENV !=="production") globalThis.prisma =
db;



// export const db = new PrismaClient();