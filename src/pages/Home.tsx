import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <div className="bg-background text-foreground min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle moving gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-platinum-950/10 to-background opacity-50 animate-gradient-x"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="animate-fade-in-up mb-16" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative inline-block">
              <img src="https://i.postimg.cc/pdwkSWQS/ammu.jpg" alt="Gayathri Lakshmi Chandrakala" className="w-56 h-56 rounded-full mx-auto border-2 border-electric-500/20 object-cover shadow-2xl transform hover:scale-105 transition-all duration-700 card-glow" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-500/5 to-transparent"></div>
            </div>
          </div>
          
          {/* Main Headline */}
          <div className="animate-fade-in-up mb-12" style={{
          animationDelay: '0.5s'
        }}>
            <h1 className="text-5xl md:text-8xl font-display font-light mb-8 leading-tight tracking-wide">
              Hi, I'm <span className="font-medium text-gradient glow-text">Gayathri</span>
            </h1>
            
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <Button asChild className="bg-transparent border-2 border-electric-500/50 text-white hover:bg-electric-500/10 hover:border-electric-400 hover:text-electric-300 px-16 py-6 text-xl font-light tracking-widest rounded-lg transform hover:scale-105 transition-all duration-500 border-glow hover:glow-text">
              <Link to="/portfolio">Explore My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Home;