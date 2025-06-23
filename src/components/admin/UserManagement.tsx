
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, User, Shield, Ban, CheckCircle, Eye, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const UserManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'jobseeker',
      status: 'active',
      joinDate: '2024-01-10',
      lastLogin: '2024-01-20',
      applicationsCount: 5,
      jobsPosted: 0
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@techcorp.com',
      role: 'employer',
      status: 'active',
      joinDate: '2024-01-08',
      lastLogin: '2024-01-19',
      applicationsCount: 0,
      jobsPosted: 3
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob.wilson@email.com',
      role: 'jobseeker',
      status: 'suspended',
      joinDate: '2024-01-05',
      lastLogin: '2024-01-15',
      applicationsCount: 12,
      jobsPosted: 0
    },
    {
      id: '4',
      name: 'Alice Brown',
      email: 'alice.brown@startup.com',
      role: 'employer',
      status: 'pending',
      joinDate: '2024-01-18',
      lastLogin: '2024-01-18',
      applicationsCount: 0,
      jobsPosted: 1
    },
    {
      id: '5',
      name: 'Admin User',
      email: 'admin@jobportal.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-01-01',
      lastLogin: '2024-01-20',
      applicationsCount: 0,
      jobsPosted: 0
    }
  ]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'employer': return 'bg-blue-100 text-blue-800';
      case 'jobseeker': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = (userId: string, newStatus: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    toast({
      title: "User Status Updated",
      description: `User status changed to ${newStatus}.`,
    });
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">User Management</h2>
          <p className="text-gray-600">{users.length} total users</p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="jobseeker">Job Seekers</SelectItem>
            <SelectItem value="employer">Employers</SelectItem>
            <SelectItem value="admin">Admins</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">{users.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Employers</p>
                <p className="text-2xl font-bold">{users.filter(u => u.role === 'employer').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Job Seekers</p>
                <p className="text-2xl font-bold">{users.filter(u => u.role === 'jobseeker').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(user.joinDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(user.lastLogin).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {user.role === 'jobseeker' && (
                          <p>{user.applicationsCount} applications</p>
                        )}
                        {user.role === 'employer' && (
                          <p>{user.jobsPosted} jobs posted</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        {user.status === 'active' ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(user.id, 'suspended')}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Ban className="h-4 w-4" />
                          </Button>
                        ) : user.status === 'suspended' ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(user.id, 'active')}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        ) : user.status === 'pending' ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(user.id, 'active')}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {filteredUsers.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-500">Try adjusting your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserManagement;
