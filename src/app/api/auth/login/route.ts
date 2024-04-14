import { NextResponse } from "next/server";
import { sign } from 'jsonwebtoken';
import { serialize } from "cookie"; // เปลี่ยนเป็นการนำเข้า serialize จาก cookie
import pool from "../../../utils/db";

const MAX_AGE = 60 * 60 * 24 * 30; // 30 วันในวินาที

export async function POST(request: Request) {
    const body = await request.json();

    const { username, password } = body;
    try {
        pool.query("SELECT * FROM user_", (error, results) => {
            if (error) {
                throw error;
            }
            for (const result of results) {
                const DBusername = result.Username;
                const DBpassword = result.Password;
                if (username === DBusername && password === DBpassword) {
                    const token = sign(
                        {
                            username,
                        },
                        process.env.JWT_SECRET || "", {
                        expiresIn: MAX_AGE,
                    }
                    );
                    const serialized = serialize("OutSiteJWT", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'strict',
                        maxAge: MAX_AGE,
                        path: '/',
                    });
                    return new Response(JSON.stringify({ message: "User logged in successfully", status: 200 }), {
                        status: 200,
                        headers: {
                            'Set-Cookie': serialized,
                            'Content-Type': 'application/json',
                        },
                    });
                }
            }
        });
        return NextResponse.json({ message: "Invalid username or password", status: 401 });
    } catch (error) {
        return NextResponse.json({ message: "Error in registration", status: 500 });
        // if (username !== 'admin' || password !== 'admin') {
        //     return NextResponse.json(
        //         { message: 'Invalid username or password' },
        //         { status: 401 }
        //     );
        // }

        // const secret = process.env.JWT_SECRET || "";
        // const token = sign(
        //     {
        //         username,
        //     },
        //     secret, {
        //     expiresIn: MAX_AGE,
        // }
        // );

        // const serialized = serialize("OutSiteJWT", token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: 'strict',
        //     maxAge: MAX_AGE,
        //     path: '/',
        // });

        // const response = {
        //     message: 'Success',
        // };

        // return new Response(JSON.stringify(response), {
        //     status: 200,
        //     headers: {
        //         'Set-Cookie': serialized, // ไม่ต้องเรียก toString() ก็ได้
        //         'Content-Type': 'application/json',
        //     },
        // });
    }
}