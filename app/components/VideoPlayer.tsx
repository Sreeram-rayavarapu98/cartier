'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  className = '',
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      if (autoplay) {
        video.play().catch(() => {
          // Autoplay was prevented
        });
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [autoplay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded && !hasError ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop={loop}
          muted={muted}
          playsInline
          autoPlay={autoplay}
          controls={controls}
          className="w-full h-full object-cover"
          onError={() => {
            setHasError(true);
          }}
        />
      )}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
          {!hasError ? (
            <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#8B0000] rounded-full animate-spin" />
          ) : (
            <div className="text-center text-neutral-400">
              <p className="text-sm">Video unavailable</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

