
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center tracking-wide animate-fade-in-up">
          Let's Connect
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-light mb-12 tracking-wide">Get in Touch</h3>
            
            <div className="space-y-8">
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: 'gayatrilingampalli6@gmail.com',
                  href: 'mailto:gayatrilingampalli6@gmail.com'
                },
                { 
                  icon: Phone, 
                  label: 'Phone', 
                  value: '+91 6300824011',
                  href: 'tel:+916300824011'
                },
                { 
                  icon: Linkedin, 
                  label: 'LinkedIn', 
                  value: 'Connect with me',
                  href: 'https://www.linkedin.com/in/lingampalli-gayathri-lakshmi-chandrakala-0186b0320/'
                },
                { 
                  icon: Github, 
                  label: 'GitHub', 
                  value: 'View my code',
                  href: 'https://github.com/gayathri1956'
                }
              ].map((contact, index) => (
                <a 
                  key={index} 
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 border border-gray-800 bg-gradient-to-br from-gray-900/30 to-black hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-white/20 transition-colors duration-300">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">{contact.label}</p>
                    <p className="text-white text-lg">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12 p-6 border border-gray-800 bg-gradient-to-br from-gray-900/20 to-black">
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, collaborative projects, 
                or simply connecting with fellow technology enthusiasts and aspiring civil servants.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-light mb-12 tracking-wide">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-700 pb-4 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 text-lg"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-700 pb-4 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 text-lg"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-transparent border border-gray-700 p-6 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 text-lg resize-none"
                />
              </div>
              
              <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-4 text-lg font-light tracking-wide transition-all duration-300 flex items-center justify-center">
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
