
import React from 'react';
import { Briefcase, Mail, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">JobPortal</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connect talented professionals with amazing opportunities. 
              Your career journey starts here.
            </p>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Salary Guide</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Resumes</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Recruiting Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
