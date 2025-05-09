import React from 'react';
import { Shield, Lightbulb, Users, Award } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="h-6 w-6 text-primary-600" />,
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches to deliver cutting-edge AI solutions.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-600" />,
    title: 'Security',
    description: 'We prioritize data security and privacy in all of our AI implementations and integrations.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary-600" />,
    title: 'Collaboration',
    description: 'We work closely with your team to ensure our solutions align perfectly with your goals.'
  },
  {
    icon: <Award className="h-6 w-6 text-primary-600" />,
    title: 'Excellence',
    description: "We're committed to delivering the highest quality AI solutions that exceed expectations."
  }
];

const team = [
  {
    name: 'Rich Marlatt',
    role: 'Founder & AI Strategist',
    imageUrl: '/img/RichMarlatt.jpg'
  },
  /*{
    name: 'Jamie Chen',
    role: 'CTO & Lead Developer',
    imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Sarah Williams',
    role: 'Head of AI Research',
    imageUrl: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Michael Lee',
    role: 'Solutions Architect',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }*/
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About <span style={{ color: '#004377' }}>Aivancely</span></h2>
          <p className="text-xl text-gray-600">
            We're a team of AI specialists, business strategists, and engineers, dedicated to helping businesses harness the power of AI and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At <span className="font-bold" style={{ color: '#004377' }}>Aivancely</span>, our mission is to empower business leaders to unlock greater potential through the power of AI and automation. We help you see what's possible, envision new opportunities, and break through barriers—letting technology handle the routine tasks so you can focus on what matters most: delivering value to your clients.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Our goal is to ease the burden of increasing workloads and talent shortages using AI that’s simple, secure, and built to support—not replace—you. Our reliable solutions let you offload routine tasks with confidence, knowing your expertise remains at the core, so you can focus on serving your clients better.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, we've quickly established ourselves as leaders in the professional services AI space, helping dozens of companies across industries implement successful AI transformation initiatives.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative group">
                  <div className="overflow-hidden rounded-xl aspect-square">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <div className="flex justify-center space-x-3">
                        {/* Social icons would go here */}
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;