import { Inter } from 'next/font/google';

import '../globals.css';

import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700'],
});

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
