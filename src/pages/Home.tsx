
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://i.postimg.cc/pdwkSWQS/ammu.jpg"
              alt="Gayathri Lakshmi Chandrakala"
              className="w-52 h-52 rounded-full mx-auto mb-8 border-4 border-emerald-400/30 object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-400 to-white bg-clip-text text-transparent">
                LINGAMPALLI GAYATHRI
              </span>
              <br />
              <span className="text-emerald-400 animate-pulse">LAKSHMI CHANDRAKALA</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              B.Tech 3rd Year | <span className="text-emerald-400">AI/ML Specialist</span> | Future IAS Officer
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about exploring cutting-edge technologies in Artificial Intelligence and Machine Learning, 
              with a strong commitment to serving society through civil services.
            </p>
          </div>
          
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '1s' }}>
            <Button 
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              <Link to="/about">Learn More About Me</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            {[
              { number: '3+', label: 'Years Experience', suffix: '' },
              { number: '85', label: 'AI/ML Proficiency', suffix: '%' },
              { number: '2+', label: 'Projects Completed', suffix: '' },
              { number: '100', label: 'Dedication Level', suffix: '%' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
