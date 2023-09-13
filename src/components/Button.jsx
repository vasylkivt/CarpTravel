"use client";

import { Link } from "react-scroll";

const Button = () => {
  return (
    <Link
      className=" cursor-pointer relative w-[280px] tablet:w-[230px] desktop:w-[293px] h-[53px] tablet:h-[50px] desktop:h-[71px] flex justify-center items-center  bg-white/10 hover:bg-white/20"
      to="contacts"
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className="absolute inset-0 bg-[url('../public/assets/icon/buttonFrame/mobileLeft.svg')] bg-left bg-no-repeat tablet:bg-[url('../public/assets/icon/buttonFrame/tabletLeft.svg')] desktop:bg-[url('../public/assets/icon/buttonFrame/desktopLeft.svg')]"></div>
      <div className="absolute inset-0 bg-[url('../public/assets/icon/buttonFrame/mobileRight.svg')] bg-right bg-no-repeat tablet:bg-[url('../public/assets/icon/buttonFrame/tabletRight.svg')] desktop:bg-[url('../public/assets/icon/buttonFrame/desktopRight.svg')]"></div>

      <button
        className=" font-bold text-[18px] desktop:text-[32px] leading-[2.67] tablet:leading-[1]"
        type="button"
      >
        JOIN NOW
      </button>
    </Link>
  );
};
export default Button;
