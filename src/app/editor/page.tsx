

// export default function Editor() {
//   return ( 
//     <div>
//       <Navbar/>
//       <div class="grid place-items-center ">
//       <div class = "grid place-items-left">
//         <div class="bg-yellow-200 m-10 w-28 h-10"></div>
//       </div>
//           <div class="w-72 h-54 bg-blue-500 m-4 "></div>
//           <div class="w-80 h-28 bg-red-500 m-10 "></div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
'use client';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dynamic from 'next/dynamic'

const DynmicEditor = dynamic(() => import('../../components/Editor').then(a => a.EditorWithStore), {
  ssr: false,
})

function EditorPage() {
  return (
    <div>
      <Navbar/>
      <DynmicEditor/>
      <Footer/>
    </div>
  );
}
EditorPage.diplsayName = "EditorPage";

export default EditorPage;
