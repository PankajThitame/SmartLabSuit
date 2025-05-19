import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Database, FileText, Layers } from 'lucide-react';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return null;

  const department = user.department || 'General';

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="text-gray-600">Department: <span className="font-semibold">{department}</span></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card onClick={() => navigate('/data-entry')} className="cursor-pointer hover:shadow-xl transition-all">
          <CardContent className="flex items-center gap-4 p-6">
            <Database className="text-blue-700 w-8 h-8" />
            <div>
              <h2 className="font-semibold text-lg">Data Entry</h2>
              <p className="text-sm text-gray-500">Enter new records</p>
            </div>
          </CardContent>
        </Card>

        <Card onClick={() => navigate('/departments/' + department)} className="cursor-pointer hover:shadow-xl transition-all">
          <CardContent className="flex items-center gap-4 p-6">
            <Layers className="text-green-700 w-8 h-8" />
            <div>
              <h2 className="font-semibold text-lg">Department Info</h2>
              <p className="text-sm text-gray-500">Learn about your department</p>
            </div>
          </CardContent>
        </Card>

        <Card onClick={() => navigate('/reports')} className="cursor-pointer hover:shadow-xl transition-all">
          <CardContent className="flex items-center gap-4 p-6">
            <FileText className="text-purple-700 w-8 h-8" />
            <div>
              <h2 className="font-semibold text-lg">Reports</h2>
              <p className="text-sm text-gray-500">View submitted reports</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optional Recent Activity Section */}
      {/* <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          <li>Submitted 3 records on Dengue</li>
          <li>Viewed reports on Influenza - May 2025</li>
          <li>Updated profile details</li>
        </ul>
      </div> */}
    </div>
  );
};

export default UserDashboard;
