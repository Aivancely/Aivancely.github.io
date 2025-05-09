import React from 'react';
import { Bot, GitMerge, Workflow, Zap, Users, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Bot className="h-8 w-8 text-primary-600" />,
    title: 'Agentic AI Development',
    description: 'Build powerful AI agents that can handle complex business processes, make decisions, and automate repetitive tasks.',
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary-600" />,
    title: 'Workflow Mapping',
    description: 'Analyze and document your business processes to identify automation opportunities and optimize workflows.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-600" />,
    title: 'Process Automation',
    description: 'Transform manual processes into automated systems that reduce errors, save time, and improve operational efficiency.',
  },
  {
    icon: <GitMerge className="h-8 w-8 text-primary-600" />,
    title: 'System Integration',
    description: 'Connect your AI agents with existing systems and data sources to create a cohesive technological ecosystem.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: 'AI Team Building',
    description: 'Develop specialized AI teams that collaborate with your human workforce to maximize productivity and innovation.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary-600" />,
    title: 'Performance Analytics',
    description: "Implement comprehensive analytics to monitor and improve your AI systems' performance over time.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We provide comprehensive solutions to help your organization leverage the power of agentic AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="bg-primary-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;