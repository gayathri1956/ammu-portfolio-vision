
import { ExternalLink, Clock } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center tracking-wide animate-fade-in-up">
          What I'm Working On
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kids Learning App */}
          <div className="group animate-fade-in-up bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-8 hover:border-white/20 transition-all duration-500 hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light">Kids Learning App</h3>
              <div className="flex items-center text-amber-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">Ongoing</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              A playful and educational application designed for kids aged 5 and below. 
              Combines interactive learning with modern AI technologies to create engaging educational experiences.
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Suno AI', 'Polo AI'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 text-sm rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="w-full py-3 border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 cursor-not-allowed">
              <ExternalLink className="w-4 h-4 inline mr-2" />
              In Development
            </button>
          </div>
          
          {/* Portfolio Website */}
          <div className="group animate-fade-in-up bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-8 hover:border-white/20 transition-all duration-500 hover:scale-105" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light">Portfolio Website</h3>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              A modern, elegant portfolio website showcasing my journey, skills, and aspirations. 
              Built with focus on user experience and accessibility.
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 text-sm rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="w-full py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              <ExternalLink className="w-4 h-4 inline mr-2" />
              Live Project
            </button>
          </div>
          
          {/* Future Projects Placeholder */}
          <div className="group animate-fade-in-up bg-gradient-to-br from-gray-900/30 to-black border border-gray-700 border-dashed p-8 text-center" style={{ animationDelay: '0.6s' }}>
            <div className="text-6xl mb-6 opacity-20">+</div>
            <h3 className="text-xl font-light text-gray-400 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-500 text-sm">
              Exciting AI/ML projects and web applications in the pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
