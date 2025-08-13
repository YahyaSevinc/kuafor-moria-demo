"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreed: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = 'checked' in target ? target.checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <div 
            className="w-fit mx-auto px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-full text-xs sm:text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
          >
Bize Ulaşın!          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact us</h1>
          <p className="text-gray-600 text-lg">We&apos;re here to help! Share your thoughts or questions with us, and we&apos;ll respond promptly.</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D38DE] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D38DE] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D38DE] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Enter your message"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-purple-600 bg-purple-600 border-purple-600 rounded focus:ring-[#5432CC] focus:ring-2"
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{' '}
                  <span className="text-[#5D38DE] hover:text-[#5432CC] underline cursor-pointer">
                    Terms and Condition
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[#5D38DE] hover:bg-[#5432CC] text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
              >
                Send now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:pl-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/1.png"
                alt="Modern workspace with computer setup"
                className="w-full h-full object-cover min-h-[500px]"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}