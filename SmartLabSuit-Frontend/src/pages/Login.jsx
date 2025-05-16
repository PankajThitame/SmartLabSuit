import React from 'react';
import logo from '../assets/login.png';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-6xl">
        
        {/* Left: Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign in to your account
          </h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{' '}
            <a href="/sign-up" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-blue-50 p-6">
          <img src={logo} alt="Login Illustration" className="w-96 h-96 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Login;
