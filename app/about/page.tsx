"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Menu, X, Award, Target, Heart, Shield, Leaf } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Shield,
      title: "Quality Craftsmanship",
      description:
        "Every piece is 3D printed with precision and critically inspected to ensure your memory is captured perfectly.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description:
        "We use PLA, a biodegradable and bioactive thermoplastic derived from renewable resources like corn starch.",
    },
    {
      icon: Heart,
      title: "Created with Love",
      description: "We treat every photo with the respect it deserves, understanding the emotional value behind your order.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously refine our lithophane generation algorithms and printing techniques for the best details.",
    },
  ]

  const stats = [
    { number: "100+", label: "Happy Customers" },
    { number: "2+", label: "Years Experience" },
    { number: "25+", label: "Products" },
    { number: "99.9%", label: "Customer Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-900">
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
                <Link href="/products" className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-white px-3 py-2 text-sm font-medium"
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
              <Link href="/products">
                <Button className="bg-white text-black hover:bg-zinc-200 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </Button>
              </Link>
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
                <Link href="/products" className="text-zinc-400 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300">
                  Products
                </Link>
                <Link
                  href="/about"
                  className="text-white block px-3 py-2 text-base font-medium"
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
      <section className="pt-24 pb-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Replique Gifts
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              Illuminating your most cherished memories with precision, passion, and advanced 3D printing technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Replique Gifts began with a simple idea: that a photograph is more than just an image; it's a frozen moment of time, an emotion, a memory. We wanted to find a way to bring these memories to life in a tangible, beautiful way.
              </p>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Using cutting-edge lithophane technology and high-quality 3D printing, we transform standard photos into textured masterpieces that reveal their true beauty when illuminated. From our signature Moon Lamps to our portable Magic Keychains, every product is crafted with care to ensure your memories shine bright.
              </p>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <img
                  src="/coverimg.jpeg"
                  alt="Replique Gifts Workshop"
                  className="w-full h-64 object-cover rounded-lg shadow-lg opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              These core principles guide everything we do at Replique Gifts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-zinc-800 bg-zinc-900 group transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-4 rounded-full bg-white w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-zinc-800 bg-zinc-900 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed">
                To create personalized gifts that evoke emotion and connection. We strive to combine art and technology to turn your digital memories into lasting physical treasures that light up lives.
              </p>
            </Card>

            <Card className="p-8 border-zinc-800 bg-zinc-900 shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed">
                To be the leading provider of custom lithophane products, known for innovation, quality, and the ability to "bring light to memories" in homes across the world.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Behind every KLITZO product is a dedicated team of scientists, engineers, and cleaning experts working
            tirelessly to bring you the best solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Johnson", role: "Chief Scientist", image: "/professional-woman-scientist.png" },
              { name: "Michael Chen", role: "Product Development", image: "/professional-engineer.png" },
              { name: "Emily Rodriguez", role: "Quality Assurance", image: "/placeholder-jkvbl.png" },
            ].map((member, index) => (
              <Card
                key={index}
                className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white group transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}

    </div>
  )
}
