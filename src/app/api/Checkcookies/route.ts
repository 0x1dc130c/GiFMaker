import { NextResponse, NextRequest } from "next/server";
import jwt, { JwtPayload  } from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    if (request.method == "POST") {
        const cookie = await request.json();
        console.log("cookie --------------------------------- : ", cookie);
        if (!cookie) {
          return NextResponse.json({ message: "Error", status: 500 });
        }
        const { cookieName, cookieValue } = cookie;
        const decoded = jwt.verify(cookieValue, "secret");
        console.log("decoded -------------------------------- : ", decoded);
        if (decoded) {     
          return NextResponse.json({ message: "Success", status: 200, data:{role:(decoded as any).role , username:(decoded as any).username, UserID:(decoded as any).UserID}});
        } else {
          return NextResponse.json({ message: "Error", status: 500 });
        }
    }
  } catch (error) {
    console.log("Error During login : ", error);
    return NextResponse.json({ message: "Error", status: 500 });
  }
}
