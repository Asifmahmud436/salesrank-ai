import { Fade } from "react-awesome-reveal";
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
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>

        {/* Button */}
        <button className="text-white bg-[#002868] px-6 py-3 rounded-sm self-start lg:self-center">
          View All
        </button>
      </div>
      {/* courses */}
      <div className="flex flex-col lg:flex-row justify-between sm:place-items-center gap-4">
        <Fade>
          <div className="w-full max-w-[705px] p-8 lg:p-12 bg-[#F1F1F3] space-y-4 rounded-sm ">
            <img src="./course1.png" alt="" className="w-full" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex gap-4 flex-wrap">
                <button className="text-[#4C4C4D] bg-white py-2.5 px-4 text-sm rounded-sm">
                  4 Weeks
                </button>
                <button className="text-[#4C4C4D] bg-white py-2.5 px-4 text-sm rounded-sm">
                  Beginner
                </button>
              </div>
              <p className="text-[#262626] whitespace-nowrap">By John Smith</p>
            </div>
            <h1 className="text-2xl text-[#262626] py-4">
              Web Design Fundamentals
            </h1>
            <p className="text-[#4C4C4D] text-sm">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button className="w-full text-white bg-[#002868] py-[18px] px-6 rounded-sm">
              Get it Now
            </button>
          </div>
          <div className="w-full max-w-[705px] p-8 lg:p-12 bg-[#F1F1F3] space-y-4 rounded-sm ">
            <img src="./course2.png" alt="" className="w-full" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex gap-4 flex-wrap">
                <button className="text-[#4C4C4D] bg-white py-2.5 px-4 text-sm rounded-sm">
                  4 Weeks
                </button>
                <button className="text-[#4C4C4D] bg-white py-2.5 px-4 text-sm rounded-sm">
                  Beginner
                </button>
              </div>
              <p className="text-[#262626] whitespace-nowrap">By John Smith</p>
            </div>
            <h1 className="text-2xl text-[#262626] py-4">
              Web Design Fundamentals
            </h1>
            <p className="text-[#4C4C4D] text-sm">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button className="w-full text-white bg-[#002868] py-[18px] px-6 rounded-sm">
              Get it Now
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Courses;
