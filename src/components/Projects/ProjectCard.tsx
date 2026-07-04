'use client';

import { useState } from 'react';
import CarouselModal from './CarouselModal';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="project-card cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        onClick={() => setOpen(true)}
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

      {open && (
        <CarouselModal
          images={project.images}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
