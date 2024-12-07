'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EmergencyService() {
  const [activePanel, setActivePanel] = useState('login') // 'login', 'register', 'driver'
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [emergencyDisabled, setEmergencyDisabled] = useState(true)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
    setEmergencyDisabled(false)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration
    setActivePanel('login')
    setIsLoggedIn(true)
    setEmergencyDisabled(false)
  }

  const handleDriverLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate driver login
    alert('Driver logged in successfully!')
  }

  const handleEmergency = () => {
    alert('Emergency services have been notified. Help is on the way!')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white text-center p-4">
        <h1 className="text-2xl font-bold">Emergency Service</h1>
      </header>

      <main className="container mx-auto p-4">
        {activePanel === 'login' && (
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Customer Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email:</Label>
                <Input type="email" id="login-email" required />
              </div>
              <div>
                <Label htmlFor="login-password">Password:</Label>
                <Input type="password" id="login-password" required />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
            <p className="mt-4 text-center">
              New user? <a href="#" onClick={() => setActivePanel('register')} className="text-blue-600 hover:underline">Register here</a>
            </p>
          </section>
        )}

        {activePanel === 'register' && (
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Customer Registration</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Label htmlFor="register-name">Full Name:</Label>
                <Input type="text" id="register-name" required />
              </div>
              <div>
                <Label htmlFor="register-email">Email:</Label>
                <Input type="email" id="register-email" required />
              </div>
              <div>
                <Label htmlFor="register-password">Password:</Label>
                <Input type="password" id="register-password" required />
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </section>
        )}

        {activePanel === 'driver' && (
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Driver Login</h2>
            <form onSubmit={handleDriverLogin} className="space-y-4">
              <div>
                <Label htmlFor="driver-email">Email:</Label>
                <Input type="email" id="driver-email" required />
              </div>
              <div>
                <Label htmlFor="driver-password">Password:</Label>
                <Input type="password" id="driver-password" required />
              </div>
              <Button type="submit" className="w-full">Driver Login</Button>
            </form>
          </section>
        )}

        {isLoggedIn && (
          <section className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">
