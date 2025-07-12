
import { GraduationCap, Award, Book, Video, Code2 } from "lucide-react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center tracking-wide animate-fade-in-up">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Quote/Image */}
          <div className="animate-fade-in-left">
            <div className="bg-gradient-to-br from-gray-900/50 to-black p-12 border border-gray-800 h-full flex items-center justify-center">
              <blockquote className="text-2xl md:text-3xl font-light italic text-center leading-relaxed">
                "Technology is not just my passion, it's my pathway to serving society"
              </blockquote>
            </div>
          </div>
          
          {/* Right Column - Bio */}
          <div className="animate-fade-in-right space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Personal Journey</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning, 
                with a unique vision of combining technology with public service. My ultimate goal is to become 
                an IAS officer, bringing innovative solutions to governance and administration.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I believe that the future of governance lies in the intelligent application of technology. 
                My journey in AI/ML is not just about coding—it's about understanding how technology can 
                transform lives and serve the greater good.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Timeline */}
        <div className="mb-20 animate-fade-in-up">
          <h3 className="text-3xl font-light mb-12 text-center tracking-wide">Educational Timeline</h3>
          <div className="space-y-8">
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
              <div key={index} className="flex items-start space-x-6 p-6 border-l-2 border-gray-800 hover:border-white/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-light">{item.title}</h4>
                    <span className="text-gray-400 text-sm">{item.period}</span>
                  </div>
                  <p className="text-gray-300 mb-1">{item.institution}</p>
                  <p className="text-gray-400">{item.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20 animate-fade-in-up">
          <h3 className="text-3xl font-light mb-12 text-center tracking-wide">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Web Development with Live Projects (Ajjhub, Sapienz)",
              "Introduction to Prompt Engineering (Simplilearn)"
            ].map((cert, index) => (
              <div key={index} className="p-6 border border-gray-800 bg-gradient-to-br from-gray-900/30 to-black hover:border-white/20 transition-colors duration-300">
                <p className="text-gray-300 text-lg">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-light mb-12 text-center tracking-wide">Interests & Passions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Book, title: "Reading", desc: "Tech & self-help books" },
              { icon: Video, title: "Learning", desc: "Motivational videos" },
              { icon: Code2, title: "Coding", desc: "Small projects & experiments" }
            ].map((interest, index) => (
              <div key={index} className="text-center p-8 border border-gray-800 bg-gradient-to-br from-gray-900/30 to-black hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <interest.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-light mb-3">{interest.title}</h4>
                <p className="text-gray-400">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
