import bcrypt from 'bcrypt';
import {InsertUser, usersTable} from "@/db/schema";
import {db} from "@/db";

export async function signup(formData: FormData) {
    'use server'

    // Note: To keep things simple, we are not going to implement validation
    // It is highly recommended to validate user input when receiving form input

    // Note: Do not coerce any type to a string, use validators instead that return the correct type
    const username = formData.get('name') as string;
    const userEmail = formData.get('email') as string;
    const password = formData.get('password') as string;

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser: typeof usersTable.$inferInsert = {
        username: userEmail,
        email: userEmail,
        password: hashedPassword,
    };

    // Create a user in the DB
    await db.insert(usersTable).values(newUser);
}