import { FC } from "react";
import { Link } from "react-scroll";
import { twMerge } from 'tailwind-merge';

interface NavItemProps {
    href: string;
    title: string;
    fontStyle?: string;
    onClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({ href, title, fontStyle, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link
            to={href}
            smooth={true}
            className="relative flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={handleClick}
        >
            <span className={twMerge("font-normal text-base text-[#667085] hover:text-[#87888a]", fontStyle)}>
                {title}
            </span>
        </Link>
    );
};

export default NavItem;