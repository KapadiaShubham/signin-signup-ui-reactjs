import React from 'react'

export default function LeftPanel() {
  return (
    <>
      <div className="lg:w-1/2 bg-teal-800 p-12 flex flex-col justify-between">
        <div>
          <img src="/logo.png" alt="Logo" width={120} height={40} className="mb-16" />
        </div>
        <div>
          <h1 
            className="text-3xl lg:text-4xl"
            style={{
              fontFamily: 'GilroySemiBold, sans-serif',
              color: 'rgb(249, 226, 186)',
              lineHeight: '45px'
            }}
          >
            Say hello to global food and beverage producers and suppliers, all in one place
          </h1>
        </div>
      </div>
    </>
  )
}