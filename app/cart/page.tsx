"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, Trash2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
  {
    id: 1,
    name: "Vestido Floral Verano",
    price: 1850,
    image: "https://source.unsplash.com/60x80/?floral,dress",  // Imagen vestido floral verano
    quantity: 1,
    size: "M",
  },
  {
    id: 3,
    name: "Jeans Premium Stretch",
    price: 1650,
    image: "https://source.unsplash.com/60x80/?jeans,denim",  // Imagen jeans premium stretch
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
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Carrito", href: "/cart", active: true },
          ]}
        />

        <h1 className="text-3xl font-bold mt-8">Tu Carrito</h1>

        {cartItems.length === 0 ? (
          <div className="mt-12 text-center py-16 bg-gray-50 rounded-lg">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-300" />
            <h2 className="mt-4 text-xl font-semibold">Tu carrito está vacío</h2>
            <p className="mt-2 text-gray-500">¡Explora nuestra tienda y añade productos!</p>
            <Button asChild className="mt-6 bg-pink-500 hover:bg-pink-600">
              <Link href="/shop">Continuar Comprando</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Productos ({cartItems.length})</CardTitle>
                </CardHeader>
                <CardContent className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex py-4 first:pt-0 last:pb-0">
                      <div className="h-24 w-24 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-base font-medium">{item.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">Talla: {item.size}</p>
                          </div>
                          <p className="text-base font-medium">RD$ {item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border rounded">
                            <button
                              className="px-3 py-1 text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button
                              className="px-3 py-1 text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <button className="text-gray-500 hover:text-red-500" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/shop">Continuar Comprando</Link>
                  </Button>
                  <Button variant="ghost" onClick={() => setCartItems([])}>
                    Vaciar Carrito
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span>RD$ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Envío</span>
                    <span>RD$ {shipping.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>RD$ {total.toLocaleString()}</span>
                  </div>

                  <div className="pt-4">
                    <Label htmlFor="coupon">Código de Descuento</Label>
                    <div className="flex mt-1">
                      <Input id="coupon" placeholder="Ingresa tu código" className="rounded-r-none" />
                      <Button variant="secondary" className="rounded-l-none">
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600">
                    Proceder al Pago
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-4 text-sm text-gray-500">
                <p>
                  Al proceder con tu compra, aceptas nuestros{" "}
                  <Link href="/terms" className="text-pink-500 hover:underline">
                    Términos y Condiciones
                  </Link>{" "}
                  y{" "}
                  <Link href="/privacy" className="text-pink-500 hover:underline">
                    Política de Privacidad
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

