
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, MapPin, Clock, DollarSign, Trash2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      savedDate: '2024-01-15',
      status: 'not-applied'
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      savedDate: '2024-01-12',
      status: 'applied'
    },
    {
      id: '3',
      title: 'UI/UX Developer',
      company: 'DesignPro',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80 - $120 /hour',
      savedDate: '2024-01-10',
      status: 'not-applied'
    }
  ]);

  const handleRemoveJob = (jobId: string) => {
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'applied':
        return <Badge className="bg-green-100 text-green-800">Applied</Badge>;
      case 'not-applied':
        return <Badge variant="secondary">Not Applied</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Saved Jobs</h2>
          <p className="text-gray-600">Keep track of jobs you're interested in</p>
        </div>
        <Badge variant="outline" className="text-lg px-3 py-1">
          {savedJobs.length} saved
        </Badge>
      </div>

      {savedJobs.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No saved jobs yet</h3>
            <p className="text-gray-600 mb-4">
              Start browsing jobs and save the ones you're interested in
            </p>
            <Link to="/dashboard">
              <Button>Browse Jobs</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {savedJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Link to={`/job/${job.id}`}>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {job.title}
                        </h3>
                      </Link>
                      {getStatusBadge(job.status)}
                    </div>
                    
                    <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Saved on {new Date(job.savedDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <Link to={`/job/${job.id}`}>
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Job
                      </Button>
                    </Link>
                    
                    {job.status === 'not-applied' && (
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Apply Now
                      </Button>
                    )}
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleRemoveJob(job.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
