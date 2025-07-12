
import { Code, Brain, Users, MessageSquare, Clock, Ear } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: 'C Programming', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 85 },
    { name: 'Web Development', level: 80 },
    { name: 'Suno AI', level: 70 },
    { name: 'Polo AI', level: 70 }
  ];

  const softSkills = [
    { name: 'Teamwork', icon: Users },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Time Management', icon: Clock },
    { name: 'Active Listening', icon: Ear }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center tracking-wide animate-fade-in-up">
          Skills & Technologies
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="animate-fade-in-left">
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 mr-4" />
              <h3 className="text-3xl font-light tracking-wide">Technical Skills</h3>
            </div>
            
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-light group-hover:text-white transition-colors duration-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1">
                    <div 
                      className="bg-white h-1 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="animate-fade-in-right">
            <div className="flex items-center mb-12">
              <Brain className="w-8 h-8 mr-4" />
              <h3 className="text-3xl font-light tracking-wide">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="p-6 border border-gray-800 bg-gradient-to-br from-gray-900/30 to-black text-center hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-light">{skill.name}</h4>
                </div>
              ))}
            </div>
            
            {/* Additional Skills Section */}
            <div className="mt-12">
              <h4 className="text-xl font-light mb-6 tracking-wide">Core Competencies</h4>
              <div className="space-y-4">
                {[
                  'Problem-solving with analytical thinking',
                  'Collaborative project development',
                  'Continuous learning and adaptation',
                  'Leadership in academic projects'
                ].map((competency, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-300">{competency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
