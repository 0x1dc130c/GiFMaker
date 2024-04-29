import fetch from 'node-fetch';
import { cookies } from 'next/headers';

const CheckUserID = async () => {
    try {
        const cookieStorage = cookies(); // เรียกใช้ cookies จาก next/headers
        const cookie = cookieStorage.get('token');
        const cookieName = cookie?.name;
        const cookieValue = cookie?.value;

        const response = await fetch("/api/GetUserID", {
            method: "POST",
            body: JSON.stringify({ cookieName, cookieValue }),
        });
        const data = await response.json() as { status: number, UsID: string, message: string };
        if (data.status === 200) {
            return data.UsID;
        } else {
            console.log('data.message : ', data.message);
        }
    } catch (error) {
        console.error('Error in CheckCookie:', error);
    }
}


export default async function GetUID() {
    const UsID = await CheckUserID();
    return UsID;
}
