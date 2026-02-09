"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Menu, X, Search } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      name: "Magic Moon",
      image: "/magic moon.jpg.jpeg",
      price: "₹1599.00",
      originalPrice: "₹2999.00",
      description: "A premium lithophane creation that transforms your photo into a breathtaking glowing moon.",
      category: "lamps",
      features: [
        "Customized with your photo",
        "Realistic moon texture",
        "Warm LED glow",
        "Includes wooden stand",
        "USB powered"
      ],
      rating: 4.9,
      reviews: 320,
    },
    {
      id: 2,
      name: "Mini Moon",
      image: "/mini moon.png",
      price: "₹449.00",
      originalPrice: "₹899.00",
      description: "A charming night light that hides your cherished photo inside a glowing moon.",
      category: "lamps",
      features: [
        "Compact size",
        "Personalized photo reveal",
        "Battery operated",
        "Perfect gift for any occasion",
        "Soft ambient light"
      ],
      reviews: 156,
    },
    {
      id: 3,
      name: "Magic Keychain",
      image: "/keychain.jpeg",
      price: "₹250.00",
      originalPrice: "₹499.00",
      description: "Turn your favorite photo into a beautiful 3D-printed lithophane keychain.",
      category: "keychains",
      features: [
        "Portable memory",
        "Durable 3D print",
        "Reveals image when held to light",
        "Lightweight design",
        "Custom ring included"
      ],
      reviews: 89
    }
  ]

  const categories = [
    { id: "all", name: "All Products" },
    { id: "lamps", name: "Moon Lamps" },
    { id: "keychains", name: "Keychains" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto md:mt-4 backdrop-blur-md bg-black/80 border-b border-zinc-900 rounded-none md:rounded-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <img src="/rglogo.png" alt="Replique Gifts Logo" className="h-12 w-auto invert" />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link href="/products" className="text-white px-3 py-2 text-sm font-medium">
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-white text-black hover:bg-zinc-200 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Shop Now
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-400 hover:text-white p-2 rounded-md transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden backdrop-blur-md bg-zinc-900/90 border-t border-zinc-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link href="/products" className="text-white block px-3 py-2 text-base font-medium">
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Collection
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              Explore our range of personalized lithophane gifts, crafted to illuminate your most cherished memories.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-black border-b border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-zinc-600"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? "bg-white text-black shadow-lg"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group block"
              >
                <Card
                  className={`p-0 cursor-pointer border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-zinc-900 overflow-hidden transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 bg-zinc-800"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-4 left-4 bg-white text-black font-bold">
                        Save ₹
                        {(
                          Number.parseFloat(product.originalPrice.slice(1)) - Number.parseFloat(product.price.slice(1))
                        ).toFixed(2)}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black hover:bg-zinc-200 scale-90 group-hover:scale-100 border-none inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2">
                      View Details
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-400 mb-4">{product.description}</p>

                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zinc-500">
                          <Sparkles className="h-4 w-4 text-white mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-white text-black px-3 py-1 text-lg">
                          {product.price}
                        </Badge>
                        {product.originalPrice && (
                          <span className="text-zinc-600 line-through text-sm">{product.originalPrice}</span>
                        )}
                      </div>
                      <div
                        className="border border-zinc-700 text-zinc-400 hover:bg-white hover:text-black transition-all duration-300 bg-transparent inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3"
                      >
                        View Product
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-zinc-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}

    </div>
  )
}
