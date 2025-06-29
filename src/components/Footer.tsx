import React from 'react'
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const Footer = () => {
  const categories = [
    'Killer Offer', 'Power Tools', 'Hand Tools', 'Outdoor', 'Abrasives',
    'Adhesives', 'Automotive', 'Bathroom Fixtures & Accessories'
  ]

  const furtherInfo = [
    'Blog', 'About Us', 'Shipping & Returns', 'Contact Us', 'Sitemap'
  ]

  const customerService = [
    'Terms of Conditions', 'Privacy Policy', 'Online Returns Policy',
    'Rewards Program', 'Partners', 'Store Locations'
  ]

  const brands = [
    'AV', 'VERTEX', 'BEOROL', 'ADMORE', 'DEWALT',
    'BRENNENSTUHL', 'DORMER', 'JOTUN'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Further Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Further Info.</h3>
            <ul className="space-y-2">
              {furtherInfo.map((info, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    {info}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {customerService.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-2">
              {brands.map((brand, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center text-orange-500 hover:text-orange-400 mt-4 text-sm"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              View All Brands
            </a>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Apex Trading Company WLL</p>
                  <p>P.O.BOX 47090</p>
                  <p>Mussafah Industrial Area M10</p>
                  <p>Abu Dhabi, U.A.E</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+971505766126" className="text-sm text-gray-300 hover:text-orange-500">
                  Phone: +971 505766126
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:online@apextools.com" className="text-sm text-gray-300 hover:text-orange-500">
                  Email: online@apextools.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Icons */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm text-gray-300">Follow us:</span>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/apextoolsuae" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://youtu.be/JnfX6t4ZUbw" className="text-gray-300 hover:text-red-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/apextoolsuae/" className="text-gray-300 hover:text-pink-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Apex Trading Company WLL. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=971526906148"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
          title="Contact us on WhatsApp"
        >
          <div className="w-6 h-6 flex items-center justify-center text-lg">💬</div>
        </a>
      </div>
    </footer>
  )
}

export default Footer