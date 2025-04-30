import { useState } from "react";
import { Menu,X } from "lucide-react";

export default function Navbar() {
    const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className="flex max-w-[1440px] h-[80px] md:h-[108px] m-auto  justify-around md:justify-between items-center space-x-3">
      <div className="flex justify-between w-[710px] items-center">
        <div className="flex items-center space-x-2">
          <img src="./logo.png" alt="" className="w-[39px] h-[41px]"/>
          <div className="flex flex-col">
            <p className="text-2xl font-bold tracking-tight text-[#1e3a8a] w-[200px]">SalesRank.AI</p>
            <p className="uppercase text-[0.52rem] font-medium tracking-wider text-[#1e3a8a]  w-[200px]">stop guessing start ranking</p>
          </div>
        </div>
        <div className="hidden md:flex w-[398px] text-sm justify-around md:justify-between font-semibold ">
          <p>Home</p>
          <p>About</p>
          <p>Pricing</p>
          <p>Consulting</p>
          <p>AI Coach</p>
        </div>
      </div>
      <div className="hidden md:block">
        <button className="font-[Manrope] w-[156px] h-[48px] border-1 rounded-3xl font-semibold">Get Started</button>
      </div>

      {/* Mobile button */}
      <button className="md:hidden" onClick={()=>setToggleMenu(prev=>!prev)}>
        {toggleMenu ? 
        <X className="h-6 w-6 text-black"/>
        : <Menu className="h-6 w-6 text-black"/>}
      </button>

      {toggleMenu && 
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white z-50 shadow-2xl py-4 px-6 border-t border-gray-300 my-1"
        >
            <div className="flex flex-col space-y-4 font-semibold">
                <p className="cursor-pointer hover:text-blue-600 transition-colors">Home</p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors">About</p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors">Pricing</p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors">Consulting</p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors">AI Coach</p>
                <button className="cursor-pointer hover:text-blue-600 transition-colors border-1 rounded-2xl py-2 ">Get Started</button>
            </div>
        </div>
      }
    </div>
  );
}
