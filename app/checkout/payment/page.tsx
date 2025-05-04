"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { getCart, getCartTotal, clearCart } from "@/lib/client-storage"
import Image from "next/image"
import { CreditCard, Building, CheckCircle2 } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [paymentTab, setPaymentTab] = useState("card")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const cart = typeof window !== "undefined" ? getCart() : []
  const subtotal = getCartTotal()
  const shipping = subtotal > 5000 ? 0 : 250
  const total = subtotal + shipping

  const handlePayment = () => {
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      // Clear cart after successful payment
      clearCart()

      // Show success toast
      toast({
        title: "¡Pago completado!",
        description: "Tu pedido ha sido procesado correctamente.",
      })

      // Redirect to success page after a delay
      setTimeout(() => {
        router.push("/checkout/success")
      }, 2000)
    }, 2000)
  }

  if (success) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
          <div className="max-w-md mx-auto text-center py-12">
            <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">¡Pago completado!</h1>
            <p className="text-gray-500 mb-6">
              Tu pedido ha sido procesado correctamente. Redirigiendo a la página de confirmación...
            </p>
            <div className="animate-pulse">
              <div className="h-2 w-24 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Carrito", href: "/cart" },
            { label: "Información", href: "/checkout" },
            { label: "Pago", href: "/checkout/payment", active: true },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Método de Pago</h1>
                <p className="text-gray-500 mt-1">Selecciona tu método de pago preferido</p>
              </div>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="payment-card" />
                    <Label htmlFor="payment-card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-5 w-5 text-gray-500" />
                      Tarjeta de Crédito/Débito
                    </Label>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="payment-bank" />
                    <Label htmlFor="payment-bank" className="flex items-center gap-2 cursor-pointer">
                      <Building className="h-5 w-5 text-gray-500" />
                      Transferencia Bancaria
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              <Tabs value={paymentTab} onValueChange={setPaymentTab} className="mt-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="card">Tarjeta</TabsTrigger>
                  <TabsTrigger value="bank">Transferencia</TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="space-y-6 mt-6">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="border rounded-md p-2 w-16 h-10 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=30&width=50&text=Visa" alt="Visa" width={50} height={30} />
                    </div>
                    <div className="border rounded-md p-2 w-16 h-10 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=30&width=50&text=MC"
                        alt="Mastercard"
                        width={50}
                        height={30}
                      />
                    </div>
                    <div className="border rounded-md p-2 w-16 h-10 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=30&width=50&text=Amex"
                        alt="American Express"
                        width={50}
                        height={30}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Número de Tarjeta</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Fecha de Expiración</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nombre en la Tarjeta</Label>
                      <Input id="card-name" placeholder="Nombre completo" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bank" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="border rounded-md p-2 h-12 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=40&width=120&text=Banreservas"
                          alt="Banreservas"
                          width={120}
                          height={40}
                        />
                      </div>
                      <div className="border rounded-md p-2 h-12 flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=40&width=120&text=Popular"
                          alt="Banco Popular"
                          width={120}
                          height={40}
                        />
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Información Bancaria</CardTitle>
                        <CardDescription>Realiza una transferencia a cualquiera de estas cuentas</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <p className="font-medium">Banco Popular Dominicano</p>
                          <p className="text-sm">Cuenta: 123456789</p>
                          <p className="text-sm">Titular: iDivas SRL</p>
                          <p className="text-sm">RNC: 123456789</p>
                        </div>

                        <Separator />

                        <div className="space-y-1">
                          <p className="font-medium">Banreservas</p>
                          <p className="text-sm">Cuenta: 987654321</p>
                          <p className="text-sm">Titular: iDivas SRL</p>
                          <p className="text-sm">RNC: 123456789</p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start">
                        <p className="text-sm text-gray-500 mb-4">
                          Después de realizar la transferencia, por favor envía el comprobante a info@idivas.com o sube
                          una foto del mismo a continuación.
                        </p>
                        <Input type="file" className="mb-2" />
                        <p className="text-xs text-gray-500">Formatos aceptados: JPG, PNG, PDF. Tamaño máximo: 5MB</p>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => router.push("/checkout")}>
                  Volver
                </Button>
                <Button className="bg-pink-500 hover:bg-pink-600" onClick={handlePayment} disabled={loading}>
                  {loading ? "Procesando..." : "Completar Pago"}
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between">
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-medium">{item.quantity}x</span>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Talla: {item.size}</p>
                        </div>
                      </div>
                      <span className="text-sm">RD$ {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">RD$ {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Envío</span>
                    <span className="text-sm">{shipping === 0 ? "Gratis" : `RD$ ${shipping}`}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>RD$ {total}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  )
}

