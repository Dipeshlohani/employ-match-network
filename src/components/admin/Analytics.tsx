
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Users, Briefcase, Building, Calendar, DollarSign } from 'lucide-react';

const Analytics = () => {
  // Mock data for charts
  const userGrowthData = [
    { month: 'Jan', jobSeekers: 120, employers: 25, total: 145 },
    { month: 'Feb', jobSeekers: 180, employers: 35, total: 215 },
    { month: 'Mar', jobSeekers: 250, employers: 45, total: 295 },
    { month: 'Apr', jobSeekers: 320, employers: 60, total: 380 },
    { month: 'May', jobSeekers: 420, employers: 75, total: 495 },
    { month: 'Jun', jobSeekers: 520, employers: 90, total: 610 }
  ];

  const applicationData = [
    { month: 'Jan', applications: 450 },
    { month: 'Feb', applications: 680 },
    { month: 'Mar', applications: 920 },
    { month: 'Apr', applications: 1150 },
    { month: 'May', applications: 1380 },
    { month: 'Jun', applications: 1650 }
  ];

  const jobPostingData = [
    { month: 'Jan', jobs: 85 },
    { month: 'Feb', jobs: 125 },
    { month: 'Mar', jobs: 165 },
    { month: 'Apr', jobs: 195 },
    { month: 'May', jobs: 225 },
    { month: 'Jun', jobs: 280 }
  ];

  const jobCategoryData = [
    { name: 'Technology', value: 40, count: 112 },
    { name: 'Marketing', value: 20, count: 56 },
    { name: 'Sales', value: 15, count: 42 },
    { name: 'Design', value: 12, count: 34 },
    { name: 'Finance', value: 8, count: 22 },
    { name: 'Other', value: 5, count: 14 }
  ];

  const salaryRangeData = [
    { range: '$0-50k', count: 45 },
    { range: '$50k-100k', count: 125 },
    { range: '$100k-150k', count: 89 },
    { range: '$150k+', count: 41 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#6B7280'];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>
        <p className="text-gray-600">Platform insights and key metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold">2,847</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-3xl font-bold">456</p>
                <p className="text-sm text-green-600">+8% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Companies</p>
                <p className="text-3xl font-bold">189</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Applications</p>
                <p className="text-3xl font-bold">12,364</p>
                <p className="text-sm text-green-600">+23% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="jobSeekers" stroke="#3B82F6" strokeWidth={2} name="Job Seekers" />
                <Line type="monotone" dataKey="employers" stroke="#10B981" strokeWidth={2} name="Employers" />
                <Line type="monotone" dataKey="total" stroke="#8B5CF6" strokeWidth={2} name="Total Users" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Applications Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="applications" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Categories Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={jobCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {jobCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Salary Range Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryRangeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Job Postings Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Job Postings</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobPostingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jobs" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Platform Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: 'User Registration', description: 'John Doe joined as Job Seeker', time: '2 minutes ago', icon: Users },
              { type: 'Job Posted', description: 'TechCorp posted "Senior React Developer"', time: '15 minutes ago', icon: Briefcase },
              { type: 'Application Submitted', description: 'Alice Johnson applied for Frontend Engineer', time: '1 hour ago', icon: Calendar },
              { type: 'Company Verified', description: 'StartupXYZ profile verified', time: '2 hours ago', icon: Building },
              { type: 'Job Application', description: '5 new applications received', time: '3 hours ago', icon: TrendingUp }
            ].map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <IconComponent className="h-5 w-5 text-gray-500" />
                  <div className="flex-1">
                    <p className="font-medium">{activity.type}</p>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
