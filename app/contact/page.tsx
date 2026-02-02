"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `📧 *Contact Form Submission*

👤 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

📋 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

Please respond to this inquiry at your earliest convenience.

Thank you!`

    const whatsappUrl = `https://wa.me/919846131001?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9846131001", "Mon-Sat 9AM-6PM"],
      action: "tel:+919846131001",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["repliquegifts@gmail.com"],
      action: "mailto:repliquegifts@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Vengara, Malappuram, Kerala, India"],
      action: null,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 9846131001", "Quick responses 24/7"],
      action: "https://wa.me/919846131001",
    },
  ]

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

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
                  className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white px-3 py-2 text-sm font-medium"
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
                  className="text-zinc-400 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white block px-3 py-2 text-base font-medium"
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
              Contact Us
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              Have questions about your custom order or need help choosing the perfect gift? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-zinc-800 bg-zinc-900 group cursor-pointer transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => info.action && window.open(info.action, "_blank")}
              >
                <div className="p-4 rounded-full bg-white w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`${idx === 0 ? "text-white font-medium" : "text-zinc-400 text-sm"}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card
              className={`p-8 border-zinc-800 bg-zinc-900 shadow-lg transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Send className="h-6 w-6 text-white" />
                  Send us a Message
                </CardTitle>
                <p className="text-zinc-400">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>

              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-zinc-300">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-zinc-300">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-zinc-300">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-zinc-300">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="What's this about?"
                        className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-zinc-300">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      className="mt-1 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full bg-white hover:bg-zinc-200 text-black py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>

                  <div className="text-center text-sm text-zinc-400 bg-zinc-800 p-3 rounded-lg border border-zinc-700">
                    <p>🔒 Your information is secure and will only be used to respond to your inquiry.</p>
                    <p>📱 You'll be redirected to WhatsApp to send your message.</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Card className="p-6 border-zinc-800 bg-zinc-900 shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-zinc-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-zinc-800 bg-zinc-900 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-1">How do I submit my photo?</h4>
                    <p className="text-zinc-400 text-sm">
                      We will contact you via WhatsApp or Email after you place your order to collect your high-quality photo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Are the 3D prints durable?</h4>
                    <p className="text-zinc-400 text-sm">
                      Yes! We use high-quality biodegradable PLA, which is durable and long-lasting when kept away from extreme heat.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">How long does shipping take?</h4>
                    <p className="text-zinc-400 text-sm">
                      Custom products take 2-3 days to create, then 3-5 days for shipping.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-zinc-800 bg-zinc-900 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                <p className="text-zinc-400 mb-4">
                  For urgent inquiries or immediate assistance, reach out to us directly on WhatsApp for the fastest
                  response.
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/919846131001", "_blank")}
                  className="w-full bg-white hover:bg-zinc-200 text-black rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
