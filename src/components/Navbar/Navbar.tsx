import { useState } from "react";
import Overlay from "./Overlay";
import HamburgerIcon from "../icons/Hamburger";
import Link from "next/link";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScrollLock = () => {
    document.body.classList.toggle('no-scroll');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleScrollLock();
  };

  const handleItemClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      toggleScrollLock();
    }, 0);
  };

  return (
    <nav className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-4 px-[8%] py-2 md:py-8">
        <Link href="/">
          <span className="text-black">ResumeSmith</span>
        </Link>

        <div className="hidden md:flex flex-wrap items-center gap-4 md:gap-8">
          <NavItem href='start' title='Features' />
          <NavItem href='start' title='Templates' />
          <NavItem href='start' title='Testimonials' />
        </div>

        <div className="hidden md:flex flex-wrap items-center gap-4 md:gap-8">
          <Link href={'/login'}><span className="text-black text-sm">Login</span></Link>
          <span className="text-black text-sm">Sign up</span>
          <Link href={''}>
            <span className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded outline outline-2 outline-black whitespace-nowrap">
              Format Resume
            </span>
          </Link>
        </div>

        <div className="md:hidden z-50">
          <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {isOpen && <Overlay onItemClick={handleItemClick} />}
    </nav>
  );
};

export default Navbar;