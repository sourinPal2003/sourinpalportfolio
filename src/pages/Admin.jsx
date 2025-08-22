import { useState } from 'react';
import { useLocation } from 'wouter';

const Admin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [, setLocation] = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.username || !formData.password) {
      setError('Username and password are required');
      setSuccess(false);
      return;
    }
    
    // Demo form - just show success message
    setSuccess(true);
    setError('');
    
    // Clear form after 2 seconds and redirect
    setTimeout(() => {
      setLocation('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#252526] rounded-md shadow-lg p-6">
        <h1 className="text-2xl text-white font-semibold mb-6">Admin Login</h1>
        
        {error && (
          <div className="mb-4 p-2 bg-red-900/50 border border-red-700 text-red-400 rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-2 bg-green-900/50 border border-green-700 text-green-400 rounded">
            Login successful! Redirecting to home page...
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 bg-[#1E1E1E] border border-[#474747] rounded text-white focus:outline-none focus:ring-2 focus:ring-[#007ACC] focus:border-transparent"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-[#1E1E1E] border border-[#474747] rounded text-white focus:outline-none focus:ring-2 focus:ring-[#007ACC] focus:border-transparent"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#007ACC] hover:bg-blue-600 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <button
            onClick={() => setLocation('/')}
            className="text-gray-400 hover:text-white text-sm"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
