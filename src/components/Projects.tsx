import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, Search } from 'lucide-react';

const projects = [
  {
    title: 'Data Analytics Dashboard',
    description: 'Power BI dashboard with Excel integration and SQL social media queries for comprehensive data analysis.',
    tech: ['Power BI', 'Excel', 'SQL'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Ethical Hacking – Malicious Investigation',
    description: 'Phishing investigation project using Kali Linux and Maltego for security analysis.',
    tech: ['Kali Linux', 'Maltego', 'Security'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Random Password Generator',
    description: 'Frontend application with Python Flask backend for generating secure random passwords.',
    tech: ['Python', 'Flask', 'JavaScript'],
    demo: '#',
    source: '#',
  },
  {
    title: 'AI Video using 10+ AI Tools',
    description: 'Creative project utilizing multiple AI tools including ChatGPT and Microsoft Copilot.',
    tech: ['ChatGPT', 'Microsoft Copilot', 'AI Tools'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Netflix Landing Page',
    description: 'Responsive UI landing page clone inspired by Netflix design patterns.',
    tech: ['HTML', 'CSS'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Learning Path Generator',
    description: 'AI-powered recommendation tool for personalized learning paths.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    demo: '#',
    source: '#',
  },
  {
    title: 'UI/UX Wireframe – OLA Design',
    description: 'Comprehensive UI/UX wireframe design for ride-sharing application.',
    tech: ['Figma', 'UI/UX', 'Wireframing'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Overburden Feedback System',
    description: 'Flutter application with AI summarization for feedback management.',
    tech: ['Flutter', 'Dart', 'AI'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing skills and projects.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Restaurant Management System',
    description: 'Web-based application to manage menu, orders, and billing.',
    tech: ['Web Development', 'Database'],
    demo: '#',
    source: '#',
  },
  {
    title: 'URL Shortener',
    description: 'Flask-based backend service with redirect and storage capabilities.',
    tech: ['Flask', 'Python', 'Database'],
    demo: '#',
    source: '#',
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.demo === '#' ? 'Coming Soon' : 'Live Demo'}
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {project.source === '#' ? 'Coming Soon' : 'Source'}
                  </a>
                </div>
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
