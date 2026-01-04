"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type Card = {
  title: string;
  src: string;
};

export const FocusCards = ({ cards }: { cards: Card[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((card, idx) => (
        <motion.div
          key={card.title}
          className="relative h-80 rounded-xl overflow-hidden cursor-pointer bg-neutral-100"
          onHoverStart={() => setHovered(idx)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            scale: hovered === idx ? 1.02 : hovered !== null ? 0.98 : 1,
            filter: hovered === idx ? "blur(0px) brightness(1.1)" : hovered !== null ? "blur(2px) brightness(0.9)" : "blur(0px) brightness(1)",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={false}
            animate={{
              y: hovered === idx ? 0 : 20,
              opacity: hovered === idx ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white text-xl font-serif font-bold">{card.title}</h3>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

