import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50/30 to-blue-100/20 dark:from-gray-900/50 dark:to-gray-800/40 transition-colors duration-500">

      {/* HEADER */}
      <div className="px-6 md:px-10 lg:px-16 pt-20 md:pt-24 max-w-5xl mx-auto text-center flex-shrink-0">
        <h1 className="font-serif text-3xl md:text-4xl font-black leading-tight text-blue-800 dark:text-white">
          Get in <em className="italic text-blue-400">Touch.</em>
        </h1>
        <p className="text-sm md:text-sm font-light text-blue-900/80 dark:text-gray-300 max-w-2xl mx-auto mt-2 leading-snug">
          Have a question or want to collaborate? Fill out the form or reach out via email.
        </p>
      </div>

      {/* CONTACT BODY */}
      <div className="flex-1 max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-12 flex flex-col lg:flex-row gap-6 lg:gap-8">

        {/* CONTACT FORM */}
        <div className="lg:w-3/5 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20 dark:border-gray-400/20 shadow-md flex flex-col">
          <h2 className="font-serif text-xl font-bold text-blue-900 dark:text-white mb-4">Send a Message</h2>
          <form className="space-y-3 flex-1 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-400/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-400/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm" 
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-400/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm" 
            />
            <textarea 
              placeholder="Your Message" 
              rows="3" 
              className="w-full px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-white/20 dark:border-gray-400/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-700 dark:placeholder:text-gray-300 text-sm"
            ></textarea>
            <button 
              type="submit" 
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-400/60 hover:bg-blue-400/80 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-400/20"
            >
              Send Message <FaPaperPlane size={14} />
            </button>
          </form>
        </div>

        {/* CONTACT INFO + MAP */}
        <div className="lg:w-2/5 flex flex-col gap-6">

          {/* CONTACT INFO */}
          <div className="bg-white/25 dark:bg-gray-800/25 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/20 dark:border-gray-400/20 shadow-md flex-shrink-0">
            <h3 className="font-serif text-lg font-bold text-blue-900 dark:text-white mb-3">Contact Info</h3>
            <div className="space-y-3 text-sm">
              {[
                { icon: FaMapMarkerAlt, text: '123 Tech Lane, San Francisco, CA' },
                { icon: FaPhoneAlt, text: '+1 (555) 123-4567' },
                { icon: FaEnvelope, text: 'hello@devportfolio.com' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-blue-900/80 dark:text-gray-300">
                  <div className="p-1.5 bg-white/50 dark:bg-gray-700/50 rounded-full text-blue-400 backdrop-blur-sm">
                    <item.icon size={16} />
                  </div>
                  <span className="font-light text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden border border-white/20 dark:border-gray-400/20 shadow-md flex-1 min-h-[200px] lg:min-h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864700516763!2d-122.4194154846817!3d37.77492957975918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c148e69d7%3A0x6b64b1f4c718c02f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}
