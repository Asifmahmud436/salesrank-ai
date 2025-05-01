import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navbar */}
      <div className="py-4 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-[39px] h-[41px] relative">
              <img
                src="./logo.png"
                alt="SalesRank.AI Logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#1e3a8a]">
                SalesRank.AI
              </p>
              <p className="uppercase text-[0.52rem] font-medium tracking-wider text-[#1e3a8a]">
                stop guessing start ranking
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm font-semibold">
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                Home
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                About
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                Pricing
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                Consulting
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                AI Coach
              </p>
            </div>
            <button className="font-[Manrope] px-6 h-[48px] border border-gray-300 rounded-3xl font-semibold hover:bg-gray-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setToggleMenu((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {toggleMenu ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {toggleMenu && (
          <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-white z-50 shadow-2xl py-4 px-6 border-t border-gray-300">
            <div className="flex flex-col space-y-4 font-semibold">
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                Home
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                About
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                Pricing
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                Consulting
              </p>
              <p className="cursor-pointer hover:text-blue-600 transition-colors">
                AI Coach
              </p>
              <button className="w-full py-2 border border-gray-300 rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="mt-8 md:mt-12 pb-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
              Your AI-
              <br />
              Powered <br />
              Sales Coach
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6 sm:mt-9">
              <div className="w-full sm:w-auto max-w-[198px] h-auto shadow-2xl rounded-lg overflow-hidden">
                <img
                  src="./roboImg.png"
                  alt="AI Sales Coach"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#05131DB2] max-w-[346px]">
                Get real-time coaching, script suggestions, and deal-closing
                strategies powered by advanced AI technology.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg">
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md shadow-lg">
                  <img
                    src="backup_table.png"
                    alt="Statistics"
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#05131D]">2000+</p>
                  <p className="text-sm text-[#05131DB2]">Your protection</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg">
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md shadow-lg flex items-center justify-center">
                  <img src="atr.png" alt="Statistics" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#05131D]">7001+</p>
                  <p className="text-sm text-[#05131DB2]">Provide tailored</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="bannerImg.png" alt="" />
            <div className="absolute top-170 sm:-right-40 lg:right-60 transform -translate-y-full mb-4 bg-white p-6 rounded-lg shadow-lg z-10 w-full md:w-3/4">
              <div>
                <div className="flex justify-between mb-4">
                  <div className="text-3xl font-semibold text-[#05131D]">721+</div>
                  <div className="text-3xl font-semibold text-[#05131D]">1000+</div>
                </div>
                <p className="py-6 font-semibold text-2xl">Growth is our priority.</p>
                <p className="text-sm text-gray-600">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
