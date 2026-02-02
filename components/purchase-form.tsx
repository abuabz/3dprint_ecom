"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingCart, User, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

interface PurchaseFormProps {
  product: {
    id: number
    name: string
    price: string
    image: string
  }
  quantity: number
  onClose?: () => void
}

export default function PurchaseForm({ product, quantity, onClose }: PurchaseFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    place: "",
    post: "",
    district: "",
    landmark: "",
    pincode: "",
    notes: "",
    cashOnDelivery: false,
  })

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePurchase = () => {
    const basePrice = Number.parseFloat(product.price.slice(1)) * quantity
    const totalPrice = (basePrice + (formData.cashOnDelivery ? 50 : 0)).toFixed(2)

    const message = `🛒 *Replique Gifts Order*

📦 *Product Details:*
• Product: ${product.name}
• Price: ${product.price} each
• Quantity: ${quantity}
• Cash on Delivery: ${formData.cashOnDelivery ? "Yes (+₹50)" : "No"}
• Total Amount: ₹${totalPrice}

👤 *Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}

📍 *Delivery Address:*
• Address: ${formData.address}
• Place: ${formData.place}
• Post: ${formData.post}
• District: ${formData.district}
• Landmark: ${formData.landmark}
• PIN Code: ${formData.pincode}

${formData.notes ? `📝 *Additional Notes:*\n${formData.notes}\n\n` : ""}Please confirm this order and let me know the payment details (if prepaid) and delivery timeline.

Thank you! 🙏`

    const whatsappUrl = `https://wa.me/919846131001?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    if (onClose) {
      onClose()
    }
  }

  // All new fields are required
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.address.trim() !== "" &&
    formData.place.trim() !== "" &&
    formData.post.trim() !== "" &&
    formData.district.trim() !== "" &&
    formData.landmark.trim() !== "" &&
    formData.pincode.trim() !== ""

  return (
    <Card className="w-full max-w-2xl bg-white mx-auto border-zinc-200 shadow-xl">
      <CardHeader className="text-center bg-zinc-50 rounded-t-xl border-b border-zinc-100 pb-8">
        <CardTitle className="text-2xl font-bold text-black flex items-center justify-center gap-2">
          <ShoppingCart className="h-6 w-6 text-black" />
          Complete Your Order
        </CardTitle>
        <p className="text-zinc-500">Fill in your details to proceed with WhatsApp order</p>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Order Summary */}
        <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100">
          <h3 className="font-semibold text-black mb-3">Order Summary</h3>
          <div className="flex items-center gap-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-16 h-16 object-contain rounded-lg bg-white p-2 border border-zinc-200"
            />
            <div className="flex-1">
              <h4 className="font-medium text-black">{product.name}</h4>
              <p className="text-zinc-600">Quantity: {quantity}</p>
              <p className="text-lg font-bold text-black">
                Total: ₹{(Number.parseFloat(product.price.slice(1)) * quantity + (formData.cashOnDelivery ? 50 : 0)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <User className="h-5 w-5 text-black" />
            <h3 className="text-lg font-semibold text-black">Customer Information</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-zinc-700">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 border-zinc-300 focus:ring-black"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-zinc-700">Phone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}

                className="mt-1 border-zinc-300 focus:ring-black"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-black" />
            <h3 className="text-lg font-semibold text-black">Delivery Address</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="address" className="text-zinc-700">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Address"
                className="mt-1 border-zinc-300 focus:ring-black"
              />
            </div>

            <div>
              <Label htmlFor="place" className="text-zinc-700">Place *</Label>
              <Input
                id="place"
                value={formData.place}
                onChange={(e) => handleInputChange("place", e.target.value)}
                placeholder="Village / Town / Area"
                className="mt-1 border-zinc-300 focus:ring-black"
              />
            </div>

            <div>
              <Label htmlFor="post" className="text-zinc-700">Post *</Label>
              <Input
                id="post"
                value={formData.post}
                onChange={(e) => handleInputChange("post", e.target.value)}
                placeholder="Post Office"
                className="mt-1 border-zinc-300 focus:ring-black"
              />
            </div>

            <div>
              <Label htmlFor="district" className="text-zinc-700">District *</Label>
              <Input
                id="district"
                value={formData.district}
                onChange={(e) => handleInputChange("district", e.target.value)}
                placeholder="District"
                className="mt-1 border-zinc-300 focus:ring-black"
              />
            </div>

            <div>
              <Label htmlFor="landmark" className="text-zinc-700">Landmark *</Label>
              <Input
                id="landmark"
                value={formData.landmark}
                onChange={(e) => handleInputChange("landmark", e.target.value)}
                placeholder="Nearby landmark"
                className="mt-1 border-zinc-300 focus:ring-black"
              />
            </div>

            <div>
              <Label htmlFor="pincode" className="text-zinc-700">Pin code *</Label>
              <Input
                id="pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                placeholder="e.g., 680001"
                className="mt-1 border-zinc-300 focus:ring-black"
                type="number"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="notes" className="text-zinc-700">Additional Notes (Optional)</Label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Any special instructions, alternate phone, delivery time preference..."
              className="mt-1 border-zinc-300 focus:ring-black"
            />
          </div>
        </div>



        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            onClick={handlePurchase}
            disabled={!isFormValid}
            className="flex-1 bg-black hover:bg-zinc-800 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Order via WhatsApp
          </Button>
          {onClose && (
            <Button
              onClick={onClose}
              variant="outline"
              className="border-zinc-300 text-zinc-600 hover:bg-zinc-100 py-6 rounded-full transition-all duration-300"
            >
              Cancel
            </Button>
          )}
        </div>

        <div className="text-center text-sm text-zinc-500 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
          <p>🔒 Your information is secure and will only be used to process your order.</p>
          <p>📱 You'll be redirected to WhatsApp to complete your purchase.</p>
        </div>
      </CardContent>
    </Card>
  )
}