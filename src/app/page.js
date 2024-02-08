import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#E1EFFE" }}>
      <Navbar />
      <div className="px-5 py-5">
        <h1 className="text-2xl font-bold text-center">Showcase</h1>
        <div className="flex justify-between items-center">
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4 py-5">
          {/* Placeholder for work showcase */}
          {/* You can add your showcase items here */}
          {/* Row 1 */}
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4 py-5">
          {/* Placeholder for work showcase */}
          {/* You can add your showcase items here */}
          {/* Row 2 */}
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
          <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center border border-black">
            Placeholder
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* Placeholder for page selection */}
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
      </div>
      <Footer />
    </div>
  );
}
