import Image from "next/image";

const Footer = () => {
	return (
		<div className="md:py-10 px-[6.5%]">
			<div className="flex flex-col gap-12">
				<div className="flex flex-row justify-start items-center gap-8">
					<span className="text-black">Follow us</span>
					<Image src="/images/logo-linkedin.svg" alt='linkedin' width={20} height={20}/>
					<Image src="/images/logo-twitter.svg" alt='twitter' width={20} height={20}/>
					<Image src="/images/logo-youtube.svg" alt='youtube' width={20} height={20}/>
				</div>
				<div className="outline-1 bg-transparent outline outline-black"></div>
				<div className="flex flex-row items-center justify-between">
					<div className="flex flex-row items-center gap-8">
						<span className="text-black text-xl">Resume Smith</span>
						<span className="text-black">Privacy Policy</span>
						<span className="text-black">Terms</span>
					</div>
					<span className="text-black">© Copyright 2023, Resume Smith</span>
				</div>
			</div>

		</div>
	)
};

export default Footer;