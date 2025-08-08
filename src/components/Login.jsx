import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className="lg:w-1/2 p-12">
        <div className="max-w-sm mx-auto w-full flex flex-col justify-between min-h-full space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <Link
                to="/"
                className="text-emerald-500 hover:text-emerald-600 flex items-center text-sm font-medium transition-colors duration-200 font-gilroy"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
            <h2 className="text-gray-800 text-3xl font-medium mb-2 font-gilroy">
              Welcome back
            </h2>
            <p className="text-gray-600 text-xl font-gilroy">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={() => { }} className="space-y-6">
            <div className="flex flex-col">
              <label
                className="text-gray-700 text-sm font-medium"
                style={{ fontFamily: 'GilroySemiBold, sans-serif' }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full pb-0 border-b-2 border-gray-300 text-sm focus:border-teal-600 outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 text-sm font-medium"
                style={{ fontFamily: 'GilroySemiBold, sans-serif' }}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full pb-0 border-b-2 border-gray-300 text-sm focus:border-teal-600 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-full text-lg mt-6 cursor-pointer font-gilroy-bold"
            >
              Log in
            </button>
          </form>

          <div className="mt-8 text-left text-gray-400 text-sm" style={{ letterSpacing: '-0.5px' }}>
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
