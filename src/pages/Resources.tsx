
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Video, FileText, Users, TrendingUp, Calendar, Search, Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Career Guides',
      description: 'Comprehensive guides to help you navigate your career journey',
      count: 24
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video content for job seekers and employers',
      count: 18
    },
    {
      icon: FileText,
      title: 'Templates',
      description: 'Professional templates for resumes, cover letters, and more',
      count: 15
    },
    {
      icon: TrendingUp,
      title: 'Industry Reports',
      description: 'Latest trends and insights from the job market',
      count: 12
    }
  ];

  const featuredResources = [
    {
      type: 'Guide',
      title: 'Complete Guide to Remote Job Interviews',
      description: 'Master the art of virtual interviews with our comprehensive guide covering preparation, technology setup, and best practices.',
      readTime: '12 min read',
      category: 'Job Seeker',
      featured: true
    },
    {
      type: 'Template',
      title: 'Professional Resume Templates 2024',
      description: 'Download our collection of modern, ATS-friendly resume templates designed by career experts.',
      readTime: 'Download',
      category: 'Job Seeker',
      featured: false
    },
    {
      type: 'Report',
      title: 'Tech Hiring Trends Report Q4 2024',
      description: 'Insights into the latest hiring trends, salary benchmarks, and in-demand skills in the technology sector.',
      readTime: '8 min read',
      category: 'Employer',
      featured: true
    },
    {
      type: 'Guide',
      title: 'Building an Inclusive Hiring Process',
      description: 'Learn how to create a more diverse and inclusive recruitment process that attracts top talent from all backgrounds.',
      readTime: '15 min read',
      category: 'Employer',
      featured: false
    },
    {
      type: 'Video',
      title: 'Salary Negotiation Masterclass',
      description: 'Watch our expert-led masterclass on how to negotiate your salary effectively and confidently.',
      readTime: '45 min watch',
      category: 'Job Seeker',
      featured: false
    },
    {
      type: 'Template',
      title: 'Job Description Templates',
      description: 'Pre-written job description templates for common roles across various industries.',
      readTime: 'Download',
      category: 'Employer',
      featured: false
    }
  ];

  const webinars = [
    {
      title: 'Future of Remote Work: Trends and Predictions',
      date: 'Jan 25, 2024',
      time: '2:00 PM EST',
      speaker: 'Sarah Johnson, HR Expert',
      attendees: 1200
    },
    {
      title: 'AI in Recruitment: Tools and Best Practices',
      date: 'Feb 8, 2024',
      time: '3:00 PM EST',
      speaker: 'Michael Chen, Tech Recruiter',
      attendees: 850
    },
    {
      title: 'Building Your Personal Brand for Career Success',
      date: 'Feb 22, 2024',
      time: '1:00 PM EST',
      speaker: 'Lisa Rodriguez, Career Coach',
      attendees: 950
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Career Resources &
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Expert Insights
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Unlock your potential with our comprehensive collection of career guides, templates, industry reports, and expert advice.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search resources..."
              className="pl-10 bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Resource Library
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed in your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <category.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {category.count} resources
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and valuable content for your career success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${resource.featured ? 'border-blue-200 bg-blue-50/50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={resource.type === 'Guide' ? 'default' : resource.type === 'Template' ? 'secondary' : 'outline'}>
                      {resource.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.readTime}</span>
                    <Button size="sm" variant="outline">
                      {resource.type === 'Template' ? (
                        <>
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </>
                      ) : resource.type === 'Video' ? (
                        <>
                          <Video className="h-4 w-4 mr-1" />
                          Watch
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-1" />
                          Read
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Resources
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-gray-600">
              Join our expert-led sessions and learn from industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{webinar.date} • {webinar.time}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{webinar.attendees} registered</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                      Register Free
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Career Tips
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest career advice, industry insights, and job market trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white text-gray-900"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
