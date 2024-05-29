import Image from "next/image";
import { Element } from "react-scroll";

const Home = () => {
	return (
		<Element name="home">
			<div className="w-100vw">
				<div className="flex flex-row w-full px-[7.82%] pt-12">
					<div className="flex flex-col gap-10 items-start">
						<span className="text-black text-5xl font-semibold w-3/4">
							Elevate your job applications with a meticulously crafted resume
						</span>
						<span className="text-gray-600 w-4/5">
							We harness the latest in AI to to forge resumes that truly captivate and resonate with potential employers.
						</span>
						<div className="flex flex-row items-center w-4/5">
							<button className="px-4 py-3 text-white bg-blue-700 rounded-md">
								Format Resume
							</button>
						</div>
					</div>
					<Image src={'/images/home.svg'} alt="home" width={520} height={500} className="hidden lg:block"/>
				</div>
			</div>
		</Element>
	)
};

export default Home;
