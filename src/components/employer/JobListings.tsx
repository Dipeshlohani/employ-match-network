
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, MapPin, DollarSign, Clock, Users } from 'lucide-react';
import JobPostingForm from './JobPostingForm';

const JobListings = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobs, setJobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120,000 - $160,000',
      type: 'Full-time',
      posted: '2024-01-15',
      status: 'active',
      applications: 24,
      description: 'We are looking for a senior React developer to join our team...'
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$90,000 - $130,000',
      type: 'Full-time',
      posted: '2024-01-10',
      status: 'active',
      applications: 18,
      description: 'Join our frontend team to build amazing user experiences...'
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'TechCorp Inc.',
      location: 'New York, NY',
      salary: '$80,000 - $120,000',
      type: 'Contract',
      posted: '2024-01-08',
      status: 'paused',
      applications: 12,
      description: 'Design beautiful and intuitive user interfaces...'
    }
  ]);

  const handleCreateJob = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingJob(null);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-100 text-yellow-800">Paused</Badge>;
      case 'closed':
        return <Badge className="bg-red-100 text-red-800">Closed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  if (showForm) {
    return (
      <JobPostingForm 
        job={editingJob} 
        onClose={handleFormClose}
        onSave={(jobData) => {
          if (editingJob) {
            setJobs(jobs.map(job => job.id === editingJob.id ? { ...job, ...jobData } : job));
          } else {
            const newJob = {
              ...jobData,
              id: Date.now().toString(),
              posted: new Date().toISOString().split('T')[0],
              applications: 0,
              company: 'TechCorp Inc.'
            };
            setJobs([newJob, ...jobs]);
          }
          handleFormClose();
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Job Listings</h2>
          <p className="text-gray-600">Manage your posted jobs</p>
        </div>
        <Button onClick={handleCreateJob} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-green-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold">{jobs.filter(job => job.status === 'active').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold">{jobs.reduce((sum, job) => sum + job.applications, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-purple-400 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold">{jobs.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    {getStatusBadge(job.status)}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Posted {new Date(job.posted).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{job.applications} applications</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleEditJob(job)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDeleteJob(job.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
