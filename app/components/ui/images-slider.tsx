"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  interval = 5000,
}: {
  images: string[];
  children?: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    // Preload all images before showing
    const loadImages = async () => {
      const loadPromises = images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new window.Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      try {
        const loaded = await Promise.all(loadPromises);
        setLoadedImages(loaded);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load images", error);
        setLoadedImages(images);
        setIsLoading(false);
      }
    };
    loadImages();
  }, [images]);

  useEffect(() => {
    if (isLoading) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let intervalId: NodeJS.Timeout | undefined;
    if (autoplay) {
      intervalId = setInterval(() => {
        handleNext();
      }, interval);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoplay, handleNext, handlePrevious, interval, isLoading]);

  // Preload next image
  const nextIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;

  return (
    <div
      className={cn(
        "overflow-hidden h-screen w-full relative flex items-center justify-center",
        className
      )}
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Always show all images stacked, control visibility with opacity */}
      {loadedImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0 
          }}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0 || index === nextIndex}
            sizes="100vw"
          />
        </div>
      ))}

      {overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10",
            overlayClassName
          )}
        />
      )}

      {!isLoading && children}
    </div>
  );
};
