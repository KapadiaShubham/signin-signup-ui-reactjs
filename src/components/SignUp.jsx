import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TermsModal from './TermsModal'

export default function SignUp() {
  const [showTerms, setShowTerms] = useState(false)

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
            <h2 className="text-gray-800 text-2xl font-medium mb-2">Let's get started</h2>
            <p className="text-gray-600 text-lg">with a few simple steps</p>
          </div>

          {/* <form onSubmit={handleSubmit} className="space-y-8"> */}
          <form onSubmit={() => { }} className="space-y-8">
            <input
              type="email"
              name="email"
              placeholder="Email"
              // value={formData.email}
              // onChange={handleInputChange}
              className="w-full pb-3 border-b-2 border-gray-300 text-lg focus:border-teal-600 outline-none"
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              // value={formData.fullName}
              // onChange={handleInputChange}
              className="w-full pb-3 border-b-2 border-gray-300 text-lg focus:border-teal-600 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              // value={formData.password}
              // onChange={handleInputChange}
              className="w-full pb-3 border-b-2 border-gray-300 text-lg focus:border-teal-600 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-full text-lg mt-12 cursor-pointer"
            >
              Sign up
            </button>
          </form>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              By signing up, you agree to our{" "}
              <button
                onClick={() => setShowTerms(true)}
                className="text-emerald-500 hover:underline cursor-pointer"
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