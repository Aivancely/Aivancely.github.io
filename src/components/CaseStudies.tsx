import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  results: string[];
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Automating Customer Support with AI Agents',
    client: 'Global E-commerce Company',
    category: 'Customer Service',
    description: 'Implemented an agentic AI system that handles 75% of customer inquiries automatically, routing complex issues to human agents with full context.',
    results: [
      '82% reduction in average response time',
      '63% decrease in support tickets requiring human intervention',
      '$2.4M annual cost savings',
      'Customer satisfaction increased by 28%'
    ],
    imageUrl: '/img/pexels-divinetechygirl-1181533.jpg'
  },
  {
    id: 2,
    title: 'Intelligent Document Processing System',
    client: 'Accounting Firm',
    category: 'Document Management',
    description: 'Created an Intelligent Document Processing System that reviews, categorizes, and extracts key information from tax documents.',
    results: [
      'Document processing time reduced by 76%',
      'Accuracy increased to 98.7%',
      'Capacity increased by 35%'
    ],
    imageUrl: '/img/IDP-s.png'
  },
  {
    id: 3,
    title: 'AI-Powered Supply Chain Optimization',
    client: 'Manufacturing Enterprise',
    category: 'Supply Chain',
    description: 'Developed an intelligent system that predicts inventory needs, optimizes ordering, and adapts to supply chain disruptions in real-time.',
    results: [
      'Inventory carrying costs reduced by 31%',
      'Stockout incidents decreased by 64%',
      'Order fulfillment speed improved by 42%',
      '$3.7M annual operational savings'
    ],
    imageUrl: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CaseStudies: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<number>(1);

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600">
            See how we've helped organizations transform their operations with agentic AI solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Case study navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-3">
                {caseStudies.map((study) => (
                  <div 
                    key={study.id}
                    onClick={() => setActiveStudy(study.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeStudy === study.id 
                        ? 'bg-primary-50 border-l-4 border-primary-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <h4 className={`font-medium mb-1 ${
                      activeStudy === study.id ? 'text-primary-700' : 'text-gray-900'
                    }`}>
                      {study.title}
                    </h4>
                    <p className="text-sm text-gray-500">{study.client}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case study details */}
          <div className="lg:w-2/3">
            {caseStudies.filter(study => study.id === activeStudy).map((study) => (
              <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-2 mb-8">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
                  >
                    Discuss a similar project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;