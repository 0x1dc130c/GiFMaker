import { NextResponse, NextRequest } from "next/server";
import jwt, { JwtPayload  } from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    if (request.method == "POST") {
        const cookie = request.cookies;
        if (!cookie) {
          return NextResponse.json({ message: "Error", status: 500 });
        }
        const token = cookie.toString().split("=")[1];
        const decoded = jwt.verify(token, "secret") as JwtPayload;
        if (decoded) {     
          //df
          return NextResponse.json({ message: "Success", status: 200, data:{role:decoded.role,username:decoded.username,UserID:decoded.UserID, path_profile:decoded.pathProfile, name:decoded.name}});
        } else {
          return NextResponse.json({ message: "Error", status: 500 });
        }
    }
  } catch (error) {
    console.log("Error During login : ", error);
    return NextResponse.json({ message: "Error", status: 500 });
  }
}
