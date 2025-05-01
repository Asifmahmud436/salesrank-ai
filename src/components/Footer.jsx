function Footer() {
    return (
      <div className="bg-gradient-to-r from-[#6797FF]/15 to-[#FF6FB9]/15 space-y-6 pt-6">
        {/* Top Banner Section */}
        <div className="py-12 max-w-[1440px] mx-auto bg-gradient-to-r from-[#103570] to-[#004FCE] text-center space-y-6 text-white rounded-md mb-20 px-4">
          <h1 className="text-3xl font-semibold">Ready to Hire Smarter?</h1>
          <p className="text-xs text-[#B9BDC7] mb-12">
            Unlock Exclusive Insights Subscribe to Our Newsletter
          </p>
          <button className="bg-[#FCE38A] text-[#00245F] rounded-3xl py-4 px-9">
            Join Now
          </button>
        </div>
  
        {/* Info Section */}
        <div className="max-w-[1440px] mx-auto px-4  flex flex-col lg:flex-row  justify-between gap-10">
          {/* First Column */}
          <div className="space-y-5 w-full lg:w-[40%]">
            <div className="flex gap-4 items-center">
              <img src="./footerLogo.png" alt="Logo" className="w-10 h-10" /> 
              <h1 className="text-3xl">Logo</h1>
            </div>
            <p className="text-[#335386] text-sm max-w-md"> 
              SalesRank.AI offers a comprehensive suite of AI-powered solutions to
              help you find expert sales professionals who can elevate every
              aspect of your business. From performance rankings and skill
              verification to industry benchmarking and real-time analytics, we
              provide the insights and tools to optimize your sales strategy and
              drive growth.
            </p>
            <div className="flex gap-2">
              <img src="./icon1.svg" alt="icon1" className="w-6 h-6" /> {/* 🟢 updated */}
              <img src="./icon2.svg" alt="icon2" className="w-6 h-6" />
              <img src="./icon3.svg" alt="icon3" className="w-6 h-6" />
              <img src="./icon4.svg" alt="icon4" className="w-6 h-6" />
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 lg:mt-0 mb-10"> 
            {/* Navigation */}
            <div className="space-y-3">
              <h1 className="text-[#001C4A] pb-5 font-semibold">Navigation</h1>
              <p className="text-sm text-[#335386]">Service</p>
              <p className="text-sm text-[#335386]">Agency</p>
              <p className="text-sm text-[#335386]">Case Study</p>
              <p className="text-sm text-[#335386]">Resource</p>
              <p className="text-sm text-[#335386]">Contact</p>
            </div>
  
            {/* Licence */}
            <div className="space-y-3">
              <h1 className="text-[#001C4A] pb-5 font-semibold">Licence</h1>
              <p className="text-sm text-[#335386]">Privacy Policy</p>
              <p className="text-sm text-[#335386]">Copyright</p>
              <p className="text-sm text-[#335386]">Email Address</p>
            </div>
  
            {/* Contact */}
            <div className="space-y-3">
              <h1 className="text-[#001C4A] pb-5 font-semibold">Contact</h1>
              <div className="flex items-center gap-2">
                <img src="./contact1.png" alt="Phone" className="w-5 h-5" /> 
                <p className="text-sm text-[#335386]">(406) 555-0120</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="./contact2.png" alt="Email" className="w-5 h-5" />
                <p className="text-sm text-[#335386]">Hey@boostim.com</p>
              </div>
              <div className="flex items-start gap-2">
                <img src="./contact3.png" alt="Address" className="w-5 h-5 mt-1" />
                <p className="text-sm text-[#335386] w-[208px]">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-1 border-[#B4B4B4] pt-12"></div>
      </div>
    );
  }
  
  export default Footer;
  