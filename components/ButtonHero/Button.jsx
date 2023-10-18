'use client';

import './Button.scss';

const Button = ({ btnName }) => {
  return (
    <button
      className="hero-button h-[50px] bg-white/10 text-[18px] font-bold leading-[2.67] transition-all duration-250 hover:bg-white/20 
        tablet:leading-normal 
    
        desktop:h-[71px] desktop:text-[32px] "
    >
      {btnName}
    </button>
  );
};
export default Button;
