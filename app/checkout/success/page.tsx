"use client"

import { useEffect, useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Package, Truck, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState("")

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">¡Gracias por tu compra!</h1>
            <p className="text-gray-500">Tu pedido ha sido recibido y está siendo procesado.</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Detalles del Pedido</CardTitle>
              <CardDescription>
                Pedido #{orderNumber} • {new Date().toLocaleDateString("es-DO")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Estado del Pedido</h3>
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <div className="text-center flex-1">
                      <div className="rounded-full bg-pink-500 text-white w-8 h-8 mx-auto flex items-center justify-center">
                        <ShoppingBag className="h-4 w-4" />
                      </div>
                      <p className="text-xs mt-1">Confirmado</p>
                    </div>
                    <div className="text-center flex-1">
                      <div className="rounded-full bg-gray-200 text-gray-500 w-8 h-8 mx-auto flex items-center justify-center">
                        <Package className="h-4 w-4" />
                      </div>
                      <p className="text-xs mt-1">Procesando</p>
                    </div>
                    <div className="text-center flex-1">
                      <div className="rounded-full bg-gray-200 text-gray-500 w-8 h-8 mx-auto flex items-center justify-center">
                        <Truck className="h-4 w-4" />
                      </div>
                      <p className="text-xs mt-1">Enviado</p>
                    </div>
                    <div className="text-center flex-1">
                      <div className="rounded-full bg-gray-200 text-gray-500 w-8 h-8 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p className="text-xs mt-1">Entregado</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200">
                    <div className="h-full bg-pink-500 w-[12.5%]"></div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Información de Envío</h3>
                  <p className="text-sm">María Rodríguez</p>
                  <p className="text-sm">Calle Principal #123</p>
                  <p className="text-sm">Santo Domingo, República Dominicana</p>
                  <p className="text-sm">+1 (809) 123-4567</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Método de Pago</h3>
                  <p className="text-sm">Tarjeta de Crédito</p>
                  <p className="text-sm">**** **** **** 1234</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Resumen del Pedido</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">RD$ 3,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Envío</span>
                    <span className="text-sm">Gratis</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>RD$ 3,450</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <p className="text-sm text-gray-500">
                Recibirás un correo electrónico de confirmación con los detalles de tu pedido a tu dirección de correo
                electrónico.
              </p>
              <p className="text-sm text-gray-500">
                Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos a{" "}
                <a href="mailto:info@idivas.com" className="text-pink-500 hover:underline">
                  info@idivas.com
                </a>{" "}
                o llamar al +1 (809) 123-4567.
              </p>
            </CardFooter>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/shop">Continuar Comprando</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/account">Ver Mis Pedidos</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

