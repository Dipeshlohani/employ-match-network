
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building, Bookmark } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    postedTime: string;
    logo?: string;
    featured?: boolean;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className={`bg-white rounded-xl border p-6 hover:shadow-lg transition-all duration-300 ${
      job.featured ? 'border-blue-200 shadow-md' : 'border-gray-200'
    }`}>
      {job.featured && (
        <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Featured
        </Badge>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
              {job.title}
            </h3>
            <p className="text-gray-600 font-medium">{job.company}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600">
          <Bookmark className="h-5 w-5" />
        </Button>
      </div>

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

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{job.postedTime}</span>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
