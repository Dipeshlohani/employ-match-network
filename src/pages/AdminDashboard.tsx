
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserManagement from '../components/admin/UserManagement';
import JobVerification from '../components/admin/JobVerification';
import Analytics from '../components/admin/Analytics';
import Navigation from '../components/Navigation';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users, job listings, and view analytics</p>
        </div>

        <Tabs defaultValue="user-management" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="user-management">User Management</TabsTrigger>
            <TabsTrigger value="job-verification">Job Verification</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="user-management" className="mt-6">
            <UserManagement />
          </TabsContent>
          
          <TabsContent value="job-verification" className="mt-6">
            <JobVerification />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <Analytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
