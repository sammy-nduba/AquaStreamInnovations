import React, { useState } from 'react'
import { Search, User, Heart, ShoppingCart, Menu } from 'lucide-react'
import logo from './../assets/others/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: 'Killer Offer', href: '#' },
    {
      name: 'Power Tools',
      href: '#',
      submenu: ['Drill Machines', 'Grinders', 'Cordless Machines', 'Air Gun', 'Chainsaw', 'Cut-off Saws']
    },
    {
      name: 'Hand Tools',
      href: '#',
      submenu: ['Spanners & Wrenches', 'Socket Sets', 'Screwdrivers', 'Pliers', 'Hammers', 'Files']
    },
    { name: 'Garden Tools', href: '#' },
    { name: 'Electrical', href: '#' },
    { name: 'Plumbing & Sanitary', href: '#' },
    { name: 'Paint & Accessories', href: '#' },
    { name: 'Safety', href: '#' }
  ]

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-[#0066cc] text-white py-2 px-4 text-center text-sm">
        <span>Free Shipping Order Over ksh 50,000</span>
        <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <span>📞 +2547 00000000</span>
            <span>✉️ online@aquatools.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Aquastream Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
              />
              <button className="absolute right-0 top-0 h-full px-6 bg-[#0066cc] text-white rounded-r-md hover:bg-[#005bb5]">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-[#0066cc]">
              <User className="h-5 w-5" />
              <span className="hidden md:block">Sign in</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-[#0066cc]">
              <Heart className="h-5 w-5" />
              <span className="hidden md:block">Wishlist</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-[#0066cc]">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:block">Cart (0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0066cc]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            <button className="bg-[#0066cc] text-white px-4 py-3 hover:bg-[#005bb5] flex items-center space-x-2">
              <Menu className="h-4 w-4" />
              <span>Shop All Categories</span>
            </button>

            <div className="hidden lg:flex space-x-8 ml-8">
              {categories.slice(0, 6).map((category) => (
                <div key={category.name} className="relative group">
                  <a
                    href={category.href}
                    className="text-gray-700 hover:text-[#0066cc] py-3 text-sm font-medium flex items-center"
                  >
                    {category.name}
                  </a>
                  {category.submenu && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 hidden group-hover:block z-50">
                      <div className="py-2">
                        {category.submenu.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0066cc]"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="block py-2 text-gray-700 hover:text-[#0066cc]"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
