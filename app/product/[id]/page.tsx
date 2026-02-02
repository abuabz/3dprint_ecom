"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Menu, X, Star, Minus, Plus, ShoppingCart, Heart, Share2, ArrowLeft, Clock, LucideFolderSync } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import PurchaseForm from "@/components/purchase-form"

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)

  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showPurchaseForm, setShowPurchaseForm] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      name: "Magic Moon",
      images: ["/magic moon.jpg.jpeg"],
      price: "₹1599.00",
      originalPrice: "₹2999.00",
      description: "A premium lithophane creation that transforms your photo into a breathtaking glowing moon.",
      longDescription: "Capture your most precious memories in the soft glow of our Magic Moon. This premium lithophane lamp is custom-printed with your favorite photo, revealing it in stunning detail when illuminated. It serves as a beautiful decor piece by day and a magical memory display by night.",
      category: "lamps",
      features: [
        "Customized with your personal photo",
        "Realistic moon surface texture",
        "Warm, soothing LED light",
        "Includes a stylish wooden stand",
        "USB powered for convenience"
      ],
      specifications: {
        Material: "Eco-friendly PLA",
        Size: "15cm Diameter",
        LightSource: "Warm White LED",
        Power: "USB (Cable included)",
        Base: "Wooden Stand"
      },
      safetyAndUsageNotes: [
        "Keep away from direct heat sources.",
        "Clean gently with a dry or slightly damp cloth.",
        "Do not submerge in water.",
        "Ensure USB port is dry before connecting."
      ],
      applicationGuide: [
        "Bedroom night light",
        "Living room decor",
        "Romantic gift",
        "Memorial keepsake"
      ],
      howToUse: [
        "Place the moon on the wooden stand.",
        "Connect the USB cable to a power source.",
        "Switch entirely on to see your photo reveal.",
        "Enjoy the magical glow!"
      ],
      rating: 4.9,
      reviews: 320,
      inStock: true,
      freeShipping: true,
    },
    {
      id: 2,
      name: "Mini Moon",
      images: ["/mini moon.png"],
      price: "₹449.00",
      originalPrice: "₹899.00",
      description: "A charming night light that hides your cherished photo inside a glowing moon.",
      longDescription: "The Mini Moon is a compact version of our classic Magic Moon, perfect for small spaces or as a thoughtful little gift. Despite its size, it packs the same emotional punch, revealing your hidden photo when the light is turned on.",
      category: "lamps",
      features: [
        "Compact and portable size",
        "Surprise photo reveal technology",
        "Battery operated for wire-free placement",
        "Ideal for desks, shelves, or bedside tables",
        "Soft ambient lighting"
      ],
      specifications: {
        Material: "PLA",
        Size: "8cm Diameter",
        LightSource: "LED",
        Power: "Button cell batteries (included)",
        Base: "Integrated base"
      },
      safetyAndUsageNotes: [
        "Contains small batteries - keep away from small children.",
        "Do not expose to high heat.",
        "Replace batteries when light dims."
      ],
      applicationGuide: [
        "Stocking stuffer",
        "Desk accessory",
        "Kids' night light",
        "Token of appreciation"
      ],
      howToUse: [
        "Remove the battery insulation tab if present.",
        "Flip the switch at the bottom to turn on.",
        "Watch your memory glow!",
        "Turn off when not in use to save battery."
      ],
      rating: 4.8,
      reviews: 156,
      inStock: true,
      freeShipping: false,
    },
    {
      id: 3,
      name: "Magic Keychain",
      images: ["/keychain.jpeg"],
      price: "₹250.00",
      originalPrice: "₹499.00",
      description: "Turn your favorite photo into a beautiful 3D-printed lithophane keychain.",
      longDescription: "Carry your memories wherever you go with our Magic Keychain. This durable 3D-printed accessory looks like a textured abstract shape until you hold it up to the light/sun, revealing your photo in amazing detail.",
      category: "keychains",
      features: [
        "Portable memory – always with you",
        "Durable and lightweight PLA material",
        "Magical photo reveal effect against light",
        "Comes with a sturdy metal ring",
        "Unique conversation starter"
      ],
      specifications: {
        Material: "High-strength PLA",
        Size: "5cm x 4cm (approx)",
        Weight: "Lightweight (<20g)",
        RingType: "Standard Split Ring",
        "PhotoType": "Lithophane (Light-revealed)"
      },
      safetyAndUsageNotes: [
        "Avoid bending with excessive force.",
        "Clean with water and mild soap if needed.",
        "Do not leave in a hot car dashboard."
      ],
      applicationGuide: [
        "Personal keychain",
        "Bag charm",
        "Gift tag",
        "Party favor"
      ],
      howToUse: [
        "Attach to your keys or bag.",
        "To view the photo, hold the keychain up towards a light source (sun, bulb, phone flashlight).",
        "See the image appear clearly!"
      ],
      rating: 4.7,
      reviews: 89,
      inStock: true,
      freeShipping: false
    }
  ]

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handlePurchase = () => {
    setShowPurchaseForm(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {showPurchaseForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99] p-4">
          <div className="max-h-[90vh] overflow-y-auto ">
            <PurchaseForm
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
              }}
              quantity={quantity}
              onClose={() => setShowPurchaseForm(false)}
            />
          </div>
        </div>
      )}

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

      <section className="pt-20 pb-4 px-4 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-black transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-zinc-800 font-medium">{product.name}</span>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center mt-4 text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
                <div className="flex space-x-4 overflow-scroll overflow-y-hidden   md:overflow-x-auto max-w-[90vw] py-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                        ? "border-teal-500 shadow-lg"
                        : "border-slate-200 hover:border-slate-300"
                        }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  {product.inStock && <Badge className="bg-green-100 text-green-800 border-none">In Stock</Badge>}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-black">{product.name}</h1>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-black">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-zinc-400 line-through">{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-zinc-100 text-zinc-800 border-zinc-200">
                      Save ₹
                      {(
                        Number.parseFloat(product.originalPrice.slice(1)) - Number.parseFloat(product.price.slice(1))
                      ).toFixed(2)}
                    </Badge>
                  )}
                </div>

                <p className="text-lg text-zinc-600 leading-relaxed">{product.description}</p>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black">Key Features:</h3>
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Sparkles className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                        <span className="text-zinc-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-black">Quantity:</span>
                    <div className="flex items-center border border-zinc-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-zinc-100 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-black" />
                      </button>
                      <span className="px-4 py-2 text-lg font-semibold text-black">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-zinc-100 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-black" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handlePurchase}
                      size="lg"
                      className="flex-1 bg-black hover:bg-zinc-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Buy Now - ₹{(Number.parseFloat(product.price.slice(1)) * quantity).toFixed(2)}
                    </Button>
                    <Button
                      onClick={() => {
                        if (navigator.share) {
                          navigator
                            .share({
                              title: product.name,
                              text: product.description,
                              url: window.location.href,
                            })
                            .catch((error) => console.log("Error sharing", error))
                        }
                      }}
                      variant="outline"
                      size="lg"
                      className="border-2 border-zinc-200 text-zinc-600 hover:bg-zinc-50 px-6 py-4 rounded-full transition-all duration-300 bg-transparent"
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>

                  {product.freeShipping && (
                    <div className="space-y-2">
                      <div className="flex items-center text-zinc-800 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                        <LucideFolderSync className="h-5 w-5 mr-2" />
                        <span className="font-medium  text-sm ">100% Money-Back Guarantee within 5-Days</span>
                      </div>
                      <div className="flex items-center text-zinc-800 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                        <Clock className="h-5 w-5 mr-2" />
                        <span className="font-medium text-sm ">Free Shipping on prepaid orders</span>
                      </div>
                      <div className="flex items-center text-zinc-800 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        <span className="font-medium text-sm ">₹50 COD Fee for Cash on Delivery</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cfols-2 gap-8">
            <Card className="p-6 bg-zinc-50 border-zinc-200">
              <h3 className="text-2xl font-bold text-black mb-4">Product Description</h3>
              <p className="text-zinc-600 leading-relaxed mb-6 text-justify">{product.longDescription}</p>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-black">All Features:</h4>
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Sparkles className="h-5 w-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-zinc-50 border-zinc-200">
              <h3 className="text-2xl font-bold text-black mb-4">Specifications</h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-zinc-200 last:border-b-0">
                    <span className="font-medium text-zinc-700">{key}:</span>
                    <span className="text-black font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6 bg-zinc-50 border-zinc-200">
              <h3 className="text-2xl font-bold text-black mb-4">How to Use</h3>
              <div className="space-y-2 text-zinc-600">
                <ol className="list-decimal pl-5 space-y-1">
                  {product.howToUse.map((step, index) => (
                    <li key={index}>  {step}</li>
                  ))}
                </ol>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="p-6 bg-zinc-50 border-zinc-200">
              <h3 className="text-2xl font-bold text-black mb-4">Safety & Usage Notes</h3>
              <div className="space-y-2 text-zinc-600">
                <ul className="list-disc pl-5 space-y-1">
                  {product.safetyAndUsageNotes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-zinc-50 border-zinc-200">
              <h3 className="text-2xl font-bold text-black mb-4">Application Guide</h3>
              <div className="space-y-2 text-zinc-600">
                <ul className="list-none space-y-1">
                  {product.applicationGuide.map((app, index) => (
                    <li key={index}>
                      <span className="text-black mr-2">•</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>


          </div>
        </div>
      </section>
    </div>
  )
}