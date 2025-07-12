
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Skills', path: '/skills' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-light tracking-widest">
              GLCL
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navigationItems.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-light tracking-wide transition-all duration-300 hover:text-white ${
                    currentPath === path 
                      ? 'text-white border-b border-white pb-1' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-6">
                {navigationItems.map(({ label, path }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-light tracking-wide transition-all duration-300 ${
                      currentPath === path 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {children}
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-light tracking-wide">
            © 2024 Lingampalli Gayathri Lakshmi Chandrakala. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
