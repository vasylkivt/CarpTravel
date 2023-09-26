import { hero } from "@/data";

import "./Hero.scss";
import Button from "@/components/ButtonHero/Button";

const Hero = () => {
  const { mainTitle, location, subTitle, description, btnText } = hero;

  return (
    <section className="hero relative pb-[56px] pt-[104px]">
      <div className="hero-background-gradient-top"></div>
      <div className="hero-background-gradient-bottom"></div>
      <div className="container relative flex flex-col justify-between gap-[24px] tablet:flex-row tablet:gap-0">
        <div className="flex flex-col gap-[24px] pt-[86px] tablet:gap-[56px] tablet:pt-0 desktop:gap-[148px]">
          <h1
            className="title-section w-[280px]  font-thin 
            tablet:w-auto
          "
          >
            <span className="font-medium">{mainTitle.first}</span>{" "}
            {mainTitle.second}
          </h1>
          <p
            className="w-[157px] text-[10px] font-extralight leading-[1.6] 
          
             tablet:w-[262px] tablet:text-[14px] tablet:leading-[1.14] tablet:tracking-[1.25px] 
          
            desktop:w-auto desktop:text-[16px] desktop:leading-[1.5] desktop:tracking-[1.44px] "
          >
            {location}
          </p>
        </div>

        <div className="flex flex-col gap-[24px] tablet:gap-0">
          <h2
            className="absolute right-[20px] top-0 text-[37px] leading-[1] 
          
              tablet:static tablet:mb-[56px] tablet:w-[230px] tablet:text-[67px]
          
              desktop:mb-[182px] desktop:w-[305px] desktop:text-[98px]"
          >
            <span className="font-medium">{subTitle.first}</span>
            <span
              className="font-thin tracking-[1.665px] 
            
              tablet:max-desktop:tracking-[8.71px]"
            >
              {subTitle.second}
            </span>
            <p
              className="text-[12px] font-light tracking-[9.48px] 
            
               tablet:text-[14px] tablet:tracking-[25.9px] 
            
              desktop:text-[16px] desktop:tracking-[36.5px]"
            >
              {subTitle.third}
            </p>
          </h2>
          <p
            className="w-[280px] text-justify text-[14px] font-extralight leading-[1.43] 
          
           tablet:mb-[28px] tablet:w-[230px]  tablet:text-[16px] tablet:leading-[1.25]
          
            desktop:w-[294px] desktop:text-[18px] desktop:leading-[1.33]"
          >
            {description}
          </p>

          <Button btnName={btnText} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
