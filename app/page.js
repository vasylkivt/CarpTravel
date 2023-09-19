import backgroundHero from "public/assets/background/hero.jpeg";

import Section from "@/components/Section";
import Hero from "@/components/Hero";

const background = {
  hero: backgroundHero,
};

export default function Home() {
  return (
    <>
      <main>
        <Section
          sectionClassName="pt-[104px] tablet:pt-[124px] desktop:pt-[130px]"
          bgImage={background.hero}
        >
          <Hero />
        </Section>
      </main>
    </>
  );
}
