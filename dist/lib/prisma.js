import dotenv from "dotenv";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
// Load environment variables
dotenv.config();
// Ensure DATABASE_URL is defined
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in .env file. Please configure your PostgreSQL connection.");
}
const adapter = new PrismaPg({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
const prisma = new PrismaClient({ adapter });
export default prisma;
//# sourceMappingURL=prisma.js.map