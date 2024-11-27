import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersTable = sqliteTable('users', {
    id: integer('id').primaryKey(),
    username: text('username').notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    fullName: text('full_name'),
    role: text('role').default('user'),
    createdAt: integer('created_at').default(Date.now()),
    updatedAt: integer('updated_at').default(Date.now()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;