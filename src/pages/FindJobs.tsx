
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, DollarSign, Clock, Filter, Star, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedTime: string;
  featured: boolean;
  skills: string[];
  experience: string;
}

const FindJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobType, setJobType] = useState('all');
  const [salaryRange, setSalaryRange] = useState('all');

  // Mock job data
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'We are looking for a passionate Senior React Developer to join our dynamic team and build cutting-edge web applications.',
      postedTime: '2 days ago',
      featured: true,
      skills: ['React', 'TypeScript', 'Node.js'],
      experience: 'Senior Level'
    },
    {
      id: '2',
      title: 'Frontend Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Join our fast-growing startup as a Frontend Engineer and help build amazing user experiences that delight our customers.',
      postedTime: '1 week ago',
      featured: false,
      skills: ['JavaScript', 'Vue.js', 'CSS'],
      experience: 'Mid Level'
    },
    {
      id: '3',
      title: 'UI/UX Developer',
      company: 'DesignPro',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$80 - $120 /hour',
      description: 'We need a talented UI/UX Developer to create beautiful and intuitive interfaces for our client projects.',
      postedTime: '3 days ago',
      featured: false,
      skills: ['Figma', 'React', 'Tailwind CSS'],
      experience: 'Mid Level'
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      company: 'Enterprise Solutions',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Looking for a Full Stack Developer to work on enterprise-level applications with modern technologies.',
      postedTime: '5 days ago',
      featured: true,
      skills: ['React', 'Python', 'PostgreSQL'],
      experience: 'Senior Level'
    },
    {
      id: '5',
      title: 'Junior Web Developer',
      company: 'Digital Agency',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      description: 'Great opportunity for a Junior Web Developer to grow their skills in a supportive environment.',
      postedTime: '1 day ago',
      featured: false,
      skills: ['HTML', 'CSS', 'JavaScript'],
      experience: 'Entry Level'
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Seeking a DevOps Engineer to manage our cloud infrastructure and deployment pipelines.',
      postedTime: '4 days ago',
      featured: false,
      skills: ['AWS', 'Docker', 'Kubernetes'],
      experience: 'Senior Level'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = jobType === 'all' || job.type.toLowerCase() === jobType;
    const matchesSalary = salaryRange === 'all' || checkSalaryRange(job.salary, salaryRange);
    return matchesSearch && matchesLocation && matchesType && matchesSalary;
  });

  const checkSalaryRange = (salary: string, range: string) => {
    // Simple salary range checking logic
    const numbers = salary.match(/\d+/g);
    if (!numbers) return true;
    const minSalary = parseInt(numbers[0]);
    
    switch (range) {
      case '0-50k': return minSalary < 50000;
      case '50k-100k': return minSalary >= 50000 && minSalary < 100000;
      case '100k-150k': return minSalary >= 100000 && minSalary < 150000;
      case '150k+': return minSalary >= 150000;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">Discover thousands of job opportunities from top companies</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Job title, company, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            <Select value={salaryRange} onValueChange={setSalaryRange}>
              <SelectTrigger>
                <SelectValue placeholder="Salary Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ranges</SelectItem>
                <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                <SelectItem value="150k+">$150,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4 mr-2" />
              Search Jobs
            </Button>
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setLocationFilter('');
              setJobType('all');
              setSalaryRange('all');
            }}>
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50/50' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl text-blue-600 hover:text-blue-800">
                        <Link to={`/job/${job.id}`}>{job.title}</Link>
                      </CardTitle>
                      {job.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
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
                      <Badge variant="outline">{job.experience}</Badge>
                      <div className="flex items-center text-green-600 font-semibold">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Link to={`/job/${job.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all jobs.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default FindJobs;
