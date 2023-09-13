import Button from "./Button";

const Hero = () => {
  return (
    <div className="grid items-baseline gap-6 tablet:gap-0 tablet:tablet:grid-cols-[auto_auto]  tablet:grid-rows-[auto_1fr_auto] ">
      <h1 className="w-[280px] font-thin text-[40px] leading-[1.4]  uppercase tablet:mb-[47px] tablet:w-auto tablet:text-[67px] tablet:leading-[normal] tracking-[-1.6px] tablet:tracking-[-2.68px]  tablet:row-span-2 tablet:col-start-1 desktop:mb-[95px] desktop:text-[96px] desktop:tracking-[-3.92px]">
        <span className="font-medium">Uncover</span> Carpathian’s Secrets
      </h1>
      <p className="w-[157px] font-extralight text-[10px] leading-[1.6] tablet:w-[262px] tablet:text-[14px] tablet:leading-[1.14]  tablet:tracking-[1.25px] tablet:col-start-1 tablet:row-start-3 desktop:text-[16px] desktop:w-auto desktop:leading-[1.5] desktop:tracking-[1.44px] ">
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>

      <h2 className="ml-auto text-[37px]  leading-[1] row-start-1 tablet:mb-[56px] tablet:w-[230px] tablet:text-[67px] tablet:col-start-2 desktop:mb-[181px] desktop:w-[294px] desktop:text-[98px]">
        <span className="font-medium">7</span>
        <span className="font-thin tracking-[1.665px] tablet:max-desktop:tracking-[8.71px]">
          DAYS
        </span>
        <p className="font-light text-[12px] tracking-[9.48px] tablet:text-[14px] tablet:tracking-[25.9px] desktop:text-[16px] desktop:tracking-[36.5px]">
          JOURNEY
        </p>
      </h2>
      <p className="w-[280px] font-extralight text-justify text-[14px] leading-[1.43] tablet:ml-auto tablet:w-[230px] tablet:text-[16px] tablet:leading-[1.25]  tablet:col-start-2 tablet:row-start-2 desktop:w-[294px] desktop:text-[18px] desktop:leading-[1.33]">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <div className="tablet:row-start-3 tablet:ml-auto">
        <Button />
      </div>
    </div>
  );
};

export default Hero;
