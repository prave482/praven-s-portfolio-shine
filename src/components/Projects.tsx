import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, Search } from 'lucide-react';

const projects = [
  {
    title: 'She Cure App',
    description: 'Healthcare application built with React for women\'s health and wellness management.',
    tech: ['React', 'HTML', 'JavaScript', 'CSS'],
    source: 'https://github.com/prave482/she-cure-app',
  },
  {
    title: 'Fraud Detection System',
    description: 'AI/ML-powered fraud detection system with React frontend for identifying suspicious activities.',
    tech: ['AI/ML', 'React', 'Python'],
    source: 'https://github.com/prave482/Fraud-app',
  },
  {
    title: 'Hivemind - Overburden Feedback System',
    description: 'Flutter application with AI summarization for collecting and analyzing feedback to reduce overburden.',
    tech: ['Flutter', 'Dart', 'AI'],
    source: 'https://github.com/prave482/Hivemind',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of my work and personal projects
          </p>
        </div>

        {/* Search Filter */}
        <div className={`max-w-md mx-auto mb-12 ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found matching "{searchQuery}"
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
