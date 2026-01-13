import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code, Lightbulb, Users, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Clean Code', desc: 'Quality-focused development' },
  { icon: Lightbulb, label: 'Problem Solver', desc: 'Analytical thinking' },
  { icon: Users, label: 'Team Player', desc: 'Effective collaboration' },
  { icon: TrendingUp, label: 'Fast Learner', desc: 'Adaptive & curious' },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my journey and passion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Passionate and driven software developer with a strong enthusiasm for coding and a deep commitment to delivering high-quality work. I continuously seek to enhance my skills and contribute effectively to team projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dedicated to staying current with industry trends and best practices, I thrive in dynamic environments and am eager to tackle new challenges to drive success.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`glass-card p-6 rounded-2xl ${
                  isVisible ? `animate-fade-up stagger-${index + 2}` : 'opacity-0'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
