import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Apps from "./components/Apps";
import Comparision from "./components/Comparision";
import Stats from "./components/Stats";
import People from "./components/People";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main className="relative">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto">
          <Hero/>
          <Apps/>
          <Comparision/>
          <Stats/>
          <People/>
        </div>
        <div className="mt-auto mb-0">
        <Footer/>
        </div>
        <svg className='absolute top-24 left-0 bottom-0 right-0 opacity-20 ' width="100%" height="100%">
          <pattern id="smallGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
   </main>
  );
}
