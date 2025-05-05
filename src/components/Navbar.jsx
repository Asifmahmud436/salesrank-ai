import { useState, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const leftHeroRef = useRef(null);
  const rightHeroRef = useRef(null);
  const roboImgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.addLabel("start")
      .fromTo(
        logoRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "ease.out" },
        "start"
      )
      .fromTo(
        ".nav-item",
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "ease.out", stagger: 0.2 },
        "start-=0.2"
      )
      .fromTo(
        leftHeroRef.current,
        { opacity: 0,x:-10 },
        { opacity: 1,x:0, ease: "ease.out",duration:.75 },
        "start+=2"
      )
      .fromTo(
        rightHeroRef.current,
        { opacity: 0,x:10 },
        { opacity: 1,x:0, ease: "ease.out",duration:1 },
        "start+=2"
      )
      

    
  }, []);

  return (
    <div className="bg-gradient-to-tl from-[#FF6FB9]/10 to-[#6797FF]/10 backdrop-blur-[1000px] lg:h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ">
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

              <div className="test flex flex-col" ref={logoRef}>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#1e3a8a]">
                  SalesRank.AI
                </p>
                <p className="uppercase text-[0.52rem] font-medium tracking-wider text-[#1e3a8a]">
                  stop guessing start ranking
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center space-x-8" ref={navRef}>
              <div className="flex space-x-6 text-sm font-semibold">
                <p className="cursor-pointer hover:text-blue-600 transition-colors nav-item">
                  Home
                </p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors nav-item">
                  About
                </p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors nav-item">
                  Pricing
                </p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors nav-item">
                  Consulting
                </p>
                <p className="cursor-pointer hover:text-blue-600 transition-colors nav-item">
                  AI Coach
                </p>
              </div>
              <button className="font-[Manrope] px-6 h-[48px] border border-[#010205] rounded-3xl font-semibold hover:bg-gray-50 transition-colors nav-item">
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
            <div className="w-full lg:w-1/2" ref={leftHeroRef}>
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
                    className="w-full h-full object-cover hover:scale-105 cursor-pointer transition-all duration-600"
                    ref={roboImgRef}
                  />
                </div>
                <p className="text-[#05131DB2] max-w-[346px]">
                  Get real-time coaching, script suggestions, and deal-closing
                  strategies powered by advanced AI technology.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center  gap-4 p-4   rounded-lg">
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md shadow-lg">
                    <img
                      src="backup_table.png"
                      alt="Statistics"
                      className="w-full h-full object-cover shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#05131D]">
                      2000+
                    </p>
                    <p className="text-sm text-[#05131DB2]">Your protection</p>
                  </div>
                </div>

                <div className="flex items-center  gap-4 p-4  rounded-lg">
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md shadow-lg flex items-center justify-center">
                    <img src="atr.png" alt="Statistics" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-[#05131D]">
                      7001+
                    </p>
                    <p className="text-sm text-[#05131DB2]">Provide tailored</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" ref={rightHeroRef}>
              <img
                src="bannerImg.png"
                alt=""
                className="hover:z-20 hover:scale-105 cursor-pointer transition-all duration-600"
              />

              <div className="absolute top-112 md:top-170 lg:top-160 sm:-right-40 lg:right-40 transform -translate-y-full mb-4 bg-white p-6 rounded-lg shadow-lg z-10 w-full md:w-3/4">
                <div>
                  <div className="flex justify-between mb-4">
                    <div className="text-3xl font-semibold text-[#05131D]">
                      721+
                    </div>
                    <div className="text-3xl font-semibold text-[#05131D]">
                      1000+
                    </div>
                  </div>
                  <p className="py-6 font-semibold text-2xl">
                    Growth is our priority.
                  </p>
                  <p className="text-sm text-gray-600">
                    As a full-service business agency, we specialize in helping
                    companies of all sizes optimize their operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
