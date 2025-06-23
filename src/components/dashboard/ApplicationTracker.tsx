
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, DollarSign, Clock, Building, Eye, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationTracker = () => {
  const [applications] = useState([
    {
      id: '1',
      jobId: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120,000 - $160,000',
      appliedDate: '2024-01-10',
      status: 'pending',
      lastUpdate: '2024-01-10'
    },
    {
      id: '2',
      jobId: '2',
      title: 'Frontend Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      salary: '$90,000 - $130,000',
      appliedDate: '2024-01-08',
      status: 'interview',
      lastUpdate: '2024-01-12',
      interviewDate: '2024-01-20'
    },
    {
      id: '3',
      jobId: '3',
      title: 'UI/UX Developer',
      company: 'DesignPro',
      location: 'New York, NY',
      salary: '$80 - $120 /hour',
      appliedDate: '2024-01-05',
      status: 'rejected',
      lastUpdate: '2024-01-08'
    },
    {
      id: '4',
      jobId: '4',
      title: 'Full Stack Developer',
      company: 'Enterprise Solutions',
      location: 'Austin, TX',
      salary: '$110,000 - $140,000',
      appliedDate: '2024-01-03',
      status: 'accepted',
      lastUpdate: '2024-01-15'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'interview': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Under Review';
      case 'interview': return 'Interview Scheduled';
      case 'accepted': return 'Offer Received';
      case 'rejected': return 'Not Selected';
      default: return status;
    }
  };

  const filterApplications = (status?: string) => {
    if (!status) return applications;
    return applications.filter(app => app.status === status);
  };

  const ApplicationCard = ({ application }: { application: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Link to={`/job/${application.jobId}`}>
                <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                  {application.title}
                </h3>
              </Link>
              <Badge className={getStatusColor(application.status)}>
                {getStatusText(application.status)}
              </Badge>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 mb-2">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                {application.company}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {application.location}
              </div>
            </div>
            <div className="flex items-center text-green-600 font-semibold mb-3">
              <DollarSign className="h-4 w-4 mr-1" />
              {application.salary}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>Applied on {new Date(application.appliedDate).toLocaleDateString()}</span>
          <span>Last update: {new Date(application.lastUpdate).toLocaleDateString()}</span>
        </div>

        {application.status === 'interview' && application.interviewDate && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-2 text-blue-800">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">Interview scheduled for {new Date(application.interviewDate).toLocaleDateString()}</span>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <Link to={`/job/${application.jobId}`}>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Job
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Application Tracker</h2>
        <p className="text-gray-600">{applications.length} total applications</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({filterApplications('pending').length})</TabsTrigger>
          <TabsTrigger value="interview">Interview ({filterApplications('interview').length})</TabsTrigger>
          <TabsTrigger value="accepted">Accepted ({filterApplications('accepted').length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({filterApplications('rejected').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {filterApplications('pending').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="interview" className="space-y-4 mt-6">
          {filterApplications('interview').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4 mt-6">
          {filterApplications('accepted').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filterApplications('rejected').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>
      </Tabs>

      {applications.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
            <p className="text-gray-500 mb-4">Start applying to jobs to track your application status here.</p>
            <Link to="/find-jobs">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Find Jobs
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ApplicationTracker;
