import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className="lg:w-1/2 p-12 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Link
                to="/"
                className="text-emerald-500 hover:text-emerald-600 flex items-center text-sm font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
            <h2 className="text-gray-800 text-2xl font-medium mb-2">Welcome back</h2>
            <p className="text-gray-600 text-lg">Sign in to your account</p>
          </div>

          <form onSubmit={() => { }} className="space-y-8">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pb-3 border-b-2 border-gray-300 text-lg focus:border-teal-600 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pb-3 border-b-2 border-gray-300 text-lg focus:border-teal-600 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-full text-lg mt-12 cursor-pointer"
            >
              Log in
            </button>
          </form>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-emerald-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
