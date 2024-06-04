
import { cookies } from 'next/headers';

const CheckUserID = async () => {
    try {
        const cookie = document.cookie.split(';').find(c => c.trim().startsWith('token'));
        const cookieName = cookie?.split('=')[0];
        const cookieValue = cookie?.split('=')[1];

        const response = await fetch("/api/getUserID", {
            method: "POST",
            body: JSON.stringify({ cookieName, cookieValue }),
        });
        const data = await response.json() as { status: number, UsID: string, message: string };
        //console.log('data ---------------------------------->  : ', data);
        if (data.status === 200) {
            return data.UsID;
        } else {
            return;
            //console.log('data.message : ', data.message);
        }
    } catch (error) {
        console.error('Error in CheckCookie:', error);
    }
}


export default async function GetUID() {
    const UsID = await CheckUserID();
    return UsID;
}
