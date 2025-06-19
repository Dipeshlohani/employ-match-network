
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, DollarSign, Clock, Filter } from 'lucide-react';
import JobCard from '../JobCard';

const JobSearch = () => {
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    location: '',
    salary: '',
    jobType: '',
    experience: ''
  });

  // Mock job data
  const jobs = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'We are looking for a passionate Senior React Developer to join our dynamic team...',
      postedTime: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Join our fast-growing startup as a Frontend Engineer and help build amazing user experiences...',
      postedTime: '1 week ago',
      featured: false
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
      featured: false
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Job Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Main Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search jobs by title, company, or keywords..."
              className="pl-10"
              value={searchFilters.keyword}
              onChange={(e) => handleFilterChange('keyword', e.target.value)}
            />
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label>Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="City, State, or Remote"
                  className="pl-10"
                  value={searchFilters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>Salary Range</Label>
              <Select value={searchFilters.salary} onValueChange={(value) => handleFilterChange('salary', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select salary range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                  <SelectItem value="150k+">$150,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Job Type</Label>
              <Select value={searchFilters.jobType} onValueChange={(value) => handleFilterChange('jobType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Experience Level</Label>
              <Select value={searchFilters.experience} onValueChange={(value) => handleFilterChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                  <SelectItem value="lead">Lead/Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Search Jobs
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <p className="text-gray-600">{jobs.length} jobs found</p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
