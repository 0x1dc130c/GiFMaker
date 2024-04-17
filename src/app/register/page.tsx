'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { error } from 'console';
function Register() {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [Cpassword, setCPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [alert, setAlert] = React.useState('');
    const handleSunmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(name, password, Cpassword, email);
        if (password !== Cpassword) {
            setAlert('รหัสผ่านไม่ตรงกัน');
            return;
        }
        if (!name || !password || !Cpassword || !email) {
            setAlert('กรุณากรอกข้อมูลให้ครบ');
            return;
        }

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password, email, Cpassword }),
            });
            if (res.ok) {
                const form = e.target as HTMLFormElement;
                setAlert("");
                form.reset();
            } else {
                console.log("User Registerd Failed");
            }

        } catch (error) {
            console.log("Error During register : ", error);

        }
    }   
    return (
        <div className="m-0">
            <Navbar />
            <div className="items-center justify-between flex flex-col p-14">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSunmit}>

                        {alert && <div className="text-red-500 text-sm font-medium text-center">{alert}</div>}
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">สมัครสมาชิก</h5>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ใช้งาน</label>
                            <input onChange={(e) => setName(e.target.value)} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="floating_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="floating_password" id="floating_password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label htmlFor="floating_repeat_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ยืนยันรหัสผ่าน</label>
                            <input onChange={(e) => setCPassword(e.target.value)} type="password" name="repeat_password" id="floating_repeat_password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อีเมลล์</label>
                            <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">สมัครสมาชิก</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">มีบัญชีอยู่แล้ว?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;