
import React from 'react';
import JobCard from './JobCard';

const TrendingJobs = () => {
  const trendingJobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern development practices.',
      postedTime: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Lead product strategy and roadmap for our innovative SaaS platform serving thousands of customers worldwide.',
      postedTime: '1 day ago',
      featured: true
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      company: 'DesignStudio',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Create beautiful and intuitive user experiences for web and mobile applications in a collaborative environment.',
      postedTime: '3 days ago'
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'DataCorp',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'Apply machine learning and statistical analysis to solve complex business problems with large datasets.',
      postedTime: '1 day ago'
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $145k',
      description: 'Build and maintain scalable cloud infrastructure using AWS, Kubernetes, and modern DevOps practices.',
      postedTime: '4 days ago'
    },
    {
      id: '6',
      title: 'Marketing Manager',
      company: 'GrowthCo',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$85k - $110k',
      description: 'Drive marketing campaigns and growth strategies for our rapidly expanding B2B software company.',
      postedTime: '2 days ago'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Jobs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most popular job opportunities from top companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingJobs;
