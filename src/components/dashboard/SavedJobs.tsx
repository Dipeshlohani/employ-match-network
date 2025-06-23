
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, Building, Bookmark, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const SavedJobs = () => {
  const { toast } = useToast();
  const [savedJobs, setSavedJobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'We are looking for a passionate Senior React Developer to join our dynamic team...',
      postedTime: '2 days ago',
      savedDate: '2024-01-15'
    },
    {
      id: '3',
      title: 'UI/UX Developer',
      company: 'DesignPro',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80 - $120 /hour',
      description: 'We need a talented UI/UX Developer to create beautiful and intuitive interfaces...',
      postedTime: '3 days ago',
      savedDate: '2024-01-14'
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      company: 'Enterprise Solutions',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Looking for a Full Stack Developer to work on enterprise-level applications...',
      postedTime: '5 days ago',
      savedDate: '2024-01-12'
    }
  ]);

  const removeSavedJob = (jobId: string) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
    toast({
      title: "Job Removed",
      description: "Job has been removed from your saved jobs.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Saved Jobs</h2>
        <p className="text-gray-600">{savedJobs.length} saved jobs</p>
      </div>

      {savedJobs.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs yet</h3>
            <p className="text-gray-500 mb-4">Start saving jobs you're interested in to keep track of them.</p>
            <Link to="/find-jobs">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Browse Jobs
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {savedJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Link to={`/job/${job.id}`}>
                        <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                          {job.title}
                        </h3>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.postedTime}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="secondary">{job.type}</Badge>
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSavedJob(job.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Saved on {new Date(job.savedDate).toLocaleDateString()}</span>
                  <div className="space-x-2">
                    <Link to={`/job/${job.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Link to={`/job/${job.id}/apply`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
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
  );
};

export default SavedJobs;
