import { Bricolage_Grotesque } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GCAMP',
  description: 'GCAMP DESCRIPTION',
};
const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        <div className='mx-auto max-w-6xl gap-2 text-2xl mb-10'>{children}</div>
      </body>
    </html>
  );
}
