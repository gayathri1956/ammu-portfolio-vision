
const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-24 px-6">
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
    </div>
  );
};

export default Skills;
