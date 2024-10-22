'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccidentEmergencyService() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showRegistration, setShowRegistration] = useState(false)
  const [emergencyDisabled, setEmergencyDisabled] = useState(true)
  const [showDriverDetails, setShowDriverDetails] = useState(false)

  const driverDetails = {
    name: 'John Doe',
    vehicle: 'Toyota Camry - Blue',
    licensePlate: 'ABC-1234',
    contact: '+123456789',
    estimatedArrival: '10 minutes'
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
    setEmergencyDisabled(false)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate registration
    setShowRegistration(false)
    setIsLoggedIn(true)
    setEmergencyDisabled(false)
  }

  const handleEmergency = () => {
    alert('Emergency services have been notified. Help is on the way!')
    setShowDriverDetails(true)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white text-center p-4">
        <h1 className="text-2xl font-bold">Accident Emergency Service</h1>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#customer-login" className="hover:underline">Customer Login</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <section id="home" className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to Accident Emergency Service</h2>
          <p className="mb-4">In case of an emergency, please log in and use the emergency button below.</p>
          <Button 
            onClick={handleEmergency} 
            disabled={emergencyDisabled}
            className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-xl ${emergencyDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Emergency
          </Button>
        </section>

        {!isLoggedIn && !showRegistration && (
          <section id="customer-login" className="bg-white p-6 rounded-lg shadow-md">
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
              New user? <a href="#" onClick={() => setShowRegistration(true)} className="text-blue-600 hover:underline">Register here</a>
            </p>
          </section>
        )}

        {showRegistration && (
          <section id="customer-register" className="bg-white p-6 rounded-lg shadow-md">
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
              <div>
                <Label htmlFor="register-phone">Phone Number:</Label>
                <Input type="tel" id="register-phone" required />
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </section>
        )}

        {isLoggedIn && (
          <section className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Welcome, User!</h2>
            <p>You are now logged in. The emergency button is enabled.</p>
          </section>
        )}

        {showDriverDetails && (
          <section className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Driver Details</h2>
            <ul className="space-y-2">
              <li><strong>Name:</strong> {driverDetails.name}</li>
              <li><strong>Vehicle:</strong> {driverDetails.vehicle}</li>
              <li><strong>License Plate:</strong> {driverDetails.licensePlate}</li>
              <li><strong>Contact:</strong> {driverDetails.contact}</li>
              <li><strong>Estimated Arrival:</strong> {driverDetails.estimatedArrival}</li>
            </ul>
          </section>
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2023 Accident Emergency Service. All rights reserved.</p>
      </footer>
    </div>
  )
}
