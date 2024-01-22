import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/shared/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Online Shopping',
  description:
    'This is an ecommerce website that provides you with a list of products available for purchase.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-grow flex-1'>{children}</div>
        </main>
      </body>
    </html>
  );
}
