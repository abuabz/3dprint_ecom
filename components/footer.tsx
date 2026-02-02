import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"

export default function Footer() {
  return (
    <>
      {/* Footer CTA */}
      {/* Footer CTA */}
      <section className="py-16 px-4 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Illuminate Your Memories?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            Join our community of happy customers who have transformed their moments into glowing lithophanes.
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-zinc-800 px-12 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 font-semibold"
            >
              Shop All Products
              <Car className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Beautiful Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <img src="/rglogo.png" alt="Replique Gifts" className="h-16 w-auto mb-4 invert" />
                <p className="text-zinc-400 leading-relaxed mt-4">
                  REPLIQUE GIFTS - Bringing your memories to life with premium 3D printed lithophanes. Illuminate your moments.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="https://maps.app.goo.gl/VYZmvZxfDiLiESZJ7" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
                <a href="tel:+919846131001" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
                <a href="mailto:repliquegifts@gmail.com" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a href="https://www.instagram.com/replique_gifts?igsh=MW50ZjJ4ZDVqaGI3aQ==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth={2} stroke="currentColor" fill="none" />
                    <circle cx="12" cy="12" r="5" strokeWidth={2} stroke="currentColor" fill="none" />
                    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Products</h3>
              <ul className="space-y-3">
                <Link href="/product/1">
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                      Magic Moon
                    </a>
                  </li>
                </Link>
                <Link href="/product/2">
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                      Mini Moon
                    </a>
                  </li>
                </Link>
                <Link href="/product/3">
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
                      Magic Keychain
                    </a>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 text-zinc-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-zinc-400 text-sm">
                    Vengara, Malappuram
                    <br />
                    Kerala, India
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-zinc-400 text-sm">+91 9846131001</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-zinc-400 text-sm"> repliquegifts@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-zinc-400 text-sm">
                    Mon - Fri: 9AM - 6PM
                    <br />
                    Sat: 10AM - 4PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-zinc-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-zinc-500 text-sm">© 2024 REPLIQUE GIFTS. All rights reserved. | Memories Illuminated</p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
