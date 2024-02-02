import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    
    <div> 
      <Navbar/>
      <div class="px-5 py-5 bg-red-200 m-10 xl:min-w-10 xl:m-20">
        <div class="">
          <h1 class="text-2xl font-bold text-center">Welcome to the GIF MAKER</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
