import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';

// Corrected certificate name to link mapping
const certificates = [
  {
    name: 'Build Your Own Static Website',
    issuer: 'NxtWave',
    link: 'https://drive.google.com/file/d/1fhFzqD3gM9fz7gi40DxaxnoINNY40Y7L/view?usp=sharing',
  },
  {
    name: 'Frontend Fundamentals (HTML5 & CSS3)',
    issuer: 'Pirple',
    link: 'https://drive.google.com/file/d/17IszhEUiBYyQ7vE0fKv8ODMceV3Ugs-Z/view?usp=sharing',
  },
  {
    name: 'Data Processing and Visualisation',
    issuer: 'NASSCOM',
    link: 'https://drive.google.com/file/d/11j1nyQ-E6gKNc0CV6nHgTejkj4H5YXCC/view?usp=sharing',
  },
  {
    name: 'Introduction to Python',
    issuer: 'Kaggle',
    link: 'https://drive.google.com/file/d/1QmtHhZMpcoAhQEZC6nzoeqkQnFE8mFiT/view?usp=sharing',
  },
  {
    name: 'Exploratory Data Analysis',
    issuer: 'NASSCOM',
    link: 'https://drive.google.com/file/d/1ZScMvIXF9JjYocIK3IhtY_lhnihsWyTu/view?usp=sharing',
  },
  {
    name: 'AWS EC2 Route Project Completion',
    issuer: 'NxtWave',
    link: 'https://drive.google.com/file/d/1e_U0C8w2izQagcSxlvPdnnXoaPI8eXVC/view?usp=sharing',
  },
  {
    name: 'Introduction to Data Analytics',
    issuer: 'SkillUp',
    link: 'https://drive.google.com/file/d/1mY2JW4diOLfrQrodeFJsEQi1k1M0NcAz/view?usp=sharing',
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Coursera',
    link: 'https://drive.google.com/file/d/1cauPk9Y9sFjpSvzSpUNoZefuNrdIivWW/view?usp=sharing',
  },
];

const Certificates = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="certificates"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-12 md:py-16 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.name}
              className={`certificate-card ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Issued by {cert.issuer}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Badges */}
        <div className={`grid md:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-up stagger-3' : 'opacity-0'}`}>
          {/* Cisco Badge */}
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Introduction to Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">Issued by Cisco</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Verified Badge
              </span>
            </div>
          </div>

          {/* Credly Profile */}
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7 text-orange-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Credly Profile</h3>
              <p className="text-sm text-muted-foreground mb-3">View all verified badges</p>
              <a
                href="https://www.credly.com/users/praveena-veeranki.69590c31"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                View Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
