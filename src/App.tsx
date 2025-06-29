import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Brands from './components/Brands'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Brands />
      <Footer />
    </div>
  )
}

export default App