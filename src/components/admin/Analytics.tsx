
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', jobs: 45, applications: 180, users: 25 },
    { month: 'Feb', jobs: 52, applications: 220, users: 30 },
    { month: 'Mar', jobs: 48, applications: 200, users: 28 },
    { month: 'Apr', jobs: 61, applications: 280, users: 35 },
    { month: 'May', jobs: 55, applications: 250, users: 32 },
    { month: 'Jun', jobs: 67, applications: 320, users: 40 },
  ];

  const userTypeData = [
    { name: 'Job Seekers', value: 750, color: '#3B82F6' },
    { name: 'Employers', value: 180, color: '#8B5CF6' },
    { name: 'Admin', value: 5, color: '#10B981' },
  ];

  const totalUsers = userTypeData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-blue-600">{totalUsers}</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
              <Users className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Jobs</p>
                <p className="text-3xl font-bold text-purple-600">328</p>
                <p className="text-sm text-green-600">+8% from last month</p>
              </div>
              <Briefcase className="h-12 w-12 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Applications</p>
                <p className="text-3xl font-bold text-green-600">1,450</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
              <FileText className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-3xl font-bold text-orange-600">24%</p>
                <p className="text-sm text-green-600">+3% from last month</p>
              </div>
              <TrendingUp className="h-12 w-12 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3B82F6" name="New Users" />
                <Line type="monotone" dataKey="jobs" stroke="#8B5CF6" name="Jobs Posted" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Applications vs Jobs Posted</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jobs" fill="#8B5CF6" name="Jobs Posted" />
              <Bar dataKey="applications" fill="#3B82F6" name="Applications" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
