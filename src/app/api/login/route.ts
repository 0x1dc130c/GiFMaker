import { NextResponse } from "next/server";
import pool from "../../utils/db";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password } = body;
        pool.query("SELECT * FROM user_", (error, results) => {
            if (error) {
                throw error;
            }
            
            for (const result of results) {
                const DBusername = result.Username;
                const DBpassword = result.Password; // แก้ไขการเขียนผิดเป็น Password
                
                console.log(" print : DBusername : ",DBusername);
                console.log(" print : DBpassword : ",DBpassword);

                if (username === DBusername && password === DBpassword) {
                    console.log("User logged in successfully!!!!")
                    return NextResponse.json({ message: "User logged in successfully", status: 200 });
                    
                }
            }
        });
        return NextResponse.json({ message: "Babab", status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error in registration", status: 500 });
    }
}