import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

function Review() {
  return (
    <Fade>
      <div className="font-[Manrope] max-w-[1280px] mx-auto px-4 my-12">
        <div className="text-2xl text-[#010205] mb-12 font-semibold text-center lg:text-start">
          “ They thoroughly analyze our industry and target audience, allowing
          them to develop customized campaigns that effectively reach and engage
          our customers. Their creative ideas and cutting-edge techniques have
          helped us stay ahead of the competition.”
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-4 items-center">
            <img src="./dp.png" alt="" />
            <div className="space-y-1">
              <h1>Micheal Kaizer</h1>
              <p>CEO of Basecamp Corp</p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-2xl">
            <FaRegArrowAltCircleLeft />
            {/* <ArrowLeft className="border border-black p-2 text-black "/> */}
            <p className="text-sm">01/05</p>
            <FaCircleArrowRight />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Review;
