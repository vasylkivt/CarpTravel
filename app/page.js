import Header from "@/components/Header/Header";

import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>{<Hero />}</main>
    </>
  );
}
