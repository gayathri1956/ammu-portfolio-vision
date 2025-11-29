import { Code, Brain, Lightbulb, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: 'C Programming', level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Java', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'Python', level: 85, color: 'from-yellow-500 to-green-500' }
      ]
    },
    {
      title: "Web & AI Technologies",
      icon: Zap,
      skills: [
        { name: 'Web Development', level: 80, color: 'from-purple-500 to-pink-500' },
        { name: 'Suno AI', level: 70, color: 'from-indigo-500 to-blue-500' },
        { name: 'Polo AI', level: 70, color: 'from-teal-500 to-emerald-500' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Teamwork', description: 'Collaborative problem-solving' },
    { name: 'Communication', description: 'Clear expression of ideas' },
    { name: 'Time Management', description: 'Efficient task prioritization' },
    { name: 'Active Listening', description: 'Understanding diverse perspectives' },
    { name: 'Problem Solving', description: 'Analytical thinking approach' },
    { name: 'Leadership', description: 'Guiding academic projects' }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-display font-light mb-20 text-center tracking-wide animate-fade-in-up">
          Skills & <span className="text-gradient glow-text">Expertise</span>
        </h2>
        
        {/* Technical Skills */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex} 
                className="animate-fade-in-up bg-gradient-to-br from-platinum-900/30 to-background p-10 border border-platinum-800/50 rounded-2xl card-glow"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-12">
                  <div className="w-14 h-14 bg-electric-500/10 rounded-full flex items-center justify-center mr-4 border border-electric-500/20">
                    <category.icon className="w-7 h-7 text-electric-400" />
                  </div>
                  <h3 className="text-3xl font-display font-medium tracking-wide text-electric-300">{category.title}</h3>
                </div>
                
                <div className="space-y-10">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-4">
                        <span className="text-xl font-light text-platinum-200 group-hover:text-electric-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-electric-400 font-medium text-lg">{skill.level}%</span>
                      </div>
                      <div className="relative w-full h-3 bg-platinum-900 rounded-full overflow-hidden">
                        <div 
                          className={`absolute h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full glow-electric`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-16">
            <div className="w-14 h-14 bg-electric-500/10 rounded-full flex items-center justify-center mr-4 border border-electric-500/20">
              <Brain className="w-7 h-7 text-electric-400" />
            </div>
            <h3 className="text-4xl font-display font-medium tracking-wide text-gradient glow-text">Soft Skills & Competencies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="group p-8 border border-platinum-800/50 bg-gradient-to-br from-platinum-900/20 to-background hover:border-electric-500/30 transition-all duration-500 hover:scale-105 rounded-xl card-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4">
                  <Lightbulb className="w-6 h-6 text-electric-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-medium text-platinum-100 mb-2">{skill.name}</h4>
                    <p className="text-platinum-400 text-base leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
