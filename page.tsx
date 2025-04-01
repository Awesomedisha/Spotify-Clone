import Image from "next/image";

const featuredPlaylists = [
  {
    id: 1,
    name: 'Today\'s Top Hits',
    description: 'The biggest hits right now',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Rock Classics',
    description: 'Rock legends & epic songs',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-spotify-gray p-4 rounded-lg hover:bg-opacity-80 transition-all cursor-pointer group"
            >
              <div className="relative">
                <Image
                  src={playlist.imageUrl}
                  alt={playlist.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover rounded-md shadow-lg mb-4"
                />
                <button
                  className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-105"
                  aria-label="Play"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="font-semibold mb-1">{playlist.name}</h3>
              <p className="text-spotify-light-gray text-sm">
                {playlist.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
        <div className="bg-spotify-gray rounded-lg p-4">
          <div className="space-y-4">
            {[1, 2, 3].map((track) => (
              <div
                key={track}
                className="flex items-center justify-between hover:bg-spotify-black p-2 rounded-md group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-spotify-light-gray rounded">
                    {/* Track Image Placeholder */}
                  </div>
                  <div>
                    <h4 className="font-medium">Track Name {track}</h4>
                    <p className="text-spotify-light-gray text-sm">Artist Name</p>
                  </div>
                </div>
                <button
                  className="opacity-0 group-hover:opacity-100 text-spotify-green hover:scale-105 transition-all"
                  aria-label="Play"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
