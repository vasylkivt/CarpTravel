import { Inter } from "next/font/google";

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "uk" }];
// }

import "../globals.css";
import { getDictionary } from "./dictionaries";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export async function generateMetadata({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return {
    title: dict.products.cart,
  };
}

export default async function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
