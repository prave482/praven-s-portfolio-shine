import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'R', 'Java', 'C'],
  },
  {
    title: 'Data Analysis & Visualization',
    skills: ['NumPy', 'Pandas', 'Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Data Science',
    skills: ['Data Preprocessing', 'Exploratory Data Analysis', 'Model Building', 'Evaluation Metrics'],
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS'],
  },
  {
    title: 'Android Development',
    skills: ['Flutter', 'Dart', 'TypeScript'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'AI/ML',
    skills: ['Scikit-learn', 'TensorFlow', 'NLP'],
  },
  {
    title: 'UI/UX Design',
    skills: ['Wireframing', 'Prototyping', 'Figma'],
  },
  {
    title: 'Cybersecurity',
    skills: ['Ethical Hacking'],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleSkillClick = (skill: string) => {
    const query = encodeURIComponent(`what is ${skill}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-8 md:py-10 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Click on any skill to learn more about it
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`${isVisible ? `animate-fade-up` : 'opacity-0'}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group flex items-center gap-2"
                    title="Click to learn more"
                  >
                    {skill}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
