
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Eye, Users } from 'lucide-react';
import JobPostingForm from './JobPostingForm';
import { useToast } from "@/hooks/use-toast";

const JobListings = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      location: 'San Francisco, CA',
      salary: '$120,000 - $160,000',
      type: 'Full-time',
      status: 'active',
      applications: 24,
      postedDate: '2024-01-10',
      description: 'We are looking for a passionate Senior React Developer to join our dynamic team...',
      requirements: 'Experience with React, TypeScript, and modern development practices.'
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      location: 'Remote',
      salary: '$90,000 - $130,000',
      type: 'Full-time',
      status: 'paused',
      applications: 18,
      postedDate: '2024-01-08',
      description: 'Join our team as a Frontend Engineer and help build amazing user experiences...',
      requirements: 'Strong JavaScript skills, experience with modern frameworks.'
    },
    {
      id: '3',
      title: 'UI/UX Developer',
      location: 'New York, NY',
      salary: '$80 - $120 /hour',
      type: 'Contract',
      status: 'closed',
      applications: 45,
      postedDate: '2024-01-05',
      description: 'We need a talented UI/UX Developer to create beautiful interfaces...',
      requirements: 'Portfolio showcasing UI/UX work, Figma experience preferred.'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'closed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateJob = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const handleEditJob = (job: any) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleDeleteJob = (jobId: string) => {
    setJobs(prev => prev.filter(job => job.id !== jobId));
    toast({
      title: "Job Deleted",
      description: "Job listing has been successfully deleted.",
    });
  };

  const handleSaveJob = (jobData: any) => {
    if (editingJob) {
      setJobs(prev => prev.map(job => 
        job.id === editingJob.id ? { ...job, ...jobData } : job
      ));
      toast({
        title: "Job Updated",
        description: "Job listing has been successfully updated.",
      });
    } else {
      const newJob = {
        ...jobData,
        id: String(jobs.length + 1),
        applications: 0,
        postedDate: new Date().toISOString().split('T')[0]
      };
      setJobs(prev => [...prev, newJob]);
      toast({
        title: "Job Posted",
        description: "New job listing has been successfully created.",
      });
    }
    setShowForm(false);
    setEditingJob(null);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showForm) {
    return (
      <JobPostingForm
        job={editingJob}
        onClose={() => {
          setShowForm(false);
          setEditingJob(null);
        }}
        onSave={handleSaveJob}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Job Listings</h2>
          <p className="text-gray-600">{jobs.length} total jobs posted</p>
        </div>
        <Button onClick={handleCreateJob} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(job.status)}>
                      {job.status}
                    </Badge>
                    <div className="flex items-center text-blue-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{job.applications} applications</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Posted on {new Date(job.postedDate).toLocaleDateString()}
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditJob(job)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteJob(job.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Eye className="h-4 w-4 mr-2" />
                    View Applications
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No job listings found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm ? 'Try adjusting your search criteria.' : 'Start by posting your first job listing.'}
            </p>
            {!searchTerm && (
              <Button onClick={handleCreateJob} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Post Your First Job
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default JobListings;
