
import { Code, Brain, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up">
          My <span className="text-emerald-400">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: 'Web Development',
              description: 'Modern, responsive websites and web applications built with the latest technologies.'
            },
            {
              icon: Brain,
              title: 'AI/ML Solutions',
              description: 'Custom AI and machine learning solutions tailored to specific business needs.'
            },
            {
              icon: Target,
              title: 'Consultation',
              description: 'Technical consultation on AI implementation and digital transformation strategies.'
            }
          ].map(({ icon: Icon, title, description }, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-8 text-center hover:scale-105 hover:border-emerald-400/50 transition-all duration-500 group animate-fade-in-up">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-400/30 transition-colors duration-300">
                <Icon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
