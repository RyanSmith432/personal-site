import React from "react";

export default function YouTubeThumb({ id, title }: { id: string; title: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="youtube-thumb block w-80"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="rounded shadow-md hover:opacity-80 transition w-full"
      />
      <div className="text-sm mt-1 text-center">{title}</div>
    </a>
  );
}
