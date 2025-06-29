import React from 'react'
import { Star } from 'lucide-react'

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Su-mak Inverter Advance + 2000Va / 24V SMK-ID-2000VA',
      brand: 'Su-mak',
      image: 'https://ext.same-assets.com/519665020/1891237520.jpeg',
      price: 695.00,
      rating: 5,
      description: 'High load power factor to run heavy duty residential and commercial appliances-mixer grinder, washing machine. projector etc. effortlessly. SMPS charger for fast and...'
    },
    {
      id: 2,
      name: '18V Li-ion Hammer Drill Driver 1.5Ah With 100Pc Metal Drill Bit Hss-G Set',
      brand: 'DEWALT',
      image: 'https://ext.same-assets.com/519665020/846766468.jpeg',
      price: 729.00,
      rating: 5,
      description: 'DCD776S2-B5 18V XR Li-Ion compact hammer drill driver featuring XR 1.5Ah Li-Ion battery technology 13mm single sleeve chuck and spindle lock for quick and easy bit change...'
    },
    {
      id: 3,
      name: 'HUMMER 1500A Jump Starter USB-C Power Bank 29600mWh H3T',
      brand: 'HUMMER',
      image: 'https://ext.same-assets.com/519665020/3870657378.png',
      price: 329.00,
      rating: 5,
      description: 'Jump Starter: 12V/1500A For Engines: GASOLINE: UPTO 7.0L DIESEL: UPTO 5.5L LED Light: 3 Modes Power Bank: 29600mWh 96W-DC12V 16W-Dual USB-A Product Specifications Battery Capacity:...'
    }
  ]

  const topProducts = [
    {
      id: 1,
      name: 'Liqui Moly - Super Diesel Additive 250Ml - Lm-8366',
      brand: 'LIQUI MOLY',
      image: 'https://ext.same-assets.com/519665020/52374315.jpeg',
      price: 39.00,
      rating: 5,
      description: 'Removes deposits in the diesel injection system and in the combustion chamber and prevents them from renewed formation. Maintains all components in the diesel injection system.'
    },
    {
      id: 2,
      name: 'Car Tyre Shine 5 Lt',
      brand: 'V2PLU',
      image: 'https://ext.same-assets.com/519665020/2979414363.png',
      price: 35.00,
      rating: 5
    },
    {
      id: 3,
      name: 'Liqui Moly - Valve Clean 150Ml - Lm-8373',
      brand: 'LIQUI MOLY',
      image: 'https://ext.same-assets.com/519665020/2722264994.jpeg',
      price: 33.00,
      rating: 5,
      description: 'Provides ideal engine power. Removes deposits on valves, in the combustion chamber and prevents renewed formation.Saves fuel.'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Featured Products Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <div className="w-20 h-1 bg-[#ff6600]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#0077b6]">Ksh{product.price.toFixed(2)}</span>
                    <button className="bg-[#0077b6] hover:bg-[#005f99] text-white px-4 py-2 rounded text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Products</h2>
            <div className="w-20 h-1 bg-[#ff6600]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  {product.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#0077b6]">Ksh{product.price.toFixed(2)}</span>
                    <button className="bg-[#0077b6] hover:bg-[#005f99] text-white px-4 py-2 rounded text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
