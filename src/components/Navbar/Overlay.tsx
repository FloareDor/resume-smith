import NavItem from "./NavItem";

interface OverlayProps {
    onItemClick: () => void;
  }

const Overlay = ({ onItemClick }: OverlayProps) => {
    return (
      <div className="overscroll-none fixed md:hidden inset-0 z-30 h-screen animate-in slide-in-from-right-full duration-500 bg-gradient-to-br from-white via-[#fffbff] to-gray-200 opacity-[0.98]">
        <div className="gap-10 lg:hidden md:hidden px-[6.5%] py-4 flex flex-col items-end pt-24">
          <NavItem href="account" title="Account" fontStyle="text-lg" onClick={onItemClick} />
          <NavItem href="home" title="Home" fontStyle="text-lg" onClick={onItemClick} />
          <NavItem href="Features" title="Features" fontStyle="text-lg" onClick={onItemClick} />
          <NavItem href="start" title="Templates" fontStyle="text-lg" onClick={onItemClick} />
          <NavItem href="testimonials" title="Testimonials" fontStyle="text-lg" onClick={onItemClick} />
          <NavItem href="format" title="Format Resume" fontStyle="text-lg" onClick={onItemClick} />
        </div>
      </div>
    );
  };

export default Overlay;