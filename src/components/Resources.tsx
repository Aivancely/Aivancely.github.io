import React from 'react';
import { ArrowRight } from 'lucide-react';

const resources = [
  {
    title: 'The Future of Agentic AI in Enterprise',
    excerpt: 'Explore how intelligent agents are transforming business operations across industries.',
    category: 'AI Trends',
    author: 'Alex Morgan',
    date: 'June 10, 2025',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Workflow Mapping for AI Implementation',
    excerpt: 'Learn the methodologies for identifying and preparing workflows for AI enhancement.',
    category: 'Best Practices',
    author: 'Sarah Williams',
    date: 'May 28, 2025',
    imageUrl: 'https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Building Collaborative Human-AI Teams',
    excerpt: 'Strategies for creating effective collaboration between human workers and AI agents.',
    category: 'Workplace Evolution',
    author: 'Jamie Chen',
    date: 'May 15, 2025',
    imageUrl: 'https://images.pexels.com/photos/7054530/pexels-photo-7054530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const whitepapers = [
  {
    title: 'Enterprise AI Adoption Framework',
    description: 'A comprehensive guide to implementing agentic AI across business functions.',
  },
  {
    title: 'ROI of AI Automation: Measuring Business Impact',
    description: 'Methods for calculating and maximizing return on AI investments.',
  },
  {
    title: 'Security Best Practices for AI Systems',
    description: 'Ensuring your AI implementations remain secure and compliant.',
  }
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-xl text-gray-600">
            Insights and expertise to guide your AI transformation journey.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((post, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <a 
                      href="#" 
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors duration-200"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Whitepapers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{whitepaper.title}</h4>
                <p className="text-gray-600 mb-6">{whitepaper.description}</p>
                <a 
                  href="#" 
                  className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition-colors duration-300 inline-block"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;