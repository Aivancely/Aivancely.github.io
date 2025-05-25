import React from 'react';
import { ArrowLeft, Shield, Smartphone, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              For Aivancely Android Applications
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Privacy First Approach</h3>
                  <p className="text-green-700">
                    We are committed to protecting your privacy. Our Android applications do not collect, store, 
                    or transmit any personal data or user information.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Smartphone className="h-6 w-6 mr-2 text-indigo-600" />
                About Our Android Apps
              </h2>
              <p className="text-gray-600 mb-4">
                Aivancely develops and publishes Android applications that are designed solely for entertainment purposes. 
                These apps are created to provide users with enjoyable experiences while maintaining the highest standards 
                of privacy and data protection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-indigo-600" />
                Information We Do NOT Collect
              </h2>
              <p className="text-gray-600 mb-4">
                Our Android applications are designed with privacy in mind. We do not collect any of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Location data or GPS coordinates</li>
                <li>Usage analytics or behavioral data</li>
                <li>Contact lists or address books</li>
                <li>Photos, videos, or other media files</li>
                <li>Network information or browsing history</li>
                <li>Any other personal or sensitive information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Processing</h2>
              <p className="text-gray-600 mb-4">
                Since our applications do not collect any user data, there is no data to store, process, or transmit. 
                All app functionality operates locally on your device without any external data transmission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Our Android applications may use standard Android system services for basic functionality (such as 
                displaying content on screen), but these do not involve any data collection or transmission to third parties.
              </p>
              <p className="text-gray-600">
                We do not integrate with any third-party analytics services, advertising networks, or data collection platforms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Permissions</h2>
              <p className="text-gray-600 mb-4">
                Our applications request only the minimum permissions necessary for basic functionality. Any permissions 
                requested are used solely for the app's intended entertainment features and not for data collection purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our applications are suitable for all ages. Since we do not collect any personal information, 
                there are no special considerations regarding children's data under COPPA (Children's Online Privacy Protection Act) 
                or similar regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                an updated revision date. Since our apps do not collect data, changes are typically minimal and 
                relate to clarifications or additional information about our privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our Android applications, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Company:</strong> Aivancely</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@aivancely.com</p>
                <p className="text-gray-700"><strong>Website:</strong> https://aivancely.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h2>
              <p className="text-gray-600 mb-4">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Google Play Store privacy requirements</li>
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Children's Online Privacy Protection Act (COPPA)</li>
                <li>Other applicable privacy laws and regulations</li>
              </ul>
            </section>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">Summary</h3>
              <p className="text-indigo-700">
                Our Android applications are entertainment-focused and privacy-first. We do not collect, store, 
                or share any user data. Your privacy is completely protected when using our apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 