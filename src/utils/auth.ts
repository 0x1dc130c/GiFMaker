// auth.ts

import jwt, { Secret } from 'jsonwebtoken';

// สร้าง Token โดยใช้ข้อมูลผู้ใช้งาน
export const generateToken = (userData: any): string => {
    // Ensure that JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }

    // Generate token using the defined secret key
    const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

// ตรวจสอบ Token และถอดรหัสข้อมูลผู้ใช้งานจาก Token
export const verifyToken = (token: string): any => {
    try {
        // ถอดรหัส Token ด้วยส่วนความลับ (secret key) เพื่อทำการตรวจสอบความถูกต้องของ Token
        const decodedData = jwt.verify(token, process.env.JWT_SECRET as Secret);
        return decodedData;
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการตรวจสอบ Token จะคืนค่าเป็น null
        return null;
    }
};
