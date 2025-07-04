import ProjectCard, { Project } from './ProjectCard'

export default function ProjectsSection({
  title,
  projects,
}: {
  title: string
  projects: Project[]
}) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
