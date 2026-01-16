import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Smartphone, 
  Globe, 
  Cpu, 
  Palette, 
  Shield 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'SQL', 'R', 'Java', 'C'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Data Analysis & Visualization',
    icon: Database,
    skills: ['NumPy', 'Pandas', 'Power BI', 'Matplotlib', 'Seaborn'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Science',
    icon: Brain,
    skills: ['Data Preprocessing', 'EDA', 'Model Building', 'Evaluation Metrics'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['AWS'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'TypeScript'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    title: 'AI/ML',
    icon: Cpu,
    skills: ['Scikit-learn', 'TensorFlow', 'NLP'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Wireframing', 'Prototyping', 'Figma'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: ['Ethical Hacking'],
    gradient: 'from-red-500 to-orange-500',
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

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
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass-card p-5 rounded-2xl group hover:scale-[1.02] transition-all duration-300 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${catIndex * 0.08}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary/80 text-foreground text-xs font-medium
                      border border-transparent hover:border-primary/30 hover:bg-primary/10 
                      transition-all duration-200"
                    style={{ animationDelay: `${(catIndex * 0.08) + (skillIndex * 0.03)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Bar */}
        <div className={`mt-8 flex flex-wrap justify-center gap-3 ${isVisible ? 'animate-fade-up stagger-5' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">9 Categories</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">30+ Technologies</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Always Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
