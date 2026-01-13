import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech | Computer Science',
    institution: 'ICFAI Tech University, Hyderabad',
    period: '2022 – 2026',
    score: 'CGPA: 6.78 (as of 6th sem)',
    icon: GraduationCap,
  },
  {
    degree: 'CBSE | Senior School',
    institution: 'Meluha International',
    period: '2020 – 2022',
    score: '73.4%',
    icon: Award,
  },
  {
    degree: 'CBSE | Secondary School',
    institution: "Scholar's International School",
    period: '2014 – 2020',
    score: '75.2%',
    icon: Award,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl text-center ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <edu.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
              <p className="text-primary font-medium mb-3">{edu.institution}</p>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
              
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
