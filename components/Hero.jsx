import { hero } from "../public/static-data";
import Button from "./Button";

const Hero = () => {
  const { mainTitle, location, subTitle, description, btnText } = hero;

  return (
    <div
      className="grid items-baseline gap-6 
    
      tablet:tablet:grid-cols-[auto_auto] tablet:grid-rows-[auto_1fr_auto]  tablet:gap-0"
    >
      <h1
        className=" title-section w-[280px] font-thin 
      
      tablet:col-start-1 tablet:row-span-2 tablet:mb-[47px] tablet:w-auto 
    
      desktop:mb-[95px] "
      >
        <span className="font-medium">{mainTitle.first}</span>{" "}
        {mainTitle.second}
      </h1>
      <p
        className="w-[157px] text-[10px] font-extralight leading-[1.6] 
      
      tablet:col-start-1 tablet:row-start-3 tablet:w-[262px]  tablet:text-[14px] tablet:leading-[1.14] tablet:tracking-[1.25px] 
      
      desktop:w-auto desktop:text-[16px] desktop:leading-[1.5] desktop:tracking-[1.44px] "
      >
        {location}
      </p>

      <h2
        className="row-start-1 ml-auto  text-[37px] leading-[1] 
      
      tablet:col-start-2 tablet:mb-[56px] tablet:w-[230px] tablet:text-[67px]
      
      desktop:mb-[181px] desktop:w-[294px] desktop:text-[98px]"
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
      
      tablet:col-start-2 tablet:row-start-2 tablet:ml-auto tablet:w-[230px]  tablet:text-[16px] tablet:leading-[1.25]
      
      desktop:w-[294px] desktop:text-[18px] desktop:leading-[1.33]"
      >
        {description}
      </p>
      <div className="tablet:row-start-3 tablet:ml-auto">
        <Button btnName={btnText} />
      </div>
    </div>
  );
};

export default Hero;
