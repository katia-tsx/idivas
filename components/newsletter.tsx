"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setEmail("")
      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter.",
      })
    }, 1000)
  }

  return (
    <section className="w-full py-12 md:py-24 bg-pink-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Únete a Nuestra Comunidad</h2>
            <p className="max-w-[600px] text-gray-500 md:text-lg">
              Suscríbete para recibir las últimas tendencias, ofertas exclusivas y un 10% de descuento en tu primera
              compra.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2 mx-auto">
              <Input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="rounded-full bg-pink-500 hover:bg-pink-600" disabled={loading}>
                {loading ? "Enviando..." : "Suscribirse"}
              </Button>
            </form>
            <p className="text-xs text-center text-gray-500">
              Al suscribirte, aceptas nuestra{" "}
              <a href="/privacy" className="underline underline-offset-2 hover:text-pink-500">
                Política de Privacidad
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </section>
  )
}

