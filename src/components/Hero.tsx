import React from 'react'
import { ChevronRight } from 'lucide-react'
import bannerImage from './../assets/others/Hero-Background.png'
import centrifugalPump from './../assets/products/Centrifugal-Pump.jpeg'
import deepWellPump from './../assets/products/deep-wellPump.png'
import valves from './../assets/products/valves.png'

const Hero = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Hero Banner */}
      <div className="relative">
        <div
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bannerImage})`
          }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-4">
                  Professional Tools for Every Need
                </h1>
                <p className="text-xl mb-6">
                  Discover our extensive range of power tools, hand tools, and industrial equipment from top brands.
                </p>
                <button className="bg-[#0066cc] hover:bg-[#005bb5] text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center space-x-2">
                  <span>Shop Now</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">New Products</h2>
          <div className="w-20 h-1 bg-[#0066cc]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">New</span>
              <img
                src={centrifugalPump}
                alt="Seaflo Fuel Tank 5l Red"
                className="w-full h-48 object-contain p-4"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-1">centrifugal pump</p>
              <h3 className="text-lg font-semibold mb-2">Vertical multistage centrifugal pump</h3>
              <div className="flex items-center mb-2 text-yellow-400">{'★'.repeat(5)}</div>
              <p className="text-sm text-gray-600 mb-3">
                Seaflo 5 Litre automatic shut off Diesel Cans which are designed with specially proportioned rear handle...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#0066cc]">Ksh4010.00</span>
                <button className="bg-[#0066cc] hover:bg-[#005bb5] text-white px-4 py-2 rounded text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">New</span>
              <img
                src={deepWellPump}
                alt="Karcher K3 Follow Me High Pressure Washer"
                className="w-full h-48 object-contain p-4"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-1">DEEP WELL PUMP</p>
              <h3 className="text-lg font-semibold mb-2">Deep well Pump</h3>
              <div className="flex items-center mb-2 text-yellow-400">{'★'.repeat(5)}</div>
              <p className="text-sm text-gray-600 mb-3">
                Lightweight, compact, robust: the K 3 Follow Me pressure washer is optimum for the occasional cleaning...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#0066cc]">Ksh600.00</span>
                <button className="bg-[#0066cc] hover:bg-[#005bb5] text-white px-4 py-2 rounded text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">New</span>
              <img
                src={valves}
                alt="750ML Ceranium Maintenance Coating"
                className="w-full h-48 object-contain p-4"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-1">Valves</p>
              <h3 className="text-lg font-semibold mb-2">Special Push high cost performance</h3>
              <div className="flex items-center mb-2 text-yellow-400">{'★'.repeat(5)}</div>
              <p className="text-sm text-gray-600 mb-3">
                Ceramic-enhanced wax for routine care of surfaces protected by CNX1000 CERANIUM Ceramic Protect
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#0066cc]">Ksh400.00</span>
                <button className="bg-[#0066cc] hover:bg-[#005bb5] text-white px-4 py-2 rounded text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="text-[#0066cc] hover:text-[#005bb5] font-semibold flex items-center space-x-1 mx-auto">
            <span>View More</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Special Offers Banner */}
      <div className="bg-[#005bb5] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Special Offers</h2>
          <p className="text-xl">Up to 50% off on selected power tools and equipment</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
