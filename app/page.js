import { Contacts, Gallery, Hero, Section } from "../components";
import backgroundHero from "public/assets/background/hero.jpeg";
// import backgroundAbout from "/public/images/background/about.jpeg";
// import backgroundCareer from "/public/images/background/career.jpeg";
import backgroundGallery from "public/assets/background/gallery.jpeg";
import backgroundContacts from "public/assets/background/contacts.jpeg";

const background = {
  hero: backgroundHero,
  gallery: backgroundGallery,
  contacts: backgroundContacts,
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
        {/* 
        <Section elementName="gallery" bgImage={background.gallery}>
          <Gallery />
        </Section>

        <Section elementName="contacts" bgImage={background.contacts}>
          <Contacts />
        </Section> */}
      </main>
    </>
  );
}
