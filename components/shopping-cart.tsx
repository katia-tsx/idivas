"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)

  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Vestido Floral Verano",
      price: 1850,
      image: "/placeholder.svg?height=80&width=60",
      quantity: 1,
      size: "M",
    },
    {
      id: 3,
      name: "Jeans Premium Stretch",
      price: 1650,
      image: "/placeholder.svg?height=80&width=60",
      quantity: 1,
      size: "S",
    },
  ])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 250 : 0
  const total = subtotal + shipping

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {cartItems.length > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-pink-500">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </Badge>
          )}
          <span className="sr-only">Carrito de compras</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Carrito de Compras</SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <ShoppingBag className="h-12 w-12 text-gray-300" />
            <div className="text-center">
              <h3 className="font-medium text-lg">Tu carrito está vacío</h3>
              <p className="text-sm text-gray-500 mt-1">¡Explora nuestra tienda y añade productos!</p>
            </div>
            <Button className="mt-4 bg-pink-500 hover:bg-pink-600" onClick={() => setIsOpen(false)}>
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-auto py-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex py-4">
                  <div className="h-20 w-20 rounded-md overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="mt-1 text-xs text-gray-500">Talla: {item.size}</p>
                      </div>
                      <p className="text-sm font-medium">RD$ {item.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border rounded">
                        <button
                          className="px-2 py-1 text-gray-600"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-2 py-1">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-gray-600"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button className="text-gray-500 hover:text-red-500" onClick={() => removeItem(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>RD$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Envío</span>
                  <span>RD$ {shipping.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>RD$ {total.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600">Proceder al Pago</Button>
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                Continuar Comprando
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

