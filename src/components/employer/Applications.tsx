
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Phone, Calendar, Eye, UserCheck, Send } from 'lucide-react';

const Applications = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [jobFilter, setJobFilter] = useState('all');
  const [applications, setApplications] = useState([
    {
      id: '1',
      candidateName: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      jobTitle: 'Senior React Developer',
      appliedDate: '2024-01-20',
      status: 'pending',
      experience: '5 years',
      resume: 'john_smith_resume.pdf',
      coverLetter: 'Looking forward to contributing to your team...'
    },
    {
      id: '2',
      candidateName: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 987-6543',
      jobTitle: 'Frontend Engineer',
      appliedDate: '2024-01-18',
      status: 'shortlisted',
      experience: '3 years',
      resume: 'sarah_johnson_resume.pdf',
      coverLetter: 'Excited about the frontend position...'
    },
    {
      id: '3',
      candidateName: 'Mike Chen',
      email: 'mike.chen@email.com',
      phone: '+1 (555) 456-7890',
      jobTitle: 'UI/UX Designer',
      appliedDate: '2024-01-15',
      status: 'interview_scheduled',
      experience: '4 years',
      resume: 'mike_chen_resume.pdf',
      coverLetter: 'My design philosophy aligns with your company...'
    },
    {
      id: '4',
      candidateName: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+1 (555) 321-0987',
      jobTitle: 'Senior React Developer',
      appliedDate: '2024-01-12',
      status: 'rejected',
      experience: '2 years',
      resume: 'emily_davis_resume.pdf',
      coverLetter: 'I am very interested in this opportunity...'
    }
  ]);

  const jobs = [...new Set(applications.map(app => app.jobTitle))];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'shortlisted':
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;
      case 'interview_scheduled':
        return <Badge className="bg-green-100 text-green-800">Interview Scheduled</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case 'hired':
        return <Badge className="bg-purple-100 text-purple-800">Hired</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const handleShortlist = (applicationId) => {
    setApplications(applications.map(app => 
      app.id === applicationId 
        ? { ...app, status: 'shortlisted' }
        : app
    ));
  };

  const handleScheduleInterview = (applicationId) => {
    setApplications(applications.map(app => 
      app.id === applicationId 
        ? { ...app, status: 'interview_scheduled' }
        : app
    ));
  };

  const handleReject = (applicationId) => {
    setApplications(applications.map(app => 
      app.id === applicationId 
        ? { ...app, status: 'rejected' }
        : app
    ));
  };

  const filteredApplications = applications.filter(app => {
    const statusMatch = statusFilter === 'all' || app.status === statusFilter;
    const jobMatch = jobFilter === 'all' || app.jobTitle === jobFilter;
    return statusMatch && jobMatch;
  });

  const getStatusCount = (status) => {
    return applications.filter(app => app.status === status).length;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Applications</h2>
          <p className="text-gray-600">Review and manage candidate applications</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={jobFilter} onValueChange={setJobFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by job" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              {jobs.map(job => (
                <SelectItem key={job} value={job}>{job}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="interview_scheduled">Interview Scheduled</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="hired">Hired</SelectItem>
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
                <p className="text-sm font-medium text-gray-600">Shortlisted</p>
                <p className="text-2xl font-bold">{getStatusCount('shortlisted')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-green-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Interviews</p>
                <p className="text-2xl font-bold">{getStatusCount('interview_scheduled')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-purple-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold">{applications.length}</p>
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
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-600">
                {statusFilter === 'all' && jobFilter === 'all'
                  ? "No applications received yet"
                  : "No applications match your current filters"
                }
              </p>
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
                        <h3 className="text-xl font-semibold text-gray-900">
                          {application.candidateName}
                        </h3>
                        {getStatusBadge(application.status)}
                      </div>
                      
                      <p className="text-gray-600 font-medium mb-3">{application.jobTitle}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-4 w-4" />
                          <span>{application.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-4 w-4" />
                          <span>{application.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{application.experience} experience</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg mb-4">
                        <strong>Cover Letter:</strong> {application.coverLetter}
                      </p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Resume
                      </Button>
                      
                      {application.status === 'pending' && (
                        <>
                          <Button 
                            size="sm" 
                            onClick={() => handleShortlist(application.id)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <UserCheck className="h-4 w-4 mr-2" />
                            Shortlist
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleReject(application.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      
                      {application.status === 'shortlisted' && (
                        <Button 
                          size="sm" 
                          onClick={() => handleScheduleInterview(application.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Schedule Interview
                        </Button>
                      )}
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

export default Applications;
