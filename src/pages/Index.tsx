
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrendingJobs from '../components/TrendingJobs';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Dashboard Navigation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              Access the features designed for your role
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <User className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Job Seeker Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Search for jobs, manage applications, and track your progress
                </p>
                <Link to="/job-seeker-dashboard">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Access Job Seeker Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Building className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Employer Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Post jobs, review applications, and manage your hiring process
                </p>
                <Link to="/employer-dashboard">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Access Employer Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <TrendingJobs />
      <Footer />
    </div>
  );
};

export default Index;
