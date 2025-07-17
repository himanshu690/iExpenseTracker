import React from 'react'

export default function SignUp() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100" style={{
      background: "linear-gradient(to right, #f5f7fa, #c3cfe2)"
    }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px", borderRadius: "1rem" }}>
        <h2 className="text-center mb-4" style={{ color: "#333" }}>Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Choose a username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create a password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="btn w-100 mt-2" style={{
            background: "linear-gradient(to right, #56ab2f, #a8e063)",
            border: "none",
            color: "white"
          }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
