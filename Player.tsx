'use client';

import { useState } from 'react';
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon as RewindIcon,
  ForwardIcon as FastForwardIcon,
  SpeakerWaveIcon as VolumeUpIcon,
} from '@heroicons/react/24/solid';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-spotify-gray h-player-height px-4">
      <div className="flex items-center justify-between h-full">
        {/* Current Track Info */}
        <div className="flex items-center w-1/3">
          <div className="w-14 h-14 bg-spotify-light-gray rounded">
            {/* Track Image Placeholder */}
          </div>
          <div className="ml-4">
            <h4 className="text-spotify-white text-sm">Track Name</h4>
            <p className="text-spotify-light-gray text-xs">Artist Name</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center space-x-6">
            <button className="text-spotify-light-gray hover:text-spotify-white">
              <BackwardIcon className="h-5 w-5" />
            </button>
            <button
              className="bg-spotify-white rounded-full p-2 hover:scale-105 transition"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <PauseIcon className="h-6 w-6 text-spotify-black" />
              ) : (
                <PlayIcon className="h-6 w-6 text-spotify-black" />
              )}
            </button>
            <button className="text-spotify-light-gray hover:text-spotify-white">
              <ForwardIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="w-full max-w-md mt-2">
            <div className="bg-spotify-light-gray h-1 rounded-full">
              <div
                className="bg-spotify-white h-1 rounded-full"
                style={{ width: '30%' }}
              />
            </div>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center justify-end w-1/3">
          <SpeakerWaveIcon className="h-5 w-5 text-spotify-light-gray" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="ml-2 w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;