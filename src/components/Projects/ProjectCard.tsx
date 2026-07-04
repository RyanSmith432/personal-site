'use client';

import { useState } from 'react';
import CarouselModal from './CarouselModal';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="
            group cursor-pointer
            border rounded-lg p-4
            shadow-sm
            transition-all duration-300
            hover:scale-[1.03]
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-blue-400
            hover:animate-[pulseGlow_1.5s_ease-in-out_infinite]
  "
>
        {project.images?.[0] && (
          <img
            src={project.images[0]}
            className="rounded mb-3 w-full h-40 object-cover"
          />
        )}

        <h3 className="text-xl font-bold">{project.title}</h3>
        {project.subtitle && (
          <p className="text-sm text-gray-500">{project.subtitle}</p>
        )}
        <p className="mt-2">{project.desc}</p>
      </div>

      {open && !project.link && (
        <CarouselModal
          images={project.images}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
