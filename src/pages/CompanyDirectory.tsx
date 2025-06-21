
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Users, Building, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  location: string;
  employees: string;
  description: string;
  openJobs: number;
  website?: string;
  founded?: string;
}

const CompanyDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Mock company data
  const companies: Company[] = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      industry: 'Technology',
      location: 'San Francisco, CA',
      employees: '1000-5000',
      description: 'Leading software development company specializing in enterprise solutions and cloud technologies.',
      openJobs: 15,
      website: 'https://techcorp.com',
      founded: '2010'
    },
    {
      id: '2',
      name: 'Green Energy Co',
      industry: 'Energy',
      location: 'Austin, TX',
      employees: '500-1000',
      description: 'Renewable energy company focused on solar and wind power solutions for residential and commercial clients.',
      openJobs: 8,
      website: 'https://greenenergy.com',
      founded: '2015'
    },
    {
      id: '3',
      name: 'HealthTech Innovations',
      industry: 'Healthcare',
      location: 'Boston, MA',
      employees: '200-500',
      description: 'Healthcare technology company developing AI-powered diagnostic tools and patient management systems.',
      openJobs: 12,
      website: 'https://healthtech.com',
      founded: '2018'
    },
    {
      id: '4',
      name: 'Financial Insights LLC',
      industry: 'Finance',
      location: 'New York, NY',
      employees: '2000-5000',
      description: 'Financial services company providing investment management and wealth advisory services.',
      openJobs: 6,
      website: 'https://financialinsights.com',
      founded: '2005'
    },
    {
      id: '5',
      name: 'EduLearn Platform',
      industry: 'Education',
      location: 'Seattle, WA',
      employees: '100-200',
      description: 'Online education platform offering courses in technology, business, and creative skills.',
      openJobs: 9,
      website: 'https://edulearn.com',
      founded: '2020'
    },
    {
      id: '6',
      name: 'Retail Masters Inc',
      industry: 'Retail',
      location: 'Chicago, IL',
      employees: '5000+',
      description: 'Multi-brand retail company with both physical stores and e-commerce presence across North America.',
      openJobs: 22,
      website: 'https://retailmasters.com',
      founded: '1995'
    }
  ];

  const industries = ['all', 'Technology', 'Energy', 'Healthcare', 'Finance', 'Education', 'Retail'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Company Directory</h1>
          <p className="text-gray-600">Discover companies and explore career opportunities</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search companies by name, location, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{company.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {company.industry}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{company.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {company.employees} employees
                  </div>
                  {company.founded && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Building className="h-4 w-4 mr-2" />
                      Founded {company.founded}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold text-blue-600">{company.openJobs}</span>
                    <span className="text-gray-500"> open positions</span>
                  </div>
                  {company.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Website
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all companies.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDirectory;
