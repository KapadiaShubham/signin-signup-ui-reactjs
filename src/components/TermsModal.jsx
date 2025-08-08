import React from 'react'

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Terms of Service</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                <strong>Last updated:</strong> December 2024
              </p>
              
              <div className="space-y-4">
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h3>
                  <p className="text-sm leading-relaxed">
                    By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Use License</h3>
                  <p className="text-sm leading-relaxed">
                    Permission is granted to temporarily download one copy of the materials (information or software) on this platform for personal, non-commercial transitory viewing only.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Disclaimer</h3>
                  <p className="text-sm leading-relaxed">
                    The materials on this platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Limitations</h3>
                  <p className="text-sm leading-relaxed">
                    In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our platform.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Privacy Policy</h3>
                  <p className="text-sm leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the platform, to understand our practices.
                  </p>
                </section>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
