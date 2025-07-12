
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle moving gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black opacity-50 animate-gradient-x"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="animate-fade-in-up mb-12" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://i.postimg.cc/pdwkSWQS/ammu.jpg"
              alt="Gayathri Lakshmi Chandrakala"
              className="w-48 h-48 rounded-full mx-auto border-2 border-white/20 object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Main Headline */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-wide">
              Hi, I'm <span className="font-normal">Gayathri</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
              An AI/ML enthusiast, aspiring IAS officer, and web developer
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              asChild
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-light tracking-wide rounded-none transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/portfolio">Explore My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
