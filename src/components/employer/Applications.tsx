
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, User, Mail, Phone, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Applications = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState('all');
  
  const [applications, setApplications] = useState([
    {
      id: '1',
      jobId: '1',
      jobTitle: 'Senior React Developer',
      applicantName: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      phone: '+1 (555) 123-4567',
      status: 'pending',
      appliedDate: '2024-01-15',
      experience: '5+ years',
      resumeUrl: '#',
      coverLetter: 'I am excited to apply for this position...',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: '2',
      jobId: '1',
      jobTitle: 'Senior React Developer',
      applicantName: 'Bob Smith',
      email: 'bob.smith@email.com',
      phone: '+1 (555) 987-6543',
      status: 'shortlisted',
      appliedDate: '2024-01-14',
      experience: '7+ years',
      resumeUrl: '#',
      coverLetter: 'With over 7 years of experience...',
      skills: ['React', 'Vue.js', 'Python']
    },
    {
      id: '3',
      jobId: '2',
      jobTitle: 'Frontend Engineer',
      applicantName: 'Carol Davis',
      email: 'carol.davis@email.com',
      phone: '+1 (555) 456-7890',
      status: 'rejected',
      appliedDate: '2024-01-13',
      experience: '3+ years',
      resumeUrl: '#',
      coverLetter: 'I would love to join your team...',
      skills: ['JavaScript', 'CSS', 'React']
    },
    {
      id: '4',
      jobId: '1',
      jobTitle: 'Senior React Developer',
      applicantName: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+1 (555) 321-0987',
      status: 'interview',
      appliedDate: '2024-01-12',
      experience: '6+ years',
      resumeUrl: '#',
      coverLetter: 'I am passionate about frontend development...',
      skills: ['React', 'Angular', 'TypeScript']
    }
  ]);

  const jobs = [
    { id: '1', title: 'Senior React Developer' },
    { id: '2', title: 'Frontend Engineer' },
    { id: '3', title: 'UI/UX Developer' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted': return 'bg-blue-100 text-blue-800';
      case 'interview': return 'bg-purple-100 text-purple-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = (applicationId: string, newStatus: string) => {
    setApplications(prev => prev.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    toast({
      title: "Status Updated",
      description: `Application status changed to ${newStatus}.`,
    });
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJob = selectedJob === 'all' || app.jobId === selectedJob;
    return matchesSearch && matchesJob;
  });

  const filterByStatus = (status?: string) => {
    if (!status) return filteredApplications;
    return filteredApplications.filter(app => app.status === status);
  };

  const ApplicationCard = ({ application }: { application: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold">{application.applicantName}</h3>
              <Badge className={getStatusColor(application.status)}>
                {application.status}
              </Badge>
            </div>
            <p className="text-blue-600 font-medium mb-1">{application.jobTitle}</p>
            <div className="flex items-center space-x-4 text-gray-600 text-sm mb-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                {application.email}
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                {application.phone}
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Badge variant="outline">{application.experience}</Badge>
              {application.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{application.coverLetter}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Applied on {new Date(application.appliedDate).toLocaleDateString()}
          </span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View Resume
            </Button>
            {application.status === 'pending' && (
              <>
                <Button
                  size="sm"
                  onClick={() => handleStatusChange(application.id, 'shortlisted')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Shortlist
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStatusChange(application.id, 'rejected')}
                  className="text-red-600 hover:text-red-700"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </>
            )}
            {application.status === 'shortlisted' && (
              <Button
                size="sm"
                onClick={() => handleStatusChange(application.id, 'interview')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Clock className="h-4 w-4 mr-2" />
                Schedule Interview
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Applications</h2>
          <p className="text-gray-600">{applications.length} total applications</p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search applicants or jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedJob} onValueChange={setSelectedJob}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by job" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Jobs</SelectItem>
            {jobs.map((job) => (
              <SelectItem key={job.id} value={job.id}>
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All ({filteredApplications.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({filterByStatus('pending').length})</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted ({filterByStatus('shortlisted').length})</TabsTrigger>
          <TabsTrigger value="interview">Interview ({filterByStatus('interview').length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({filterByStatus('rejected').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {filteredApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {filterByStatus('pending').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="shortlisted" className="space-y-4 mt-6">
          {filterByStatus('shortlisted').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="interview" className="space-y-4 mt-6">
          {filterByStatus('interview').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filterByStatus('rejected').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>
      </Tabs>

      {filteredApplications.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-500">
              {searchTerm || selectedJob !== 'all' 
                ? 'Try adjusting your search criteria.' 
                : 'Applications will appear here when candidates apply to your jobs.'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Applications;
