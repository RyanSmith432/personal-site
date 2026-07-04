'use client';

import { useState } from 'react';

interface CarouselModalProps {
  images: string[];
  onClose: () => void;
}

export default function CarouselModal({ images, onClose }: CarouselModalProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full p-4">
        <img
          src={images[index]}
          className="rounded-lg shadow-xl w-full object-contain max-h-[80vh]"
        />

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
        >
          ›
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
