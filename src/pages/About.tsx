
import { Brain, Code, Target, User } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen py-24 px-6">
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
    </div>
  );
};

export default About;
