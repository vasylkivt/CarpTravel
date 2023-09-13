"use client";

import { Link } from "react-scroll";

export const byScroll = {
  gallery: "gallery",
  contacts: "contacts",
};

const navigation = [
  { name: "Gallery", byScroll: byScroll.gallery },
  { name: "Contacts", byScroll: byScroll.contacts },
];

const NavBar = ({ className, toggleMenu }) => {
  return (
    <>
      <ul className={`${className} flex gap-14`}>
        {navigation.map((el) => (
          <li key={el.byScroll} className="">
            <Link
              onClick={toggleMenu}
              className="inline-block relative cursor-pointer text-[18px] tracking-[1.8px] tablet:text-[14px] tablet:tracking-[1.4px]  hover:before:absolute before:w-full before:bottom-[-2px]  before:border-b-[1.5px] "
              to={el.byScroll}
              spy={true}
              smooth={true}
              duration={500}
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default NavBar;

// opacity: 0.75;
// background: linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%);

// color: #FFF;
// font-family: Inter;
// font-size: 18px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
// letter-spacing: 1.8px;
