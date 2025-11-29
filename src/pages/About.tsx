
import { GraduationCap, Award, Book, Video, Code2 } from "lucide-react";

const About = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-display font-light mb-20 text-center tracking-wide animate-fade-in-up">
          About <span className="text-gradient glow-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-20 mb-24">
          {/* Left Column - Quote/Image */}
          <div className="animate-fade-in-left">
            <div className="bg-gradient-to-br from-platinum-900/30 to-background p-16 border border-platinum-800/50 h-full flex items-center justify-center rounded-2xl card-glow">
              <blockquote className="text-2xl md:text-4xl font-display font-light italic text-center leading-relaxed text-platinum-200">
                "Technology is not just my passion, it's my <span className="text-electric-400 glow-text">pathway to serving society</span>"
              </blockquote>
            </div>
          </div>
          
          {/* Right Column - Bio */}
          <div className="animate-fade-in-right space-y-10">
            <div>
              <h3 className="text-3xl font-display font-medium mb-8 tracking-wide text-electric-400 glow-text">Personal Journey</h3>
              <p className="text-platinum-300 leading-relaxed text-xl font-light">
                I'm a passionate B.Tech student specializing in <span className="text-electric-400 font-medium">Artificial Intelligence and Machine Learning</span>, 
                with a unique vision of combining technology with public service. My ultimate aspiration is to serve at the 
                <span className="text-electric-400 font-medium"> highest levels of administration</span>, bringing innovative technological solutions to governance and societal challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-display font-medium mb-8 tracking-wide text-electric-400 glow-text">Vision</h3>
              <p className="text-platinum-300 leading-relaxed text-xl font-light">
                I believe that the future of governance lies in the intelligent application of technology. 
                My journey in AI/ML is not just about coding—it's about understanding how technology can 
                <span className="text-electric-400 font-medium"> transform lives and serve the greater good</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Timeline */}
        <div className="mb-24 animate-fade-in-up">
          <h3 className="text-4xl font-display font-medium mb-16 text-center tracking-wide text-gradient glow-text">Educational Timeline</h3>
          <div className="space-y-10">
            {[
              {
                period: "2023 - 2027",
                title: "B.Tech in Computer Science (AI/ML)",
                institution: "Sri Vasavi Engineering College",
                grade: "CGPA: 7.6",
                icon: GraduationCap
              },
              {
                period: "2021 - 2023",
                title: "Intermediate Education",
                institution: "Sri Chaitanya Junior College",
                grade: "93%",
                icon: Book
              },
              {
                period: "2021",
                title: "Secondary School Certificate",
                institution: "Sri Chaitanya School",
                grade: "586/600",
                icon: Award
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-8 p-8 border-l-2 border-electric-500/30 hover:border-electric-400/50 transition-colors duration-500 bg-gradient-to-r from-platinum-900/10 to-transparent rounded-r-lg">
                <div className="w-16 h-16 bg-electric-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-electric-500/20">
                  <item.icon className="w-8 h-8 text-electric-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-2xl font-display font-medium text-platinum-100">{item.title}</h4>
                    <span className="text-electric-400 text-lg font-medium">{item.period}</span>
                  </div>
                  <p className="text-platinum-300 mb-2 text-lg">{item.institution}</p>
                  <p className="text-electric-400 font-medium text-lg">{item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24 animate-fade-in-up">
          <h3 className="text-4xl font-display font-medium mb-16 text-center tracking-wide text-gradient glow-text">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Web Development Course with Live Projects (Ajjhub and Sapienz Recruit)",
              "MS Office (Stepping Stones)",
              "Introduction to C (Stepping Stones)",
              "Introduction to Prompt Engineering (Simplilearn)",
              "Introduction to Internet of Things (NPTEL Online Certification)"
            ].map((cert, index) => (
              <div key={index} className="p-8 border border-platinum-800/50 bg-gradient-to-br from-platinum-900/20 to-background hover:border-electric-500/30 transition-all duration-500 rounded-xl card-glow">
                <p className="text-platinum-200 text-xl font-light leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="animate-fade-in-up">
          <h3 className="text-4xl font-display font-medium mb-16 text-center tracking-wide text-gradient glow-text">Interests & Passions</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Book, title: "Reading", desc: "Tech & self-help books" },
              { icon: Video, title: "Learning", desc: "Motivational videos" },
              { icon: Code2, title: "Coding", desc: "Small projects & experiments" }
            ].map((interest, index) => (
              <div key={index} className="text-center p-10 border border-platinum-800/50 bg-gradient-to-br from-platinum-900/20 to-background hover:border-electric-500/30 transition-all duration-500 hover:scale-105 rounded-xl card-glow">
                <div className="w-20 h-20 bg-electric-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-electric-500/20">
                  <interest.icon className="w-10 h-10 text-electric-400" />
                </div>
                <h4 className="text-2xl font-display font-medium mb-4 text-platinum-100">{interest.title}</h4>
                <p className="text-platinum-400 text-lg">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
