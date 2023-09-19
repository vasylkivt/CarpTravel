"use client";

import { Link } from "react-scroll";

const Button = ({ btnName }) => {
  return (
    <Link
      className=" relative flex h-[53px] w-[280px] cursor-pointer items-center justify-center bg-white/10 hover:bg-white/20 tablet:h-[50px] tablet:w-[230px]  desktop:h-[71px] desktop:w-[293px]"
      to="contacts"
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className="absolute inset-0 bg-[url('../public/assets/icon/buttonFrame/mobileLeft.svg')] bg-left bg-no-repeat tablet:bg-[url('../public/assets/icon/buttonFrame/tabletLeft.svg')] desktop:bg-[url('../public/assets/icon/buttonFrame/desktopLeft.svg')]"></div>
      <div className="absolute inset-0 bg-[url('../public/assets/icon/buttonFrame/mobileRight.svg')] bg-right bg-no-repeat tablet:bg-[url('../public/assets/icon/buttonFrame/tabletRight.svg')] desktop:bg-[url('../public/assets/icon/buttonFrame/desktopRight.svg')]"></div>

      <button
        className=" text-[18px] font-bold leading-[2.67] tablet:leading-[1] desktop:text-[32px]"
        type="button"
      >
        {btnName}
      </button>
    </Link>
  );
};
export default Button;
