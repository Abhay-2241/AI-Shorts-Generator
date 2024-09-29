import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const Users = mysqlTable("users", {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    imageUrl: varchar("imageUrl", { length: 255 }),
    subscription: boolean("subscription").default(false)
});