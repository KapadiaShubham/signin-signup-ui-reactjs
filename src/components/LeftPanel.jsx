import React from 'react'

export default function LeftPanel() {
  return (
    <>
      <div className="lg:w-1/2 bg-[rgb(8,75,62)] p-12 flex flex-col justify-between">
        <div>
          <img src="/logo.png" alt="Logo" width={160} height={60} className="mb-16 -mt-3" />
        </div>
        <div>
          <h1
            className="text-3xl lg:text-4xl font-gilroy"
            style={{
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