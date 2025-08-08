import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TermsModal from './TermsModal'

export default function Home() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <>
      <div className="lg:w-1/2 p-12">
        <div className="max-w-sm mx-auto w-full flex flex-col justify-between min-h-full space-y-8">
          <div>
            <h2 className="text-gray-800 text-3xl font-medium mb-2 font-gilroy">
              Welcome back
            </h2>
            <p className="text-gray-600 text-xl font-gilroy">
              Choose your next step
            </p>
          </div>

          <div className="space-y-6">
            <Link
              to="/login"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors duration-200 font-gilroy-bold"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="w-full bg-teal-800 hover:bg-teal-900 text-white py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors duration-200 font-gilroy-bold"
            >
              Sign up
            </Link>
          </div>

          <div className="mt-8 text-left text-gray-400 text-sm" style={{ letterSpacing: '-0.5px' }}>
            <p>
              By continuing, you agree to our{" "}
              <button
                onClick={() => setShowTerms(true)}
                className="text-gray-400 underline cursor-pointer"
              >
                Terms of Service
              </button>
            </p>
          </div>
        </div>
      </div>
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </>
  )
}
