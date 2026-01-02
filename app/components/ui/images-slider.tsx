"use client";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children?: React.ReactNode;
  overlay?: React.ReactNode | boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [directionState, setDirectionState] = useState<"up" | "down">(direction);

  const handleNext = () => {
    setDirectionState("up");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirectionState("down");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const loadImages = () => {
      const loadPromises = images.map((image) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(image);
          img.onerror = reject;
          img.src = image;
        });
      });

      Promise.all(loadPromises)
        .then((loaded) => setLoadedImages(loaded))
        .catch((error) => console.error("Failed to load images", error));
    };
    loadImages();
  }, [images]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: directionState === "up" ? 15 : -15,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 0,
      scale: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
    },
    downExit: {
      opacity: 0,
      scale: 0,
      rotateX: 15,
      transition: {
        duration: 0.5,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && (
        <>
          {overlay && (
            <div
              className={cn(
                "absolute inset-0 bg-black/60 z-40",
                overlayClassName
              )}
            />
          )}

          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={directionState === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
            draggable={false}
          />

          {children}
        </>
      )}

      {!areImagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-neutral-300 border-t-[#8B0000] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

