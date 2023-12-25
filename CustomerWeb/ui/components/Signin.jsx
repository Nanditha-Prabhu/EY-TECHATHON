import React, { useState } from 'react'
import Cookies from 'universal-cookie'


const handleSignIn = async (credentials) => {
  return fetch("http://127.0.0.1:3000/signin", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
    credentials: 'include'  // Imp param if cors is used
  }).then((data) => data.json())
}


function Signin() {
  const [email, setEmailId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await handleSignIn({ 
      emailId: email, 
      password: password 
    })
    console.log(res);
    const cookies = new Cookies()
    if (res.success) {
      cookies.set("jwt", res.token, { path: '/', secure: true, maxAge: 3*24*60*60 })
      location.href = "/"
    }
    else
      alert("Wrong Credentials")
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg">
      <h1 className="text-center text-2xl font-bold text-[#00C3E1]  sm:text-3xl">
        Welcome Back Fashionista🥳
      </h1>

      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        sunt dolores deleniti inventore quaerat mollitia?
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <p className="text-center text-white text-lg font-medium">
          Sign In to your account
        </p>

        <div>
          <label htmlFor="text" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              name="emailId"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
              name="password"
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="block submit-btn w-full rounded-lg font-extrabold bg-[#FEA52B] px-5 py-3 text-sm  text-white"
        >
          Sign In!
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?
          <a className="underline" href="/Signup">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Signin
