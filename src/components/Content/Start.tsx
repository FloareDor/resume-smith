import Image from "next/image";
import { Element } from "react-scroll";

const Start = () => {
    return (
        <Element name='start'>
            <div className="pt-12">
                <div className="flex flex-col gap-12 items-center px-[6.5%]">
                    <span className="text-2xl font-semibold text-center text-black max-w-[17rem] mx-auto">
                        Start by selecting a resume template design
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 rounded-xl p-4 lg:p-8 sm:w-full lg:w-[350px]">
                            <Image src={'/images/resume-1.png'} alt="resume-1" width={300} height={200} className="w-full h-auto" />
                        </div>
                        <div className="bg-gray-100 rounded-xl p-4 lg:p-8 sm:w-full lg:w-[350px]">
                            <Image src={'/images/resume-2.png'} alt="resume-2" width={300} height={200} className="w-full h-auto" />
                        </div>
                        <div className="bg-gray-100 rounded-xl p-4 lg:p-8 sm:w-full lg:w-[350px]">
                            <Image src={'/images/resume-3.png'} alt="resume-3" width={300} height={200} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Start;