
import { Globe, Palette } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center tracking-wide animate-fade-in-up">
          What I Do
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title */}
          <div className="animate-fade-in-left">
            <h3 className="text-5xl md:text-7xl font-light leading-tight tracking-wide">
              Services &<br />
              <span className="text-gray-500">Expertise</span>
            </h3>
          </div>
          
          {/* Right Column - Services */}
          <div className="animate-fade-in-right space-y-12">
            <div className="group">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-light">Web Development</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg pl-10">
                Creating modern, responsive websites with clean code and intuitive user experiences. 
                Specializing in React-based applications with focus on performance and accessibility.
              </p>
            </div>
            
            <div className="group">
              <div className="flex items-center mb-4">
                <Palette className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-light">Responsive UI Design</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg pl-10">
                Designing elegant, user-centered interfaces that work seamlessly across all devices. 
                Emphasizing minimalism, functionality, and aesthetic appeal in every project.
              </p>
            </div>
            
            {/* Additional Info */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400 italic">
                Currently expanding my expertise in AI/ML integration and exploring opportunities 
                to contribute to technology-driven solutions in public service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
