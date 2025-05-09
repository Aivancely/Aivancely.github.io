import React from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Interface for app data
interface App {
  id: string;
  name: string;
  description: string;
  githubRepo: string;
  tags: string[];
  imageSrc: string;
  liveUrl?: string;
}

// Sample app data
const apps: App[] = [
  {
    id: 'gst-bookmarks',
    name: 'GoSystem  Bookmarks',
    description: 'GoSystem Bookmarks is a Chrome extension that allows you to bookmarks to quickly navigate within GoSystems.',
    githubRepo: 'https://github.com/Aivancely/gst-bookmarks',
    tags: ['GoSystems', 'Chrome Extension', 'Bookmark'],
    imageSrc: './img/apps/gst-bookmarks.png',
  },
  {
    id: 'docai-assistant',
    name: 'DocAI Assistant',
    description: 'An AI-powered document assistant that helps you extract information, summarize content, and answer questions about your documents.',
    githubRepo: 'https://github.com/Aivancely/docai-assistant',
    tags: ['Document', 'AI', 'React', 'NLP'],
    imageSrc: 'https://placehold.co/600x400',
    liveUrl: 'https://docai.aivancely.com',
  },
  {
    id: 'agent-builder',
    name: 'Agent Builder',
    description: 'Build custom AI agents without coding. Connect to various APIs and data sources to create powerful automation workflows.',
    githubRepo: 'https://github.com/Aivancely/agent-builder',
    tags: ['Agent', 'No-code', 'Automation'],
    imageSrc: 'https://placehold.co/600x400',
  },
  {
    id: 'meeting-summarizer',
    name: 'Meeting Summarizer',
    description: 'Automatically generate summaries, action items, and key points from your meeting recordings or transcripts.',
    githubRepo: 'https://github.com/Aivancely/meeting-summarizer',
    tags: ['Meetings', 'Summary', 'ML'],
    imageSrc: 'https://placehold.co/600x400',
  },
];

const AppMarketplace: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">App Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of open-source AI applications and tools designed to help businesses automate workflows and improve productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div key={app.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={app.imageSrc} 
                  alt={app.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = './img/placeholder.jpg';
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={app.githubRepo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </a>
                  
                  {app.liveUrl && (
                    <a 
                      href={app.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppMarketplace; 