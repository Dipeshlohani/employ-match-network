
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, User, LogIn, UserPlus, Briefcase, Building } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JobPortal
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Find Jobs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Companies</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">For Employers</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:flex items-center space-x-2">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
