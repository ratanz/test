import { useState } from 'react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-900">
      <div className="relative bg-zinc-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-2xl max-w-md w-full m-4">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        <form className="space-y-4">
          {!isLogin && (
            <div className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg p-3">
              <label htmlFor="name" className="block text-zinc-300 text-sm font-medium mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 bg-zinc-700 bg-opacity-50 text-white placeholder-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
          <div className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg p-3">
            <label htmlFor="email" className="block text-zinc-300 text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-zinc-700 bg-opacity-50 text-white placeholder-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg p-3">
            <label htmlFor="password" className="block text-zinc-300 text-sm font-medium mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 bg-zinc-700 bg-opacity-50 text-white placeholder-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {!isLogin && (
            <div className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg p-3">
              <label htmlFor="confirmPassword" className="block text-zinc-300 text-sm font-medium mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-zinc-700 bg-opacity-50 text-white placeholder-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-purple-600 bg-opacity-80 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-800 transition-colors duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-purple-300 hover:text-purple-100 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  )
}