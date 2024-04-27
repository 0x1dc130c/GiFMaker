import {NextRequest, NextResponse } from "next/server";
import models from "../../utils/models";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("body", body);
        const { username,password, cpassword, email, name } = body;
        const status = 1;
        const role = "user";
        
        console.log("username", username, "email", email, "password", password, "name", name, "status", status, "role", role)
        models.User.create({Username : username, Password : password, email : email, status : status, role : role , name : name });
        return NextResponse.json({ message: {username, email, password}, status: 200 });

        // return NextResponse.json({ message: "User registered successfully", status: 200 });
        // console.log("username", username, "email", email, "password", password, "name", name, "status", status, "role", role)

        // await models.User.create({ username, email, password, name, status, role });
        // return NextResponse.json({ message: "User registered successfully", status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error in registration", status: 500 });
    }
}
