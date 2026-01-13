import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
          {/* Location */}
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground">Hyderabad, Telangana</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/praveena-veeranki-783336286/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Linkedin className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">LinkedIn</h3>
              <p className="text-muted-foreground">Connect with me</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/prave482"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-500/10 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <Github className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">GitHub</h3>
              <p className="text-muted-foreground">Check out my code</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
