import Header from "@/components/Header/Header";
import Contacts from "@/components/sections/Contacts/Contacts";

import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contacts />
      </main>
    </>
  );
}
