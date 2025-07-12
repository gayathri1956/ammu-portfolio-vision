
import { Code, Briefcase, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
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
    </div>
  );
};

export default Portfolio;
