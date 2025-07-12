import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Brain, Target, User, Briefcase, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight animate-slide-in-left">GLCL</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'about', label: 'About', icon: User },
                { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'services', label: 'Services', icon: Target },
                { id: 'contact', label: 'Contact', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 transition-all duration-300 hover:text-emerald-400 transform hover:scale-105 ${
                    activeSection === id ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://i.postimg.cc/pdwkSWQS/ammu.jpg"
                alt="Gayathri Lakshmi Chandrakala"
                className="w-52 h-52 rounded-full mx-auto mb-8 border-4 border-emerald-400/30 object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-emerald-400 to-white bg-clip-text text-transparent">
                  LINGAMPALLI GAYATHRI
                </span>
                <br />
                <span className="text-emerald-400 animate-pulse">LAKSHMI CHANDRAKALA</span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                B.Tech 3rd Year | <span className="text-emerald-400">AI/ML Specialist</span> | Future IAS Officer
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Passionate about exploring cutting-edge technologies in Artificial Intelligence and Machine Learning, 
                with a strong commitment to serving society through civil services.
              </p>
            </div>
            
            <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '1s' }}>
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Learn More About Me
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              {[
                { number: '3+', label: 'Years Experience', suffix: '' },
                { number: '85', label: 'AI/ML Proficiency', suffix: '%' },
                { number: '2+', label: 'Projects Completed', suffix: '' },
                { number: '100', label: 'Dedication Level', suffix: '%' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Educational Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  Currently pursuing B.Tech in Computer Science with specialization in Artificial Intelligence 
                  and Machine Learning. I am in my 3rd year and have maintained strong academic performance 
                  while actively engaging in various technology projects and research initiatives.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Career Aspirations</h3>
                <p className="text-gray-300 leading-relaxed">
                  My ultimate goal is to become an IAS officer and contribute to public service and governance. 
                  I believe that my technical background in AI/ML will provide a unique perspective in addressing 
                  modern administrative challenges and implementing technology-driven solutions for societal development.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in-right">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Interests & Passions</h3>
                <ul className="space-y-4 text-gray-300">
                  {[
                    { icon: Brain, text: 'Artificial Intelligence and Machine Learning research' },
                    { icon: Code, text: 'Web development and creating user-friendly applications' },
                    { icon: Target, text: 'Public policy and governance studies' },
                    { icon: User, text: 'Community service and social impact initiatives' }
                  ].map(({ icon: Icon, text }, index) => (
                    <li key={index} className="flex items-start group hover:text-emerald-400 transition-colors duration-300">
                      <Icon className="w-5 h-5 mt-1 mr-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Certifications</h3>
                <p className="text-gray-300 leading-relaxed">
                  Continuously expanding knowledge through various online courses and certifications 
                  in AI/ML, web development, and related technologies. Always eager to learn and 
                  adapt to emerging technological trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
            My <span className="text-emerald-400">Portfolio</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-8 hover:scale-105 hover:border-emerald-400/50 transition-all duration-500 group animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-400/30 transition-colors duration-300">
                  <Code className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">Kids Learning App</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently developing an interactive educational application designed to make learning 
                engaging and fun for children. The project incorporates modern web technologies and 
                AI-driven features to personalize the learning experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Suno AI', 'Polo AI', 'React', 'JavaScript'].map((tech) => (
                  <span key={tech} className="bg-gray-700/50 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-400/20 hover:border-emerald-400/50 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Project in Development</span>
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-8 hover:scale-105 hover:border-emerald-400/50 transition-all duration-500 group animate-fade-in-right">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-400/30 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">Portfolio Website</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                This responsive portfolio website showcases my skills, projects, and professional journey. 
                Built with modern web technologies and featuring a clean, minimalist design with 
                accessibility in mind.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="bg-gray-700/50 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-400/20 hover:border-emerald-400/50 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Live Project</span>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-gray-400 text-lg">More exciting projects coming soon...</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
            Skills & <span className="text-emerald-400">Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Technical Skills</h3>
              <div className="space-y-6">
                {[
                  { skill: 'Artificial Intelligence', level: 85 },
                  { skill: 'Machine Learning', level: 80 },
                  { skill: 'React & JavaScript', level: 75 },
                  { skill: 'Python Programming', level: 85 },
                  { skill: 'Web Development', level: 80 },
                  { skill: 'Data Analysis', level: 70 }
                ].map(({ skill, level }, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">{skill}</span>
                      <span className="text-gray-400">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Soft Skills & Technologies</h3>
              <div className="mb-12">
                <h4 className="text-2xl font-semibold mb-4 text-gray-300">Soft Skills</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Leadership', 'Communication', 'Problem Solving', 'Team Collaboration',
                    'Critical Thinking', 'Adaptability', 'Project Management', 'Research Skills'
                  ].map((skill, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-emerald-700/30 transition-colors duration-300">
                      <span className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-300">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Suno AI', 'Polo AI', 'TensorFlow', 'PyTorch', 'React', 'TypeScript', 
                    'Python', 'JavaScript', 'HTML/CSS', 'Git', 'Node.js', 'MongoDB'
                  ].map((tech, index) => (
                    <span key={index} className="bg-gray-700/50 text-emerald-400 px-4 py-2 rounded-full text-sm border border-emerald-400/20 hover:border-emerald-400/50 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
            My <span className="text-emerald-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Web Development',
                description: 'Modern, responsive websites and web applications built with the latest technologies.'
              },
              {
                icon: Brain,
                title: 'AI/ML Solutions',
                description: 'Custom AI and machine learning solutions tailored to specific business needs.'
              },
              {
                icon: Target,
                title: 'Consultation',
                description: 'Technical consultation on AI implementation and digital transformation strategies.'
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-8 text-center hover:scale-105 hover:border-emerald-400/50 transition-all duration-500 group animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-400/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: 'gayathri.chandrakala@email.com', href: 'mailto:gayathri.chandrakala@email.com' },
                  { icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXX' },
                  { icon: Linkedin, text: 'LinkedIn Profile', href: '#' },
                  { icon: Github, text: 'GitHub Profile', href: '#' }
                ].map(({ icon: Icon, text, href }, index) => (
                  <a key={index} href={href} className="flex items-center group hover:text-emerald-400 transition-colors duration-300">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-400/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">{text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Send a Message</h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-all duration-300 hover:border-gray-600 resize-none"
                />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Lingampalli Gayathri Lakshmi Chandrakala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
