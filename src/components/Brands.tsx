import React from 'react'
import { ChevronRight } from 'lucide-react'

const Brands = () => {
  const brands = [
    { name: 'Dewalt', logo: 'https://ext.same-assets.com/519665020/3760988204.png' },
    { name: 'Honda', logo: 'https://ext.same-assets.com/519665020/792216137.png' },
    { name: 'Ipower', logo: 'https://ext.same-assets.com/519665020/3926813147.png' },
    { name: 'Makita', logo: 'https://ext.same-assets.com/519665020/2632549883.png' },
    { name: 'Stanley', logo: 'https://ext.same-assets.com/519665020/1622039067.png' },
    { name: 'Vertex', logo: 'https://ext.same-assets.com/519665020/1474415696.png' },
    { name: 'Liqui Moly', logo: 'https://ext.same-assets.com/519665020/4109406969.png' },
    { name: 'Milano', logo: 'https://ext.same-assets.com/519665020/2269150686.png' },
    { name: 'Genius', logo: 'https://ext.same-assets.com/519665020/1471115302.png' },
    { name: 'Beorol', logo: 'https://ext.same-assets.com/519665020/143805461.png' },
    { name: 'Denzel', logo: 'https://ext.same-assets.com/519665020/2662253117.png' },
    { name: 'Lucas', logo: 'https://ext.same-assets.com/519665020/3697650965.png' },
    { name: 'Hummer', logo: 'https://ext.same-assets.com/519665020/657355855.png' },
    { name: 'Ingco', logo: 'https://ext.same-assets.com/519665020/3363270254.png' },
    { name: 'JB Weld', logo: 'https://ext.same-assets.com/519665020/2656938448.png' },
    { name: 'Berger', logo: 'https://ext.same-assets.com/519665020/286778242.png' }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Brands</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with the world's leading tool and equipment manufacturers to bring you the highest quality products for all your professional and DIY needs.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                title={brand.name}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold text-lg">
            <span>View All Brands</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* WhatsApp Contact */}
        <div className="mt-12 bg-green-500 rounded-lg p-6 text-white text-center">
          <div className="flex items-center justify-center space-x-4">
            <div className="text-3xl">💬</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Help? Contact Us on WhatsApp</h3>
              <p className="mb-4">Get instant support and product recommendations from our experts</p>
              <a
                href="https://api.whatsapp.com/send?phone=971526906148"
                className="inline-flex items-center bg-white text-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>📱 +971 526906148</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands