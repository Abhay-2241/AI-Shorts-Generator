import { boolean, varchar } from "drizzle-orm/pg-core";
import { integer, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
    id : integer('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar("email").notNull(),
    imageUrl: varchar("imageUrl"),
    subscription: boolean("subscription").default(false)
});

