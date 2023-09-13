"use client";

import { useState } from "react";
import NavBar from "./NavBar";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setBtnName] = useState("MENU");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setBtnName((prev) => (prev === "CLOSE" ? "MENU" : "CLOSE"));
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="block absolute right-[26px] z-20 top-[44px] text-[14px] tracking-[1.4px] tablet:hidden hover:before:absolute before:w-full before:bottom-[-2px]  before:border-b-[1.5px]"
      >
        {btnName}
      </button>
      {isOpen && (
        <>
          <div className="tablet:hidden absolute z-10 w-screen h-screen bg-black/75 backdrop-blur-xl"></div>
          <NavBar
            toggleMenu={toggleMenu}
            className="flex-col justify-center items-center gap-12 absolute z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
          />
        </>
      )}
    </>
  );
}

export default MobileMenu;
