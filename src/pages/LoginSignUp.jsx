import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import Home from '../components/Home'
import LeftPanel from '../components/LeftPanel'

export default function LoginSignUp() {
  return (
    <Router>
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: "url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="w-full max-w-[60rem] bg-white rounded-[40px] shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[42rem]">
            {/* Left Panel */}
            <LeftPanel />

            {/* Right Panel */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
