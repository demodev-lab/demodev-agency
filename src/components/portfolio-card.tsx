'use server';

import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
}

export default async function PortfolioCard({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full aspect-[2/1] overflow-hidden;">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8">
        <h3 className=" text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
