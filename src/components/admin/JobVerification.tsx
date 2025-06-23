
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, CheckCircle, XCircle, Clock, Flag, Building, MapPin, DollarSign } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const JobVerification = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      employer: 'jane.smith@techcorp.com',
      location: 'San Francisco, CA',
      salary: '$120,000 - $160,000',
      type: 'Full-time',
      status: 'pending',
      submittedDate: '2024-01-18',
      description: 'We are looking for a passionate Senior React Developer to join our dynamic team and build cutting-edge web applications.',
      requirements: 'Experience with React, TypeScript, Node.js, and modern development practices.',
      flagged: false,
      flagReason: ''
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      company: 'StartupXYZ',
      employer: 'hiring@startupxyz.com',
      location: 'Remote',
      salary: '$90,000 - $130,000',
      type: 'Full-time',
      status: 'approved',
      submittedDate: '2024-01-15',
      approvedDate: '2024-01-16',
      description: 'Join our fast-growing startup as a Frontend Engineer and help build amazing user experiences.',
      requirements: 'Strong JavaScript skills, experience with modern frameworks.',
      flagged: false,
      flagReason: ''
    },
    {
      id: '3',
      title: 'Data Entry Specialist - Work from Home',
      company: 'QuickCash Solutions',
      employer: 'jobs@quickcash.fake',
      location: 'Remote',
      salary: '$5,000 - $8,000',
      type: 'Part-time',
      status: 'flagged',
      submittedDate: '2024-01-17',
      description: 'Easy work from home opportunity! Make $5000-8000 per week doing simple data entry tasks.',
      requirements: 'No experience required. Just need a computer and internet.',
      flagged: true,
      flagReason: 'Suspicious salary range and job description. Potential scam.'
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      company: 'DesignPro',
      employer: 'hr@designpro.com',
      location: 'New York, NY',
      salary: '$80,000 - $100,000',
      type: 'Full-time',
      status: 'rejected',
      submittedDate: '2024-01-14',
      rejectedDate: '2024-01-16',
      rejectionReason: 'Job description was too vague and company information could not be verified.',
      description: 'Looking for a designer to create awesome designs.',
      requirements: 'Design experience required.',
      flagged: false,
      flagReason: ''
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'flagged': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleJobAction = (jobId: string, action: string, reason?: string) => {
    setJobs(prev => prev.map(job => {
      if (job.id === jobId) {
        const updatedJob = { ...job, status: action };
        if (action === 'approved') {
          updatedJob.approvedDate = new Date().toISOString().split('T')[0];
        } else if (action === 'rejected') {
          updatedJob.rejectedDate = new Date().toISOString().split('T')[0];
          updatedJob.rejectionReason = reason || '';
        }
        return updatedJob;
      }
      return job;
    }));
    
    toast({
      title: "Job Status Updated",
      description: `Job has been ${action}.`,
    });
    setSelectedJob(null);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.employer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterByStatus = (status?: string) => {
    if (!status) return filteredJobs;
    return filteredJobs.filter(job => job.status === status);
  };

  const JobCard = ({ job }: { job: any }) => (
    <Card className={`hover:shadow-md transition-shadow cursor-pointer ${job.flagged ? 'border-orange-200 bg-orange-50' : ''}`}>
      <CardContent className="p-6" onClick={() => setSelectedJob(job)}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <Badge className={getStatusColor(job.status)}>
                {job.status}
              </Badge>
              {job.flagged && (
                <Flag className="h-4 w-4 text-orange-500" />
              )}
            </div>
            <div className="flex items-center space-x-4 text-gray-600 text-sm mb-2">
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1" />
                {job.company}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                {job.salary}
              </div>
            </div>
            <p className="text-sm text-gray-500">By: {job.employer}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Submitted: {new Date(job.submittedDate).toLocaleDateString()}
          </span>
          {job.status === 'pending' && (
            <div className="flex space-x-2">
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleJobAction(job.id, 'approved');
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Approve
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job);
                }}
                className="text-red-600 hover:text-red-700"
              >
                <XCircle className="h-4 w-4 mr-1" />
                Reject
              </Button>
            </div>
          )}
        </div>

        {job.flagged && job.flagReason && (
          <div className="mt-3 p-3 bg-orange-100 border border-orange-200 rounded-md">
            <p className="text-sm text-orange-800">
              <strong>Flagged:</strong> {job.flagReason}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const JobDetailModal = ({ job }: { job: any }) => {
    const [rejectionReason, setRejectionReason] = useState('');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <Button variant="ghost" onClick={() => setSelectedJob(null)}>
                ×
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Company</label>
                  <p>{job.company}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Employer</label>
                  <p>{job.employer}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Location</label>
                  <p>{job.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Salary</label>
                  <p>{job.salary}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Description</label>
                <p className="mt-1">{job.description}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Requirements</label>
                <p className="mt-1">{job.requirements}</p>
              </div>

              {job.status === 'pending' && (
                <div>
                  <label className="text-sm font-medium text-gray-600">Rejection Reason (if rejecting)</label>
                  <Textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Provide a reason for rejection..."
                    rows={3}
                  />
                </div>
              )}

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
                {job.status === 'pending' && (
                  <>
                    <Button
                      onClick={() => handleJobAction(job.id, 'approved')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleJobAction(job.id, 'rejected', rejectionReason)}
                      className="text-red-600 hover:text-red-700"
                      disabled={!rejectionReason.trim()}
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Job Verification</h2>
          <p className="text-gray-600">{jobs.length} total job listings</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search jobs, companies, or employers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'pending').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'approved').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'rejected').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Flag className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Flagged</p>
                <p className="text-2xl font-bold">{jobs.filter(j => j.flagged).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Tabs */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending">Pending ({filterByStatus('pending').length})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({filterByStatus('approved').length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({filterByStatus('rejected').length})</TabsTrigger>
          <TabsTrigger value="flagged">Flagged ({jobs.filter(j => j.flagged).length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {filterByStatus('pending').map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4 mt-6">
          {filterByStatus('approved').map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4 mt-6">
          {filterByStatus('rejected').map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </TabsContent>

        <TabsContent value="flagged" className="space-y-4 mt-6">
          {jobs.filter(j => j.flagged).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </TabsContent>
      </Tabs>

      {/* Job Detail Modal */}
      {selectedJob && <JobDetailModal job={selectedJob} />}
    </div>
  );
};

export default JobVerification;
