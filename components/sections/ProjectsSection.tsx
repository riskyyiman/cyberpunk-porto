import ProjectCard from '../projectcard';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Selected Missions</h2>
        <span className="text-xs font-mono text-zinc-500 uppercase border border-zinc-800 px-2 py-1 rounded">Index: 01-04</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} index={index} />
        ))}
      </div>
    </section>
  );
}
