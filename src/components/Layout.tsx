
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Briefcase, Code, Target, MessageSquare } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationItems = [
    { id: 'home', label: 'Home', icon: User, path: '/' },
    { id: 'about', label: 'About', icon: User, path: '/about' },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase, path: '/portfolio' },
    { id: 'skills', label: 'Skills', icon: Code, path: '/skills' },
    { id: 'services', label: 'Services', icon: Target, path: '/services' },
    { id: 'contact', label: 'Contact', icon: MessageSquare, path: '/contact' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight animate-slide-in-left">
              GLCL
            </Link>
            <div className="hidden md:flex space-x-8">
              {navigationItems.map(({ id, label, icon: Icon, path }, index) => (
                <Link
                  key={id}
                  to={path}
                  className={`flex items-center space-x-2 transition-all duration-300 hover:text-emerald-400 transform hover:scale-105 ${
                    currentPath === path ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Lingampalli Gayathri Lakshmi Chandrakala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
