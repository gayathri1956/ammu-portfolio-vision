
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-black to-gray-900 text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
          Get In <span className="text-emerald-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: Mail, text: 'gayathri.chandrakala@email.com', href: 'mailto:gayathri.chandrakala@email.com' },
                { icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXX' },
                { icon: Linkedin, text: 'LinkedIn Profile', href: '#' },
                { icon: Github, text: 'GitHub Profile', href: '#' }
              ].map(({ icon: Icon, text, href }, index) => (
                <a key={index} href={href} className="flex items-center group hover:text-emerald-400 transition-colors duration-300">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-400/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">{text}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-semibold mb-8 text-emerald-400">Send a Message</h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-all duration-300 hover:border-gray-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none transition-all duration-300 hover:border-gray-600 resize-none"
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
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
