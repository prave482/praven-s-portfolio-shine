import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="max-w-[800px] mx-auto p-8 print:p-6 print:max-w-none text-gray-800">
        {/* Header */}
        <header className="text-center mb-6 pb-4 border-b-2 border-primary">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Veeranki Praveena</h1>
          <p className="text-lg text-primary font-medium mb-3">Software Developer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              praveenaveeranki@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +91 9392585005
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Hyderabad, Telangana
            </span>
          </div>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <a href="https://www.linkedin.com/in/praveena-veeranki-783336286/" className="text-primary hover:underline flex items-center gap-1">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/prave482" className="text-primary hover:underline flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">About Me</h2>
          <p className="text-sm leading-relaxed">
            Passionate and driven software developer with a strong enthusiasm for coding and a deep commitment to delivering high-quality work. Continuously seeking to enhance skills and contribute effectively to team projects. Dedicated to staying current with industry trends and best practices, thriving in dynamic environments and eager to tackle new challenges.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Professional Experience</h2>
          
          <div className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Backend Developer Intern</h3>
                <p className="text-primary text-sm">Code Alpha, Hyderabad</p>
              </div>
              <span className="text-sm text-gray-500">06/2025 – 07/2025</span>
            </div>
            <ul className="text-sm mt-1 list-disc list-inside text-gray-700">
              <li>Developed backend APIs and integrated with frontend modules</li>
              <li>Worked with Python, Flask/Django, SQL databases</li>
              <li>Hands-on REST API design and debugging backend logic</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Web Developer Intern</h3>
                <p className="text-primary text-sm">Navodita Infotech, Hyderabad</p>
              </div>
              <span className="text-sm text-gray-500">06/2025 – 07/2025</span>
            </div>
            <ul className="text-sm mt-1 list-disc list-inside text-gray-700">
              <li>Developed Portfolio website using HTML, CSS, JavaScript</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Intern</h3>
                <p className="text-primary text-sm">Jaala Academy, Hyderabad</p>
              </div>
              <span className="text-sm text-gray-500">06/2024 – 07/2024</span>
            </div>
            <ul className="text-sm mt-1 list-disc list-inside text-gray-700">
              <li>Learnt skills on Python, Java, API testing</li>
              <li>Developed a project using Java – Calculator</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Intern – Ethical Hacking</h3>
                <p className="text-primary text-sm">Common Internship Studio, Hyderabad</p>
              </div>
              <span className="text-sm text-gray-500">06/2024 – 07/2024</span>
            </div>
            <ul className="text-sm mt-1 list-disc list-inside text-gray-700">
              <li>Gained experience in ethical hacking and Linux</li>
              <li>Created Acunetix report and learned vulnerability analysis</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Education</h2>
          
          <div className="mb-2">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">B.Tech in Computer Science</h3>
                <p className="text-sm text-gray-600">ICFAI Tech University, Hyderabad</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">2022 – 2026</span>
                <p className="text-sm text-primary font-medium">CGPA: 6.78</p>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">CBSE Senior Secondary</h3>
                <p className="text-sm text-gray-600">Meluha International, Hyderabad</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">2020 – 2022</span>
                <p className="text-sm text-primary font-medium">73.4%</p>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">CBSE Secondary</h3>
                <p className="text-sm text-gray-600">Scholar's International School, Hyderabad</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">2014 – 2020</span>
                <p className="text-sm text-primary font-medium">75.2%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="font-medium">Languages:</span> Python, SQL, R, Java, C</div>
            <div><span className="font-medium">Web:</span> HTML, CSS, JavaScript, Bootstrap</div>
            <div><span className="font-medium">Data:</span> NumPy, Pandas, Power BI, Matplotlib</div>
            <div><span className="font-medium">AI/ML:</span> Scikit-learn, TensorFlow, NLP</div>
            <div><span className="font-medium">Mobile:</span> Flutter, Dart, TypeScript</div>
            <div><span className="font-medium">Cloud:</span> AWS</div>
            <div><span className="font-medium">Design:</span> Figma, Wireframing, Prototyping</div>
            <div><span className="font-medium">Security:</span> Ethical Hacking</div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Projects</h2>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div>
              <span className="font-medium">She Cure App</span> – Healthcare app for women's wellness (React, HTML, JavaScript, CSS)
            </div>
            <div>
              <span className="font-medium">Fraud Detection System</span> – AI/ML-powered fraud detection (React, Python, AI/ML)
            </div>
            <div>
              <span className="font-medium">Hivemind Feedback System</span> – Flutter app with AI summarization for feedback analysis
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Certifications</h2>
          <div className="grid grid-cols-2 gap-1 text-sm">
            <div>• Build Your Own Static Website (NxtWave)</div>
            <div>• Frontend Fundamentals HTML5 & CSS3 (Pirple)</div>
            <div>• Data Processing and Visualisation (NASSCOM)</div>
            <div>• Introduction to Python (Kaggle)</div>
            <div>• Exploratory Data Analysis (NASSCOM)</div>
            <div>• AWS EC2 Route Project (NxtWave)</div>
            <div>• Introduction to Data Analytics (SkillUp)</div>
            <div>• Foundations of Cybersecurity (Coursera)</div>
          </div>
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-2">Additional Information</h2>
          <p className="text-sm">
            <span className="font-medium">Strengths:</span> Problem-solving, communication, teamwork, adaptability, presentation skills
          </p>
          <p className="text-sm mt-1">
            <span className="font-medium">Activities:</span> Google Developer Club (Technical Team), Asana & Yantrikee Club Member, Volunteered at GDG events, Google Cloud Community Days 2025 attendee
          </p>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          @page { margin: 0.5in; size: A4; }
        }
      `}</style>
    </div>
  );
};

export default Resume;
