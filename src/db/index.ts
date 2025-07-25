import {PrismaClient} from "@/generated/prisma";

declare global {
    var cachedPrisma: PrismaClient |undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}
export const db = prisma