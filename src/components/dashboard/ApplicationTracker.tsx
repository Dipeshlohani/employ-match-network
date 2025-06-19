
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, MapPin, DollarSign, Eye, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationTracker = () => {
  const [applications, setApplications] = useState([
    {
      id: '1',
      jobTitle: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120,000 - $160,000',
      appliedDate: '2024-01-15',
      status: 'pending',
      notes: 'Completed initial application, waiting for response'
    },
    {
      id: '2',
      jobTitle: 'Frontend Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      salary: '$90,000 - $130,000',
      appliedDate: '2024-01-10',
      status: 'interview',
      notes: 'Phone interview scheduled for next week'
    },
    {
      id: '3',
      jobTitle: 'UI/UX Developer',
      company: 'DesignPro',
      location: 'New York, NY',
      salary: '$80 - $120 /hour',
      appliedDate: '2024-01-08',
      status: 'rejected',
      notes: 'Not selected for this position'
    },
    {
      id: '4',
      jobTitle: 'Full Stack Developer',
      company: 'WebSolutions',
      location: 'Austin, TX',
      salary: '$100,000 - $140,000',
      appliedDate: '2024-01-05',
      status: 'accepted',
      notes: 'Offer received! Starting next month'
    }
  ]);

  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'interview':
        return <Badge className="bg-blue-100 text-blue-800">Interview</Badge>;
      case 'accepted':
        return <Badge className="bg-green-100 text-green-800">Accepted</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const filteredApplications = statusFilter === 'all' 
    ? applications 
    : applications.filter(app => app.status === statusFilter);

  const getStatusCount = (status: string) => {
    return applications.filter(app => app.status === status).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Application Tracker</h2>
          <p className="text-gray-600">Track the status of your job applications</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="interview">Interview</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold">{getStatusCount('pending')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Interview</p>
                <p className="text-2xl font-bold">{getStatusCount('interview')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-green-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Accepted</p>
                <p className="text-2xl font-bold">{getStatusCount('accepted')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-red-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold">{getStatusCount('rejected')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            Applications ({filteredApplications.length})
          </h3>
        </div>

        {filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600 mb-4">
                {statusFilter === 'all' 
                  ? "You haven't applied to any jobs yet"
                  : `No applications with status: ${statusFilter}`
                }
              </p>
              <Link to="/dashboard">
                <Button>Start Applying</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredApplications.map((application) => (
              <Card key={application.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Link to={`/job/${application.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            {application.jobTitle}
                          </h3>
                        </Link>
                        {getStatusBadge(application.status)}
                      </div>
                      
                      <p className="text-gray-600 font-medium mb-3">{application.company}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{application.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{application.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      {application.notes && (
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                          <strong>Notes:</strong> {application.notes}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <Link to={`/job/${application.id}`}>
                        <Button size="sm" variant="outline" className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          View Job
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTracker;
