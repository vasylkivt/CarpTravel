"use client";

import { mobileMenuButtonName, navigation } from "@/data";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const { show, hidden } = mobileMenuButtonName;
  const [screen, setScreen] = useState(window.innerWidth);
  const [btnName, setBtnName] = useState(show);

  const handleResize = () => {
    setScreen(window.innerWidth);
  };

  useEffect(() => {
    setScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setBtnName((prev) => (prev === hidden ? show : hidden));
    document.body.style.overflow = btnName === show ? "hidden" : "";
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="custom-underline 
        absolute right-[26px] top-[10px] z-30 
        block  text-[14px] tracking-[1.4px] 
        tablet:hidden"
      >
        {btnName}
      </button>

      <nav className="flex items-center justify-between">
        <ul
          className="flex flex-col items-center justify-center gap-14
                    tablet:flex-row"
        >
          {navigation.map((link) => (
            <li key={link.href}>
              <Link
                className="custom-underline relative

              text-[18px] tracking-[1.8px]

              tablet:text-[14px] tablet:tracking-[1.4px]"
                to={link.href}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
// function NavBar() {

//   const { show, hidden } = mobileMenuButtonName;
//   const [isOpen, setIsOpen] = useState(false);
//   const [btnName, setBtnName] = useState(show);

//   const handleNavClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);

//     setBtnName((prev) => (prev === hidden ? show : hidden));
//     document.body.style.overflow = !isOpen ? "hidden" : "";
//   };

//   return (
//     <>
//       <button
//         onClick={toggleMenu}
//         className="custom-underline
//         absolute right-[26px] top-[10px] z-30
//         block
//         text-[14px] tracking-[1.4px]
//         tablet:hidden"
//       >
//         {btnName}
//       </button>

//       <div
//         className={
//           "fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/75 backdrop-blur-xl transition-all duration-250" +
//           " " +
//           "tablet:static tablet:h-auto tablet:w-auto tablet:bg-transparent tablet:backdrop-blur-0" +
//           " " +
//           (isOpen
//             ? "visible opacity-100 "
//             : "invisible opacity-0 tablet:visible tablet:opacity-100")
//         }
//       >
//         <nav className="flex items-center justify-between">
//           <ul
//             className="

//       flex
//       flex-col items-center justify-center gap-14
// tablet:flex-row"
//           >
//             {navigation.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   onClick={toggleMenu}
//                   className="custom-underline relative

//               text-[18px] tracking-[1.8px]

//               tablet:text-[14px] tablet:tracking-[1.4px]"
//                   to={link.href}
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default NavBar;
