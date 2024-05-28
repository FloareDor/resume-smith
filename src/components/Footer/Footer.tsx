import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-6 md:py-10 px-4 md:px-[8%]">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col md:flex-row justify-start items-center gap-4 md:gap-8">
          <span className="text-gray-500">Follow us</span>
          <div className="flex items-center gap-4">
            <Image src="/images/logo-linkedin.svg" alt="linkedin" width={20} height={20} />
            <Image src="/images/logo-twitter.svg" alt="twitter" width={20} height={20} />
            <Image src="/images/logo-youtube.svg" alt="youtube" width={20} height={20} />
          </div>
        </div>
        <div className="px-[6.5%] outline-1 bg-transparent outline outline-gray-400"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-black text-xl">Resume Smith</span>
            <span className="text-gray-500">Privacy Policy</span>
            <span className="text-gray-500">Terms</span>
          </div>
          <span className="text-gray-500 text-center md:text-left">
            © Copyright 2023, Resume Smith
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;