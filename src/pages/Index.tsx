
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Brain, Target, User, Briefcase, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">GLCL</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'about', label: 'About', icon: User },
                { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'services', label: 'Services', icon: Target },
                { id: 'contact', label: 'Contact', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 transition-colors hover:text-gray-300 ${
                    activeSection === id ? 'text-white border-b border-white pb-1' : 'text-gray-400'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <img
              src="https://i.postimg.cc/pdwkSWQS/ammu.jpg"
              alt="Gayathri Lakshmi Chandrakala"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-gray-700 object-cover"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              LINGAMPALLI GAYATHRI<br />LAKSHMI CHANDRAKALA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              B.Tech 3rd Year | AI/ML Specialist | Future IAS Officer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about exploring cutting-edge technologies in Artificial Intelligence and Machine Learning, 
              with a strong commitment to serving society through civil services.
            </p>
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
            >
              Learn More About Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Educational Background</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing B.Tech in Computer Science with specialization in Artificial Intelligence 
                and Machine Learning. I am in my 3rd year and have maintained strong academic performance 
                while actively engaging in various technology projects and research initiatives.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Career Aspirations</h3>
              <p className="text-gray-300 leading-relaxed">
                My ultimate goal is to become an IAS officer and contribute to public service and governance. 
                I believe that my technical background in AI/ML will provide a unique perspective in addressing 
                modern administrative challenges and implementing technology-driven solutions for societal development.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Interests & Passions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Brain className="w-5 h-5 mt-1 mr-3 text-gray-400" />
                  Artificial Intelligence and Machine Learning research
                </li>
                <li className="flex items-start">
                  <Code className="w-5 h-5 mt-1 mr-3 text-gray-400" />
                  Web development and creating user-friendly applications
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 mt-1 mr-3 text-gray-400" />
                  Public policy and governance studies
                </li>
                <li className="flex items-start">
                  <User className="w-5 h-5 mt-1 mr-3 text-gray-400" />
                  Community service and social impact initiatives
                </li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Certifications</h3>
              <p className="text-gray-300">
                Continuously expanding knowledge through various online courses and certifications 
                in AI/ML, web development, and related technologies. Always eager to learn and 
                adapt to emerging technological trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Kids Learning App</h3>
              <p className="text-gray-300 mb-4">
                Currently developing an interactive educational application designed to make learning 
                engaging and fun for children. The project incorporates modern web technologies and 
                AI-driven features to personalize the learning experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Suno AI</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Polo AI</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
              </div>
              <div className="flex items-center text-gray-400">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Project in Development</span>
              </div>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">
                This responsive portfolio website showcases my skills, projects, and professional journey. 
                Built with modern web technologies and featuring a clean, minimalist design with 
                accessibility in mind.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
              <div className="flex items-center text-gray-400">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Live Project</span>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400">More projects coming soon...</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Artificial Intelligence', level: 85 },
                  { skill: 'Machine Learning', level: 80 },
                  { skill: 'React & JavaScript', level: 75 },
                  { skill: 'Python Programming', level: 85 },
                  { skill: 'Web Development', level: 80 },
                  { skill: 'Data Analysis', level: 70 }
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill}</span>
                      <span className="text-gray-400">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Leadership', 'Communication', 'Problem Solving', 'Team Collaboration',
                  'Critical Thinking', 'Adaptability', 'Project Management', 'Research Skills'
                ].map((skill) => (
                  <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 mt-8">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Suno AI', 'Polo AI', 'TensorFlow', 'PyTorch', 'React', 'TypeScript', 
                  'Python', 'JavaScript', 'HTML/CSS', 'Git', 'Node.js', 'MongoDB'
                ].map((tech) => (
                  <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-2 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
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
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} className="bg-gray-800 border-gray-700 p-6 text-center hover:bg-gray-700 transition-colors">
                <Icon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4 text-gray-400" />
                  <span className="text-gray-300">gayathri.chandrakala@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4 text-gray-400" />
                  <span className="text-gray-300">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-4 text-gray-400" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn Profile</a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-4 text-gray-400" />
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub Profile</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                />
                <Button className="w-full bg-white text-black hover:bg-gray-200 py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Lingampalli Gayathri Lakshmi Chandrakala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
