// import Logo from '@/app/_components/Logo';

import '@/app/_styles/globals.css';

import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

console.log(josefin); // on recupere le classname pour le body

export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s - The Wild Oasis', // le %s , ca sera le title exporter depuis chaque fihcier page.js
    default: 'Welcome - The Wild Oasis',
  },
  description: 'Luxurious cabin hotêl located in the heart of the Italians Dolomites',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body
        className={`${josefin.className} relative antialiased flex flex-col bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 '>
          <main className='max-w-7xl  mx-auto'>{children}</main>
        </div>
      </body>
    </html>
  );
}
