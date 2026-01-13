import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Code Alpha',
    location: 'Hyderabad',
    period: '20/06/2025 – 20/07/2025',
    description: [
      'Developed backend APIs and integrated with frontend modules',
      'Worked with Python, Flask/Django, SQL databases',
      'Hands-on REST API design and debugging backend logic',
    ],
    tech: ['Python', 'Flask', 'Django', 'SQL', 'REST API'],
    certificateLink: 'https://drive.google.com/file/d/1MfG7_qSG9FrVhbTkVIMU9L5tnSJQjubf/view?usp=sharing',
  },
  {
    title: 'Web Developer Intern',
    company: 'Navodita Infotech',
    location: 'Hyderabad',
    period: '06/2025 – 07/2025',
    description: [
      'Developed Portfolio website using HTML, CSS, JavaScript',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    certificateLink: 'https://drive.google.com/file/d/1d-ZnWVd8ajEMXQES5PgfM3p1tP-X8vjD/view?usp=sharing',
  },
  {
    title: 'Intern',
    company: 'Jaala Academy',
    location: 'Hyderabad',
    period: '06/2024 – 07/2024',
    description: [
      'Learnt skills on Python, Java, API testing',
      'Developed a project using Java – Calculator',
    ],
    tech: ['Java', 'Python', 'SQL', 'API Testing'],
    certificateLink: 'https://drive.google.com/file/d/1KcFTJfStAZohkHEI8pwwsyxzbcNUyDJL/view?usp=drive_link',
  },
  {
    title: 'Intern – Ethical Hacking',
    company: 'Common Internship Studio',
    location: 'Hyderabad',
    period: '06/2024 – 07/2024',
    description: [
      'Gained experience in ethical hacking and Linux',
      'Created Acunetix report',
      'Learned vulnerability analysis',
    ],
    tech: ['Ethical Hacking', 'Linux', 'Acunetix'],
    certificateLink: 'https://drive.google.com/file/d/1KcFTJfStAZohkHEI8pwwsyxzbcNUyDJL/view?usp=sharing',
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through various roles and organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative md:pl-16 ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot hidden md:block" style={{ top: '28px' }} />

                {/* Card */}
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
