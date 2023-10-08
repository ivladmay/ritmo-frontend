import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ritmo',
  description: 'Streaming service for listening to music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
