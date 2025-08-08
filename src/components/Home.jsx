import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TermsModal from './TermsModal'

export default function Home() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <>
      <div className="lg:w-1/2 p-12 flex flex-col justify-center">
        <div className="max-w-sm mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-gray-800 text-2xl font-medium mb-2">Welcome back</h2>
            <p className="text-gray-600 text-lg">Choose your next step</p>
          </div>

          <div className="space-y-6">
            <Link
              to="/login"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors duration-200"
            >
              Login
            </Link>
            
            <Link
              to="/signup"
              className="w-full bg-teal-800 hover:bg-teal-900 text-white py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors duration-200"
            >
              Sign up
            </Link>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
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
