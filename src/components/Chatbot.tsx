import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowDown } from 'lucide-react';

// Define message types
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedResponses: Record<string, string> = {
  // Common FAQs about Aivancely services
  "what services do you offer": "Aivancely helps enterprises build agentic AI teams, map workflows, and identify areas for automation. Our services include AI strategy consulting, workflow automation, and custom AI solution development.",
  "how can you help my business": "We can help transform your business by implementing agentic AI solutions that automate repetitive tasks, enhance decision-making, and provide valuable insights from your data.",
  "pricing": "Our pricing varies based on project scope and requirements. Please contact us through the contact form for a personalized quote.",
  "how do i get started": "You can get started by reaching out to us through the contact form at the bottom of this page. We'll schedule a consultation to understand your needs.",
  "what is agentic ai": "Agentic AI refers to AI systems that can act autonomously to accomplish tasks. These systems can make decisions, execute actions, and learn from feedback to improve over time.",
  "contact information": "You can reach us through the contact form on our website or email us directly at info@aivancely.com.",
  "case studies": "Check out our case studies section to see how we've helped other businesses implement AI solutions and achieve success.",
  "location": "We operate remotely and serve clients globally. Our team can work with businesses regardless of their physical location.",
  "experience": "Our team has over a decade of experience in AI and machine learning, having worked with enterprises across various industries including finance, healthcare, retail, and manufacturing.",
  "technologies": "We work with a variety of technologies including large language models, computer vision, natural language processing, and reinforcement learning to build custom AI solutions.",
  "implementation time": "Implementation time varies based on the complexity of the project. Simple automations can be implemented in a few weeks, while more complex systems may take several months.",
  "support": "We provide ongoing support and maintenance for all our AI solutions. Our team is available to address any issues that may arise and to make improvements as needed.",
  "data security": "We take data security seriously and implement robust security measures to protect your data. All our solutions comply with relevant data protection regulations.",
  "integration": "Our solutions can integrate with your existing systems and workflows. We design our AI solutions to work seamlessly with your current technology stack.",
  "privacy policy": "You can view our privacy policy at /#/privacy. Our Android apps are designed with privacy in mind and do not collect any user data.",
  "android apps": "We develop Android applications for entertainment purposes. All our apps are privacy-first and do not collect any user data. You can view our privacy policy for more details.",
  "apps": "Check out our App Marketplace to see our collection of open-source AI applications and tools. We also develop Android apps for entertainment.",
  "hello": "Hello! How can I help you today?",
  "hi": "Hi there! How can I assist you with our AI solutions?",
  "thanks": "You're welcome! Is there anything else I can help you with?",
  "thank you": "You're welcome! Feel free to ask if you have any more questions."
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasNewMessages, setHasNewMessages] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    // Try to load messages from localStorage on component mount
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        // Convert string timestamps back to Date objects
        return parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (error) {
        console.error('Error parsing saved messages:', error);
      }
    }
    
    // Default initial message
    return [
      {
        id: '1',
        text: 'Hello! I\'m the Aivancely assistant. How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      }
    ];
  });
  
  const [inputValue, setInputValue] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);
  
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasNewMessages(false);
      
      // Focus the input when chat opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [messages, isOpen]);
  
  // Set hasNewMessages when chat is closed and a new message arrives
  useEffect(() => {
    if (!isOpen && messages.length > 1 && messages[messages.length - 1].sender === 'bot') {
      setHasNewMessages(true);
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Check for matches in predefined responses
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (normalizedQuery.includes(key)) {
        return value;
      }
    }
    
    // Default response if no match is found
    return "I'm not sure I understand your question. Could you please try asking about our services, pricing, or how we can help your business?";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const clearChat = () => {
    // Keep only the welcome message
    setMessages([
      {
        id: Date.now().toString(),
        text: 'Hello! I\'m the Aivancely assistant. How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors z-50"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6 text-white" />
            {hasNewMessages && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </div>
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col">
          {/* Chat header */}
          <div className="bg-indigo-600 p-4 text-white font-medium flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Aivancely Assistant</span>
            </div>
            <div className="flex items-center">
              <button 
                onClick={clearChat} 
                className="text-white mr-3 text-xs hover:underline"
                title="Clear conversation"
              >
                Clear chat
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg max-w-xs lg:max-w-md ${
                    message.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Scroll to bottom button - appears when not at bottom */}
          <button
            onClick={scrollToBottom}
            className="absolute bottom-20 right-4 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
          
          {/* Input area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className={`p-2 rounded-r-lg ${
                  inputValue.trim() === ''
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 