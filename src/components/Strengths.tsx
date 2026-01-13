import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Lightbulb, 
  MessageCircle, 
  Rocket, 
  Users,
  Target,
  CheckCircle
} from 'lucide-react';

const strengths = [
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Strong problem-solving and analytical skills',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description: 'Effective communication and teamwork abilities',
  },
  {
    icon: Rocket,
    title: 'Adaptability',
    description: 'Eager to learn and adapt to new technologies',
  },
  {
    icon: Users,
    title: 'Friendly Nature',
    description: 'Friendly nature and strong presentation skills',
  },
  {
    icon: Target,
    title: 'Dedication',
    description: 'Dedicated towards work and efficient task management',
  },
];

const Strengths = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="strengths"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Additional Information</h2>
          <p className="section-subtitle">
            Key strengths that define my professional approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`glass-card p-6 rounded-2xl ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <strength.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{strength.title}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
