import { Element } from "react-scroll";
import Image from "next/image";
import createBg from "../../../public/images/create.png";

const Create = () => {
  return (
    <Element name="create">
      <div className="relative w-full py-16 md:py-24 lg:py-32">
        <Image
          src={createBg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="relative flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-[6.5%]">
          <span className="font-bold text-lg sm:text-xl md:text-4xl text-center text-white">
            Use ResumeSmith and land <br></br> your dream job
          </span>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-white font-semibold bg-blue-700 rounded-md transform transition-all duration-300 hover:scale-105 active:scale-100">
              Create Resume
            </button>
            <span className="text-white text-sm">No registration required</span>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Create;