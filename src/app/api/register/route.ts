import { NextResponse } from "next/server";
import pool from "../../utils/db";

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();
        console.log("name : ", name);
        console.log("email : ", email);
        console.log("password : ", password);
        
        const newUser = {
            Username: name,
            Password: password,
            email: email,
            status:"test",
            role: "test",
            name: "test",
        };
        
        pool.query("INSERT INTO user_ SET ?", newUser, (error, results) => {
            if (error) {
                throw error;
            }
            console.log("User registered successfully!!!!");
        });

        return NextResponse.json({ message: "User registered successfully", status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error in registration", status: 500 });
    }
}
