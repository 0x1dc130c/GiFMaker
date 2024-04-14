import { NextResponse } from "next/server";
import pool from "../../utils/db";

export async function POST(request: Request) {
    try {
        const {username, password} = await request.json();
        pool.query("SELECT * FROM user_", (error, results) => {
            if (error) {
                throw error;
            }
            for (const result of results) {
                const DBusername = result.Username;
                const DBpassword = result.Passwrod; // แก้ไขการเขียนผิดเป็น Password
                console.log("DBusername : ", DBusername);
                console.log("DBpassword : ", DBpassword);
                console.log("username : ", username);
                console.log("password : ", password);

                
                if (username === DBusername && password === DBpassword) {
                    console.log("User logged in successfully!!!!")
                    return NextResponse.json({ message: "User logged in successfully", status: 200 });
                    
                }
            }
        });
        return NextResponse.json({ message: "User registered successfully", status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error in registration", status: 500 });
    }
}