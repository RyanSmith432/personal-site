import React from "react";

export default function YouTubeThumb({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="youtube-thumb block w-80 relative group"
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="rounded shadow-md hover:opacity-80 transition w-full"
      />

      {/* Centered Play Badge Overlay */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          bg-black/20
          rounded-md
          pointer-events-none
          animate-[fadeIn_0.4s_ease]
        "
      >
        <div
          className="
            bg-red-600
            w-14 h-14
            rounded-full
            flex items-center justify-center
            shadow-xl
            opacity-70
            transition
            group-hover:scale-120
            group-hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="
              w-7 h-7
              translate-x-[2px]
              transition
              group-hover:rotate-3
            "
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="text-sm mt-1 text-center">{title}</div>
    </a>
  );
}
