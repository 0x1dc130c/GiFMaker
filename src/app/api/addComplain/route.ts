import { NextRequest, NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import models from "../../utils/models";
import jwt, { JwtPayload  } from "jsonwebtoken";
export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        const { img_ID, details } = body;
        
        const cookie = req.cookies;
        console.log('cookie : ', cookie);
        if (!cookie) {
            return NextResponse.json({ message: "Error", status: 500 });
          }
          const token = cookie.toString().split("=")[1];
          const decoded = jwt.verify(token, "secret") as JwtPayload;

          console.log('decoded : ', decoded);
          

        return NextResponse.json({ message: 'Successfully retrieved image', status: 200 });

    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'File uploaded failed', status: 400 });
    }
}