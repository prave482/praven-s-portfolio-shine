import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      alert('Message submitted successfully!');
      setFormData({ name: '', message: '' });
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            {/* Location */}
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
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
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Linkedin className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">LinkedIn</h3>
                <p className="text-muted-foreground">Connect with me</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/prave482"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-500/10 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Github className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">GitHub</h3>
                <p className="text-muted-foreground">Check out my code</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
