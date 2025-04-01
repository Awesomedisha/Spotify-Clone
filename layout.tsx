import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'A Spotify clone built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-spotify-black text-spotify-white`}>
        <Sidebar />
        <main className="ml-sidebar-width p-6 pb-player-height min-h-screen">
          {children}
        </main>
        <Player />
      </body>
    </html>
  );
}
