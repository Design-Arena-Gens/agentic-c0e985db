'use client'

import { useState } from 'react'

const cars = [
  {
    id: 1,
    name: '2023 Tesla Model 3',
    year: 2023,
    mileage: '12,000 km',
    fuel: 'Electric',
    price: '$45,990',
    icon: '🚗'
  },
  {
    id: 2,
    name: '2022 BMW X5',
    year: 2022,
    mileage: '25,000 km',
    fuel: 'Diesel',
    price: '$62,500',
    icon: '🚙'
  },
  {
    id: 3,
    name: '2023 Mercedes C-Class',
    year: 2023,
    mileage: '8,000 km',
    fuel: 'Petrol',
    price: '$55,000',
    icon: '🚘'
  },
  {
    id: 4,
    name: '2021 Audi A4',
    year: 2021,
    mileage: '35,000 km',
    fuel: 'Petrol',
    price: '$38,900',
    icon: '🚗'
  },
  {
    id: 5,
    name: '2023 Toyota Camry',
    year: 2023,
    mileage: '5,000 km',
    fuel: 'Hybrid',
    price: '$32,990',
    icon: '🚙'
  },
  {
    id: 6,
    name: '2022 Honda CR-V',
    year: 2022,
    mileage: '18,000 km',
    fuel: 'Petrol',
    price: '$36,500',
    icon: '🚙'
  },
  {
    id: 7,
    name: '2023 Porsche 911',
    year: 2023,
    mileage: '3,000 km',
    fuel: 'Petrol',
    price: '$125,000',
    icon: '🏎️'
  },
  {
    id: 8,
    name: '2022 Ford Mustang',
    year: 2022,
    mileage: '15,000 km',
    fuel: 'Petrol',
    price: '$48,500',
    icon: '🚗'
  },
  {
    id: 9,
    name: '2023 Lexus RX',
    year: 2023,
    mileage: '7,000 km',
    fuel: 'Hybrid',
    price: '$58,990',
    icon: '🚙'
  }
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">🚗 Premium Cars</div>
          <nav className="nav">
            <a href="#inventory">Inventory</a>
            <a href="#about">About</a>
            <a href="#finance">Finance</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h1>Find Your Perfect Car</h1>
        <p>Browse our extensive collection of quality vehicles</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by make, model, or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
      </section>

      <main className="container">
        <h2 className="section-title" id="inventory">Featured Vehicles</h2>
        <div className="cars-grid">
          {filteredCars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <span style={{ fontSize: '72px' }}>{car.icon}</span>
              </div>
              <div className="car-info">
                <h3 className="car-name">{car.name}</h3>
                <div className="car-details">
                  <span>📅 {car.year}</span>
                  <span>🛣️ {car.mileage}</span>
                  <span>⛽ {car.fuel}</span>
                </div>
                <div className="car-price">{car.price}</div>
                <button className="btn-primary">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="features" id="about">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✅</div>
              <h3>Quality Assured</h3>
              <p>Every vehicle undergoes rigorous inspection to ensure top quality and reliability</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with flexible financing options to fit your budget</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Warranty Coverage</h3>
              <p>Comprehensive warranty packages available for peace of mind</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Expert Support</h3>
              <p>Dedicated team of automotive experts ready to help you find the perfect car</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#inventory">Inventory</a>
            <a href="#about">About Us</a>
            <a href="#finance">Finance</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <p>&copy; 2024 Premium Car Sales. All rights reserved.</p>
          <p>📞 1-800-CARS-NOW | 📧 info@premiumcars.com</p>
        </div>
      </footer>
    </>
  )
}
