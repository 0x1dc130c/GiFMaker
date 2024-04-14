import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
export default function Admin() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-14 bg-gray-200">
                <div className="grid bg-gray-500 m-[20px] p-14 w-[100rem] min-h-screen">
                    <div className="grid p-6">
                        <div className="flex row-span-1 justify-center m-auto">
                            <h1 className="text-5xl text-center">Admin Controle Panel</h1>
                        </div>
                        <div className="flex flwx-col float-right mr-5 relative row-span-3">
                            <Link href="/admin/tagEdit">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Manage Tag</button>
                            </Link>
                            <Link href="/admin/ManageReport">
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Manage Report</button>
                            </Link>
                            <Link href="/admin/ManageAccount">
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Manage Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};