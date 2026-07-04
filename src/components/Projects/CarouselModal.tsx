'use client';

import { useState, useEffect } from 'react';

interface CarouselModalProps {
  images: string[];
  onClose: () => void;
}

export default function CarouselModal({ images, onClose }: CarouselModalProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // ESC key closes modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-x-0 top-16 bottom-0 bg-black/80 backdrop-blur-sm z-[20000] overflow-hidden">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-20 right-6 text-white text-4xl z-[30000]"
      >
        ✕
      </button>

      {/* Scrollable image container */}
      <div className="absolute inset-x-0 top-0 bottom-0 overflow-y-auto px-6 py-10">
        <img
          src={images[index]}
          className="w-full max-w-none h-auto block mx-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="fixed left-6 top-1/2 -translate-y-1/2 text-white text-5xl z-[30000]"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="fixed right-6 top-1/2 -translate-y-1/2 text-white text-5xl z-[30000]"
      >
        ›
      </button>
    </div>
  );
}
