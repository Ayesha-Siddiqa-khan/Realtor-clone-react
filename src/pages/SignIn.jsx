import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
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

            {/* Password */}
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              />
              <div
                className="absolute right-3 top-3 text-xl cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>

            {/* Link to Sign Up */}
            <div className="text-sm text-gray-600 flex justify-between whitespace-nowrap sm:text-lg">
            <p className='mb-6text-black font-bold'>
              Don't have an account?
              <Link to="/sign-up" className="text-red-600 hover:text-red-800 hover:underline transition duration-200 ease-in-out ml-1">
                Register
              </Link></p>
              <p>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 hover:underline transition duration-200 ease-in-out ml-1">Forgot password?</Link>
              </p>
            </div>
          </form>
                    {/* button */}
          <button    className="w-full bg-blue-600 text-white px-7 py-3 rounded  font-medium hover:bg-blue-700 t text-sm uppercase shadow-md transition duration-150 ease in and out hover : shadow-lg active:bg-blur-800 mt-5"
          type='submit'> Sign in</button>
                     {/* OR */}
          <div className='flex my-4 before:border-t  before:flex-1 items-center before:border-gray-400          after:border-t  after:flex-1 after:border-gray-400'>           
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </section>
  )
}
