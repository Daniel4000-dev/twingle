import React from 'react'

const AdminLoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="absolute top-[80px] text-center">
        <div className="mb-20 pb-8">
          <h2 className="text-blue-700 text-2xl">Twingle</h2>
        </div>

        <div className="w-[60vw] md:w-[30vw] mt8">
          <h2 className="text-2xl mb-5">Admin log in</h2>
          <div className="text-start">
            <div className="pb-4">
              <h2 className="pb-1">Username</h2>
              <input
                type="text"
                className={`w-full border-2 p-2 rounded-xl`}
                placeholder="Enter username sent to your email"
              />
            </div>
            <div className="pb-7">
              <h2 className="pb-1">Password</h2>
              <input
                type="text"
                className={`w-full border-2 p-2 rounded-xl`}
                placeholder="Password"
              />
            </div>

            <div className={`w-full border-2 p-2 rounded-xl text-white text-center bg-blue-800`}>
              <h2>Log in</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLoginPage