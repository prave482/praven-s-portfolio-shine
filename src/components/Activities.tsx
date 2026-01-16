import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Users, 
  Code, 
  Heart, 
  Award, 
  Palette, 
  Globe, 
  Activity,
  Star,
  Trophy,
  BookOpen
} from 'lucide-react';

const activities = [
  {
    icon: Code,
    text: 'Google Developer Member – Technical Team Member of Club',
  },
  {
    icon: Users,
    text: 'Asana and Yantrikee club member',
  },
  {
    icon: Globe,
    text: 'Member of growth community',
  },
  {
    icon: Activity,
    text: 'Volunteered for events – Coding contest GDG and Yantrikee club',
  },
  {
    icon: Globe,
    text: 'Attended Google Cloud Community Days Hyderabad 2025',
  },
  {
    icon: Heart,
    text: 'Participation in 3-day workshop by Cult Fit',
  },
  {
    icon: Heart,
    text: 'Blood donation camp participation and volunteering',
  },
  {
    icon: Palette,
    text: 'Participated in art competition',
  },
  {
    icon: Globe,
    text: 'Cognitio youth conclave – Delegate as Australia CSW in debate',
  },
  {
    icon: Award,
    text: 'Winner in writing competition',
  },
  {
    icon: Trophy,
    text: 'School achievements: Kabaddi winner, runner in chess, star reader award',
  },
];

const Activities = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="activities"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-12 md:py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-10 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Extra Curricular Activities</h2>
          <p className="section-subtitle">
            Beyond academics – my involvement in various activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`activity-item ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index % 6) * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <activity.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground">{activity.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
