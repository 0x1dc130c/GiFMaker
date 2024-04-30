import { NextResponse, NextRequest} from "next/server";
import { Request } from "express"; // Import the Request type from the 'express' package
import models from "@/app/utils/models";
import { NextApiRequest, NextApiResponse } from 'next';
import jwt,{ sign } from 'jsonwebtoken';


export async function POST(request: NextRequest) {
    try{ // Get the token from the cookie

        console.log('Request method : ',request.method)
        if (request.method == 'POST') {
            const body = await request.json();
            const { cookieName, cookieValue } = body;
            const decode = jwt.verify(cookieValue, 'secret');
            console.log('decode : ',decode);
            const role = (decode as any).role;
            return NextResponse.json({ message: 'Cookie : ', role , status: 200 });

        }
    } catch (error) {
        console.log("Error During login : ", error);
        return NextResponse.json({ message: 'Error', status: 500 });
        // Handle the error here
    }
}
