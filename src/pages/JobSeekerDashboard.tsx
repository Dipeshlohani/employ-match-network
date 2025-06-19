
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProfileManagement from '../components/dashboard/ProfileManagement';
import JobSearch from '../components/dashboard/JobSearch';
import SavedJobs from '../components/dashboard/SavedJobs';
import ApplicationTracker from '../components/dashboard/ApplicationTracker';

const JobSeekerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Job Seeker Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your job search and track your applications</p>
        </div>

        <Tabs defaultValue="search" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="search">Job Search</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <JobSearch />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <ProfileManagement />
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <SavedJobs />
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <ApplicationTracker />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default JobSeekerDashboard;
