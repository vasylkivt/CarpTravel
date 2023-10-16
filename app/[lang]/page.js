"use client";

import Header from "@/components/Header/Header";
import Contacts from "@/components/sections/Contacts/Contacts";

import Hero from "@/components/sections/Hero/Hero";

import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <button>{dict.products.cart}</button>
      <Header />
      <main>
        <Hero />
        <Contacts />
      </main>
    </>
  );
}

//  "use client";

//  import { useTranslations } from "next-intl";

//   const t = useTranslations("");

//   t("");
