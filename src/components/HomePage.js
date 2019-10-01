import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/contact">Buy Shit</Link>
        <Link to="/gallery">Look at Shit</Link>
        <Link to="/testimonials">Read about the Shit</Link>
      </p>
    </div>
  )
}
