import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 -right-24 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-36 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            Making AI Simple for Everyone
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Leverage <span className="text-primary-600">AI</span> to <br />Rise Above the Chaos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline your processes, reduce stress, and stay ahead of the curve—without the overwhelm. Let <span className="font-bold" style={{ color: '#004377' }}>Aivancely</span> be your guide to AI-driven success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-white text-primary-600 rounded-lg font-medium border border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
            >
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/*<div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <p className="text-sm text-gray-500 font-medium">Trusted by industry leaders:</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 text-gray-400 font-bold">COMPANY ONE</div>
              <div className="h-8 text-gray-400 font-bold">COMPANY TWO</div>
              <div className="h-8 text-gray-400 font-bold">COMPANY THREE</div>
              <div className="h-8 text-gray-400 font-bold">COMPANY FOUR</div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;