"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Shield, Car, Home, Shirt, Menu, X, Phone, Mail, MapPin, Clock, Send, Timer } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function KlitzoLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFeature, setOpenFeature] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Sparkles, text: "Uniquely Personalized", content: "Custom-made lithophanes that reveal your personal memories when illuminated.", delay: "0ms" },
    { icon: Zap, text: "High-Quality 3D Print", content: "Precision crafted using premium PLA materials for realistic textures and durability.", delay: "200ms" },
    { icon: Shield, text: "Emotional Value", content: "More than just a gift—it’s a memory brought to life.", delay: "400ms" },
    { icon: Home, text: "Perfect Home Décor", content: "Adds a magical, ambient glow to any room, bedside, or desk.", delay: "600ms" },
    { icon: Timer, text: "Long-Lasting LED", content: "Energy-efficient warm LED lights that last for hours of glowing memories.", delay: "800ms" },
    { icon: Shirt, text: "Versatile Gifting", content: "Ideal for anniversaries, birthdays, weddings, or just because.", delay: "800ms" },
  ]

  const products = [
    {
      id: 1,
      name: "Magic Moon",
      image: "/magic moon.jpg.jpeg",
      price: "₹1599.00",
      originalPrice: "",
      description: "A premium lithophane creation that transforms your photo into a breathtaking glowing moon.",
      category: "lamps",
      features: [
        "Fully customizable with your photo",
        "Stunning moon-like surface texture",
        "Creates a magical, ambient glow",
        "Material: High-quality 3D-printed lithophane",
        "Available in 12, 14, 16, 18 cm",
      ],
      reviews: 124,
    },
    {
      id: 2,
      name: "Mini Moon",
      image: "/mini moon.png",
      price: "₹449.00",
      originalPrice: "",
      description: "A charming night light that hides your cherished photo inside a glowing moon.",
      category: "lamps",
      features: [
        "Custom-made with your personal photo",
        "Soft, calming light—perfect for night use",
        "Compact and aesthetic design",
        "Diameter: 4.5 cm",
        "Long-lasting and energy efficient",
      ],
      reviews: 98,
    },
    {
      id: 3,
      name: "Magic Keychain",
      image: "/keychain.jpeg",
      price: "₹250.00",
      originalPrice: "",
      description: "Turn your favorite photo into a beautiful 3D-printed lithophane keychain.",
      category: "keychains",
      features: [
        "Fully customizable with your photo",
        "Reveals image beautifully under light",
        "Lightweight and durable",
        "Size: 35 × 45 mm",
        "finish: Smooth, matte white",
      ],
      reviews: 215,
    }
  ]
  const mainproducts = [
    {
      id: 1,
      name: "Magic Moon",
      image: "/magic moon.jpg.jpeg",
      price: "₹1599.00",
      originalPrice: "",
      description: "A premium lithophane creation that transforms your photo into a breathtaking glowing moon.",
      category: "lamps",
      features: [
        "Fully customizable with your photo",
        "Stunning moon-like surface texture",
        "Creates a magical, ambient glow",
        "Material: High-quality 3D-printed lithophane",
        "Available in 12, 14, 16, 18 cm",
      ],
      reviews: 124,
    },
    {
      id: 3,
      name: "Magic Keychain",
      image: "/keychain.jpeg",
      price: "₹250.00",
      originalPrice: "",
      description: "Turn your favorite photo into a beautiful 3D-printed lithophane keychain.",
      category: "keychains",
      features: [
        "Fully customizable with your photo",
        "Reveals image beautifully under light",
        "Lightweight and durable",
        "Size: 35 × 45 mm",
        "finish: Smooth, matte white",
      ],
      reviews: 215,
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto md:mt-4 backdrop-blur-xl bg-white/80 md:bg-white/10 border-b border-white/20 shadow-lg rounded-none md:rounded-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img src="/rglogo.png" alt="Replique Gifts Logo" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-zinc-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-zinc-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-zinc-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-zinc-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link href="/product/1">
                <Button className="bg-black text-white hover:bg-zinc-800 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 hover:text-teal-600 p-2 rounded-md transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-zinc-100 shadow-xl animate-in slide-in-from-top-5 duration-300">
              <div className="flex flex-col p-4 space-y-4">
                <Link
                  href="/"
                  className="text-zinc-600 hover:text-black px-4 py-3 text-lg font-medium transition-colors duration-300 rounded-xl hover:bg-zinc-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-zinc-600 hover:text-black px-4 py-3 text-lg font-medium transition-colors duration-300 rounded-xl hover:bg-zinc-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-zinc-600 hover:text-black px-4 py-3 text-lg font-medium transition-colors duration-300 rounded-xl hover:bg-zinc-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-zinc-600 hover:text-black px-4 py-3 text-lg font-medium transition-colors duration-300 rounded-xl hover:bg-zinc-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-zinc-100">
                  <Link href="/product/1" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-black text-white hover:bg-zinc-800 py-6 text-lg rounded-xl shadow-lg">
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zinc-100 rounded-full animate-pulse opacity-50"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-zinc-200 rounded-full animate-bounce opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-zinc-100 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-zinc-200 rounded-full animate-bounce opacity-30"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Vertical animated lines */}
        <div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 to-transparent animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Hero Section */}
      {/* Hero Section - 2 Products Side-by-Side on ALL Devices (including Mobile) */}
      <section className="relative min-h-screen flex items-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/coverimg.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Hero Text */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
                  Memories, <span className="text-zinc-500">Illuminated.</span>
                </h1>
              </div>

              <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-600 font-light max-w-2xl mx-auto lg:mx-0">
                  Transform your favorite photos into breathtaking glowing lithophanes. A premium gift that holds emotions like no other.
                </p>
              </div>

              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/product/1">
                    <Button size="lg" className="bg-black text-white hover:bg-zinc-800 px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                      Shop Collection <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Two Product Cards - Always Side by Side (Even on Mobile) */}
            <div className="order-1 lg:order-2">
              {/* <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {mainproducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transform transition-all duration-1000 delay-${700 + index * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                      }`}
                  >
                    <Card className="group bg-white/95 backdrop-blur-xl border-0 py-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl overflow-hidden">
                      <div className="relative bg-zinc-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <CardContent className="p-1 sm:p-2 text-center space-y-3">
                        <h3 className="text-[10px] whitespace-nowrap sm:text-[15px] font-bold text-zinc-900 line-clamp-2">
                          {product.name}
                        </h3>

                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-xl font-bold text-black">{product.price}</span>
                          <span className="text-xs sm:text-md text-zinc-400 line-through">{product.originalPrice}</span>
                        </div>

                        <Link href={`/product/${product.id}`}>
                          <Button className="w-full bg-black cursor-pointer hover:bg-zinc-800 text-white rounded-full text-sm sm:text-base py-1 sm:py-4 font-medium transform hover:scale-105 transition-all duration-300">
                            Buy Now
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
            Why Choose{" "}
            <span className="text-zinc-500">Replique Gifts</span>?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                style={{ transitionDelay: feature.delay }}
              >
                <Card onClick={() => setOpenFeature(openFeature === index ? null : index)} className=" p-6 pb-0  cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-zinc-50 group ">
                  <CardContent className="flex items-center space-x-4 p-0">
                    <div className="p-3 rounded-full bg-black group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-zinc-800 group-hover:text-black transition-colors">
                      {feature.text}
                    </p>
                  </CardContent>
                  {/* Feature content collapsible with smooth transition */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${openFeature === index ? "max-h-40 opacity-100 " : "max-h-0 opacity-0 mt-0 "}`}
                  >
                    <p className="text-xs pb-6 font-semibold text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">
                      {feature.content}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
            Our{" "}
            <span className="text-zinc-500">Products</span>
          </h2>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <div className="w-full overflow-x-auto scrollbar-hide">
            {/* Hide scrollbar but keep functionality */}
            <style jsx>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>

            <div className="flex gap-4 sm:gap-6 lg:gap-8 px-4 py-6 min-w-max">
              {/* min-w-max prevents compression */}
              {products.map((product, index) => (
                <Link href={`/product/${product.id}`}>
                  <div
                    key={product.id}
                    className="flex-none w-[280px] sm:w-[330px] lg:w-[360px]"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card
                      className={` group py-0 gap-0 cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white overflow-hidden transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >

                      {/* Your existing card content (image, badge, button, etc.) */}
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-auto sm:h-auto max-h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.originalPrice && (
                          <Badge className="absolute top-4 left-4 bg-black text-white text-xs">
                            SALE
                          </Badge>
                        )}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Link href={`/product/${product.id}`}>
                          <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white hover:bg-zinc-800 scale-90 group-hover:scale-100">
                            View Details
                          </Button>
                        </Link>
                      </div>


                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-zinc-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="hidden sm:flex flex-col gap-2 mb-4">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-zinc-600">
                              <Sparkles className="h-4 w-4 text-black mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-black text-white text-sm px-3">
                              {product.price}
                            </Badge>
                            {product.originalPrice && (
                              <span className="text-zinc-400 line-through text-sm">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <Link href={`/product/${product.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="hidden sm:block border-black text-black hover:bg-black hover:text-white"
                            >
                              View Product
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get in Touch</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Have questions about our personalized lithophane products? We're here to help you create the perfect gift.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-black rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <p className="text-slate-600">+91 9846131001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-black rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-slate-600">repliquegifts@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-black rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Address</p>
                      <p className="text-slate-600">Vengara, Malappuram, Kerala, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-black rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Business Hours</p>
                      <p className="text-slate-600">
                        Mon - Fri: 9AM - 6PM
                        <br />
                        Sat: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = new FormData(e.currentTarget as HTMLFormElement)
                  const first = (form.get("first") || "").toString().trim()
                  const last = (form.get("last") || "").toString().trim()
                  const email = (form.get("email") || "").toString().trim()
                  const phone = (form.get("phone") || "").toString().trim()
                  const subject = (form.get("subject") || "").toString().trim()
                  const message = (form.get("message") || "").toString().trim()

                  const text = [
                    "New message from Replique Gifts website:",
                    `First Name: ${first}`,
                    `Last Name: ${last}`,
                    `Email: ${email}`,
                    `Phone: ${phone}`,
                    `Subject: ${subject}`,
                    `Message: ${message}`,
                  ].join("\n")

                  // WhatsApp number in international format without plus: 919846131001
                  const waNumber = "919846131001"
                  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`

                  window.open(waUrl, "_blank")
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      name="first"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      name="last"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Product Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your custom gift needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-zinc-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
