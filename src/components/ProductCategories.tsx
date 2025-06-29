import React from 'react'
import { ChevronRight, Star } from 'lucide-react'
import pipeFitting from './../assets/others/pipeFitting.png'
import pipe90 from './../assets/products/90-degree.jpeg'
import steelCoupling from './../assets/products/pipe-steelCoupling.jpeg'
import tubeFittings from './../assets/products/pipe-tubeFittings.jpeg'
import gasolineEngine from './../assets/others/gasoline-engine.jpeg'
import ultraFect from './../assets/products/ultraEffect.png'
import compressor from './../assets/products/compressor.jpeg'
import piston from './../assets/products/directDriven .jpeg'
import houseHold from './../assets/products/houseHold.png'
import manifolds from './../assets/products/manifolds.png'
import flowRateIndicator  from './../assets/products/flow-rate-indicators.jpeg'
import flowDisplay from './../assets/products/flowDisplay.jpeg'

const ProductCategories = () => {
  const categories = [
    {
      title: 'Pipe Fittings Series',
      subtitle: 'Sanitary pipe Fitting Series',
      description: 'Sale up to 50% off',
      image: pipeFitting,
      products: [
        {
          id: 1,
          name: '90-degree angle steel coupling',
          brand: 'steel',
          image: pipe90,
          originalPrice: 515.00,
          salePrice: 1395.00,
          rating: 5,
          isOnSale: true
        },
        {
          id: 2,
          name: 'Tube steel fittings connection pipes',
          brand: 'steel',
          image: steelCoupling,
          originalPrice: 542.00,
          salePrice: 2379.00,
          rating: 5,
          isOnSale: true
        },
        {
          id: 3,
          name: 'Tube fittings',
          brand: 'steel',
          image: tubeFittings,
          originalPrice: 1169.00,
          rating: 5
        }
      ]
    },
    {
      title: 'Gasoline Engine Series',
      subtitle: 'Machinery Gasoline Engines',
      description: 'High-quality hand tools for any pump & many other needs.',
      image: gasolineEngine,
      products: [
        {
          id: 4,
          name: 'Ultra-efficient three-phase asynchronous motor',
          brand: 'STANLEY',
          image: ultraFect,
          originalPrice: 3227.00,
          rating: 5
        },
        {
          id: 5,
          name: 'C-AIR Rotary Screw Air Compressor',
          brand: 'STANLEY',
          image: compressor,
          originalPrice: 45195.00,
          rating: 5
        },
        {
          id: 6,
          name: 'Direct Driven Piston 1.5KW',
          brand: 'GENIUS',
          image: piston,
          originalPrice: 23449.00,
          rating: 5
        }
      ]
    },
    {
      title: 'House Hold Heating Products',
      subtitle: 'Wide Range of House Hold Heating Products',
      description: 'Transform Your Home with the Right Tools.',
      image: houseHold,
      products: [
        {
          id: 7,
          name: 'Manual adjustable Manifolds',
          brand: 'China',
          image: manifolds,
          originalPrice: 3439.00,
          rating: 5
        },
        {
          id: 8,
          name: 'Flow Display Indicator',
          brand: 'China',
          image: flowRateIndicator,
          originalPrice: 1159.00,
          rating: 5
        },
        {
          id: 9,
          name: 'Flow Dislay Separator',
          brand: 'China',
          image: flowDisplay,
          originalPrice: 3890.00,
          rating: 5
        }
      ]
    }
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex flex-col lg:flex-row items-start mb-8">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <div className="w-20 h-1 bg-[#0066cc] mb-4"></div>
                <div
                  className="relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{category.subtitle}</h3>
                      <p className="mb-4">{category.description}</p>
                      <button className="bg-[#0066cc] hover:bg-[#005bb5] text-white px-6 py-2 rounded flex items-center space-x-2">
                        <span>Shop Now</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-8">
                <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
                  {/* Brand logos per index go here */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border">
                  <div className="relative">
                    {product.isOnSale && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                        Sale
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: product.rating }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        {product.salePrice ? (
                          <div>
                            <span className="text-lg font-bold text-[#0066cc]">Ksh{product.salePrice.toLocaleString()}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">Ksh{product.originalPrice.toLocaleString()}</span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold text-[#0066cc]">Ksh{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <button className="bg-[#0066cc] hover:bg-[#005bb5] text-white px-3 py-1 rounded text-xs">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="text-[#0066cc] hover:text-[#005bb5] font-semibold flex items-center space-x-1 mx-auto">
                <span>View More</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCategories
