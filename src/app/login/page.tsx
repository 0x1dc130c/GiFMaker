'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import axios, { AxiosError } from "axios";
function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const payload = {
        username: username,
        password: password,
    }; // Declare the payload variable
    const handleSunmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(username, password);
        if (!username || !password) {
            setError('กรุณากรอกข้อมูลให้ครบ');
            return;
        }
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (res.ok) {
                const {data} = await axios.post("/api/auth/login", payload);
                const form = e.target as HTMLFormElement;
                setError("");
                form.reset();
            } else {
                console.log("User Login Failed");
            }
        } catch (error) {
            console.log("Error During login : ", error);
            // Handle the error here
        }
    };

    return (
        <div className="m-0">
            <Navbar />
            <div className="items-center justify-between flex flex-col p-14">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSunmit}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">เข้าสู่ระบบ</h5>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ใช้งาน</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
                            <input onChange={(e) => setPassword(e.target.value)}type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">จดจำการเข้าสู่ระบบ  </label>
                            </div>
                            <a href="/forgot" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">ลืมรหัสผ่าน?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">ยังไม่มีบัญชี?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;