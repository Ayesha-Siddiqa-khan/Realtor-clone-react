import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function ForgotPassword() {
  const [email, setEmail] = useState("")

  function onChange(e) {
    setEmail(e.target.value)
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            {/* Email */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            {/* Link to Sign Up */}
            <div className="text-sm text-gray-800 font-semibold flex justify-between whitespace-nowrap sm:text-lg mb-4">
              <p>
                Don’t have an account?
                <Link
                  to="/sign-u"
                  className="text-red-600 hover:text-red-800 hover:underline transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            {/* Button */}
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 rounded font-semibold hover:bg-blue-700 text-sm uppercase shadow-md transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 mb-4"
              type="submit"
            >
              Send reset password
            </button>

            {/* OR */}
            <div className="flex my-4 before:border-t before:flex-1 items-center before:border-gray-400 after:border-t after:flex-1 after:border-gray-400">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            {/* OAuth Buttons */}
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}
