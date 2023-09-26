"use client";

import { mobileMenuButton as menuButton } from "@/data";
import { useState } from "react";

import NavList from "./NavList";

function NavBar() {
  const { isShow, isHidden } = menuButton;
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuButton, setMobileMenuButton] = useState(isHidden);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);

    setMobileMenuButton((prev) => (prev === isShow ? isHidden : isShow));
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const handleBtnMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={` ${
          isOpen
            ? "translate-x-0  duration-150"
            : "-translate-x-full delay-200 duration-150 tablet:translate-x-0"
        } 
            fixed left-0 top-0   h-screen
            w-screen  bg-black/75 backdrop-blur-xl 
    
            tablet:hidden`}
      ></div>
      <nav
        className={`${
          isOpen
            ? "visible opacity-100 delay-200 duration-200"
            : "invisible  opacity-0 duration-200 tablet:visible tablet:opacity-100"
        }
            fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-14
            
            tablet:static tablet:-translate-x-0 tablet:-translate-y-0 tablet:flex-row `}
      >
        <NavList onClick={handleBtnMenuClick} />
      </nav>
      <button
        onClick={toggleMenu}
        className="custom-underline
        absolute right-[26px] top-[10px]
        block
        text-[14px] tracking-[1.4px]
        tablet:hidden"
      >
        {mobileMenuButton}
      </button>
    </>
  );
}

export default NavBar;
