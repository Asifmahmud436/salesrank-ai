function Courses() {
    return (
      <div className="my-12 max-w-[1440px] px-4 mx-auto">
        <div className="pb-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Left Text Content */}
          <div className="w-full lg:max-w-[1029px]">
            <h1 className="pb-4 text-2xl sm:text-3xl text-[#262626] font-semibold text-start">
              Our Courses
            </h1>
            <p className="text-[#59595A] text-sm sm:text-base sm:pb-6 max-w-full sm:max-w-[400px] lg:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
              imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in
              velit fringilla feugiat senectus in.
            </p>
          </div>
  
          {/* Button */}
          <button className="text-white bg-[#002868] px-6 py-3 rounded-sm self-start lg:self-center">
            View All
          </button>
        </div>
      </div>
    );
  }
  
  export default Courses;
  