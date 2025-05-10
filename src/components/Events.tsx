import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, User, Mic, ArrowRight } from 'lucide-react';

// Define speaking events
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  eventUrl?: string;
  imageUrl: string;
  topics: string[];
}

const speakingEvents: Event[] = [
  {
    id: 1,
    title: 'AI Automation Summit 2023',
    date: 'November 15-17, 2023',
    location: 'San Francisco, CA',
    type: 'Conference',
    description: 'Rich Marlatt will deliver a keynote on "Building Agentic AI Teams for Enterprise" at this premier industry event. Learn how leading companies are implementing AI agents to transform their operations and the key considerations for building effective human-AI collaboration.',
    eventUrl: 'https://example.com/ai-summit',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    topics: [
      'Agentic AI implementation strategies',
      'Human-AI collaboration frameworks',
      'Enterprise adoption roadmaps',
      'Case studies of successful implementations'
    ]
  },
  {
    id: 2,
    title: 'Future of Work Conference',
    date: 'January 22-24, 2024',
    location: 'Boston, MA',
    type: 'Workshop',
    description: 'Join Rich Marlatt for an interactive workshop on identifying automation opportunities in your organization and implementing agentic AI solutions. This hands-on session will guide participants through the process of mapping workflows, identifying AI-ready processes, and creating a practical implementation plan.',
    eventUrl: 'https://example.com/future-work',
    imageUrl: 'https://images.pexels.com/photos/2774555/pexels-photo-2774555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    topics: [
      'Workflow mapping techniques',
      'Process optimization with AI',
      'ROI calculation for AI initiatives',
      'Implementation planning'
    ]
  },
  {
    id: 4,
    title: 'Corporate AI Strategy Workshop',
    date: 'Available for booking',
    location: 'Your company',
    type: 'Private Event',
    description: 'Rich Marlatt offers private workshops for executive teams looking to develop or refine their AI strategy. This customized session addresses your organization\'s specific challenges and opportunities, helping leadership teams align on AI vision, prioritize initiatives, and develop a strategic roadmap.',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    topics: [
      'AI opportunity assessment',
      'Organizational readiness',
      'Strategic roadmap development',
      'Resource planning and governance'
    ]
  }
];

// Speaking topics
const speakingTopics = [
  {
    title: 'Agentic AI Implementation',
    description: 'How to successfully integrate autonomous AI agents into your business workflows.'
  },
  {
    title: 'The Future of Work with AI',
    description: 'Exploring how AI is reshaping the workplace and how organizations can adapt.'
  },
  {
    title: 'Measuring ROI on AI Investments',
    description: 'Frameworks for evaluating and maximizing returns on AI automation initiatives.'
  },
  {
    title: 'Building AI-Ready Organizations',
    description: 'Preparing your teams, processes, and culture for successful AI adoption.'
  },
];

// Helper function to handle scrolling to sections
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Events: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number>(1);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Speaking</h2>
          <p className="text-xl text-gray-600">
            Join us at upcoming events or book our founder Rich Marlatt for your next conference or corporate event.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Events navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-3">
                {speakingEvents.map((event) => (
                  <div 
                    key={event.id}
                    onClick={() => setActiveEvent(event.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeEvent === event.id 
                        ? 'bg-indigo-50 border-l-4 border-indigo-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <h4 className={`font-medium mb-1 ${
                      activeEvent === event.id ? 'text-indigo-700' : 'text-gray-900'
                    }`}>
                      {event.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event details */}
          <div className="lg:w-2/3">
            {speakingEvents.filter(event => event.id === activeEvent).map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Topics:</h4>
                  <ul className="space-y-2 mb-8">
                    {event.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    {event.eventUrl ? (
                      <a 
                        href={event.eventUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
                      >
                        Event details <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    ) : (
                      <div></div>
                    )}
                    
                    <a 
                      href="/#contact" 
                      onClick={(e) => scrollToSection(e, 'contact')}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200"
                    >
                      Book for your event <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Engagement CTA */}
        <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-full mr-4">
                  <Mic className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold">Book Rich Marlatt</h3>
              </div>
              
              <p className="mb-6 text-indigo-100">
                Rich Marlatt is available for speaking engagements at conferences, corporate events, and workshops.
                His engaging presentations combine practical insights with forward-thinking vision on AI, automation,
                and the future of work.
              </p>
              
              <div className="flex items-start mb-8">
                <User className="h-5 w-5 text-indigo-200 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium mb-1">About the Speaker</h4>
                  <p className="text-indigo-100">
                    Rich Marlatt is the founder of Aivancely and has over a decade of experience in AI and automation systems. 
                    His background spans enterprise consulting, product development, and AI research.
                  </p>
                </div>
              </div>
              
              <a 
                href="/#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300"
              >
                Request Speaking Information
              </a>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Popular Topics</h4>
              <div className="space-y-4">
                {speakingTopics.map((topic, index) => (
                  <div key={index} className="bg-indigo-700 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2">{topic.title}</h5>
                    <p className="text-indigo-100 text-sm">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events; 