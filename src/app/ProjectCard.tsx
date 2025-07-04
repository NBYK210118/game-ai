import Image from 'next/image'
import Link from 'next/link'

export interface Project {
  id: number
  title: string
  institution: string
  tags: string[]
  thumbnail: string
  projectPage?: string
  paperLink?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-12 items-start gap-4 py-4 border-b last:border-b-0">
      <div className="col-span-1 text-right pr-2 text-gray-500">
        {project.id}
      </div>
      <div className="col-span-2">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={120}
          height={90}
          className="object-cover rounded"
        />
      </div>
      <div className="col-span-9">
        <h3 className="text-lg font-medium text-blue-600 hover:underline">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{project.institution}</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-2">
          {project.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
        {(project.projectPage || project.paperLink) && (
          <div className="mt-3 flex gap-2">
            {project.projectPage && (
              <Link
                href={project.projectPage}
                className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
              >
                Project Page
              </Link>
            )}
            {project.paperLink && (
              <Link
                href={project.paperLink}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
              >
                Read Paper
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
