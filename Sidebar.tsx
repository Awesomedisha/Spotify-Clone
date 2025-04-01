'use client';

import { HomeIcon, MagnifyingGlassIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    {
      name: 'Home',
      icon: HomeIcon,
      href: '/',
    },
    {
      name: 'Search',
      icon: MagnifyingGlassIcon,
      href: '/search',
    },
    {
      name: 'Your Library',
      icon: BookmarkIcon,
      href: '/library',
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-sidebar-width bg-spotify-black p-6">
      <div className="mb-8">
        <h1 className="text-spotify-white text-3xl font-bold">Spotify</h1>
      </div>
      
      <nav className="mb-8">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className="flex items-center text-spotify-light-gray hover:text-spotify-white transition-colors"
              >
                <item.icon className="h-6 w-6 mr-4" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8">
        <h2 className="text-spotify-light-gray text-sm font-semibold mb-4">PLAYLISTS</h2>
        <ul className="space-y-2">
          <li className="text-spotify-light-gray hover:text-spotify-white cursor-pointer transition-colors">
            Create Playlist
          </li>
          <li className="text-spotify-light-gray hover:text-spotify-white cursor-pointer transition-colors">
            Liked Songs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;