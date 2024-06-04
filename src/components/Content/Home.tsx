import Image from "next/image";
import { Element } from "react-scroll";

const Home = () => {
    return (
        <Element name="home">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between px-[7.82%] pt-12">
                    <div className="flex flex-col gap-6 items-center lg:items-start mb-8 lg:mb-0 lg:w-1/2 lg:pr-12">
                        <span className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
                            Elevate your job applications with a meticulously crafted resume
                        </span>
                        <span className="text-gray-600 text-center lg:text-left">
                            We harness the latest in AI to forge resumes that truly captivate and resonate with potential employers.
                        </span>
                        <div className="flex justify-center lg:justify-start">
                            <button className="px-6 py-3 text-white font-semibold bg-blue-700 rounded-md transform transition-all duration-300 hover:scale-105 active:scale-100">
                                Format Resume
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-2/5">
                        <Image
                            src={'/images/home.svg'}
                            alt="home"
                            width={450}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Home;