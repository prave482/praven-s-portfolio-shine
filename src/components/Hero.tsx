import { Github, Linkedin, MapPin, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="animate-fade-up stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Veeranki Praveena</span>
          </h1>

          {/* Role */}
          <p className="animate-fade-up stagger-2 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
            Software Developer
          </p>

          {/* Location */}
          <div className="animate-fade-up stagger-3 flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-5 h-5" />
            <span>Hyderabad, Telangana</span>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up stagger-4 flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => handleScroll('projects')}
              className="btn-primary flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => handleScroll('skills')}
              className="btn-outline flex items-center gap-2"
            >
              View Skills
            </button>

            <a
              href="https://www.linkedin.com/in/praveena-veeranki-783336286/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/prave482"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="#"
              className="btn-outline flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-up stagger-5 animate-float">
            <button
              onClick={() => handleScroll('about')}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
