
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
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-platinum-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-display font-semibold tracking-widest text-gradient glow-text">
              GLCL
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navigationItems.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-medium tracking-wide transition-all duration-300 text-lg ${
                    currentPath === path 
                      ? 'text-electric-400 border-b-2 border-electric-400 pb-1 glow-text' 
                      : 'text-platinum-300 hover:text-electric-300 hover:glow-text'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-electric-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-platinum-800/50">
              <div className="flex flex-col space-y-6 mt-6">
                {navigationItems.map(({ label, path }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium tracking-wide transition-all duration-300 text-lg ${
                      currentPath === path 
                        ? 'text-electric-400 glow-text' 
                        : 'text-platinum-300 hover:text-electric-300'
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
      <footer className="py-16 px-6 border-t border-platinum-800/50 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-platinum-400 font-light tracking-wide text-lg">
            © 2024 <span className="text-electric-400 font-medium">Lingampalli Gayathri Lakshmi Chandrakala</span>. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
