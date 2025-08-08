import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TermsModal from './TermsModal'

export default function SignUp() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <>
      <div className="lg:w-1/2 p-12">
        <div className="max-w-sm mx-auto w-full flex flex-col justify-between min-h-full space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <Link
                to="/"
                className="text-emerald-500 hover:text-emerald-600 flex items-center text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: 'GilroySemiBold, sans-serif' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
            <h2
              className="text-gray-800 text-3xl font-medium"
              style={{ fontFamily: 'GilroySemiBold, sans-serif' }}
            >
              Let's get started
            </h2>
            <h2
              className="text-gray-800 text-3xl font-medium mb-2"
              style={{ fontFamily: 'GilroySemiBold, sans-serif' }}
            >
              with a few simple steps
            </h2>
          </div>

          {/* <form onSubmit={handleSubmit} className="space-y-8"> */}
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
                // value={formData.email}
                // onChange={handleInputChange}
                className="w-full pb-0 border-b-2 border-gray-300 text-sm focus:border-teal-600 outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 text-sm font-medium"
                style={{ fontFamily: 'GilroySemiBold, sans-serif' }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                // value={formData.fullName}
                // onChange={handleInputChange}
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
                // value={formData.password}
                // onChange={handleInputChange}
                className="w-full pb-0 border-b-2 border-gray-300 text-sm focus:border-teal-600 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-full text-lg mt-6 cursor-pointer font-gilroy-bold"
            >
              Sign up
            </button>
          </form>

          <div className="mt-8 text-left text-gray-400 text-sm" style={{ letterSpacing: '-0.5px' }}>
            <p>
              By signing up, you agree to our{" "}
              <button
                onClick={() => setShowTerms(true)}
                className="text-gray-400 underline cursor-pointer"
              >
                Terms of Service
              </button>
            </p>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  )
}