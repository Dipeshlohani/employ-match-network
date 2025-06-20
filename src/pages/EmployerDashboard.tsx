
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobListings from '../components/employer/JobListings';
import Applications from '../components/employer/Applications';
import Navigation from '../components/Navigation';

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your job postings and applications</p>
        </div>

        <Tabs defaultValue="job-listings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="job-listings">Job Listings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="job-listings" className="mt-6">
            <JobListings />
          </TabsContent>
          
          <TabsContent value="applications" className="mt-6">
            <Applications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployerDashboard;
