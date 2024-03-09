import { Lemonada } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const lemonada = Lemonada({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lemonada',
});

const abrilDisplay = localFont({
  src: [
    {
      path: './Fonts/Abril/Abril_Display_Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Display_BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './Fonts/Abril/Abril_Display_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Display_BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Fonts/Abril/Abril_Display_ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Display_ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './Fonts/Abril/Abril_Display_Italic.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Display_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Display_SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Display_SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    { path: './Fonts/Abril/Abril_Fatface.otf', weight: '400', style: 'normal' },
    {
      path: './Fonts/Abril/Abril_Fatface_Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Fonts/Abril/Abril_Text_Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Text_BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Fonts/Abril/Abril_Text_ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Text_ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './Fonts/Abril/Abril_Text_Italic.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Text_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Text_SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Fonts/Abril/Abril_Text_SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-abrilDisplay',
});

const bakildaHistori = localFont({
  src: './Fonts/Bakilda/bakilda-histori.ttf',
  weight: '400',
  variable: '--font-bakildaHistori',
});
const valueSansPro = localFont({
  src: [
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-Italic.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Fonts/Value_Sans_Pro/ValueSansPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-valueSansPro',
});

export const metadata = {
  title: 'Unlocklive Coffee Shop || By Sakebul islam',
  description: 'Created by Sakebul islam',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${lemonada?.variable} ${abrilDisplay?.variable} ${bakildaHistori?.variable} ${valueSansPro?.variable} select-none`}
    >
      <body>{children}</body>
    </html>
  );
}
