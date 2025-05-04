"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.div
                className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Nueva Colección 2025
              </motion.div>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Redefine Tu <span className="text-pink-500">Estilo</span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Descubre las últimas tendencias de Shein con entrega rápida en toda República Dominicana.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button asChild className="bg-pink-500 hover:bg-pink-600">
                <Link href="/shop">Comprar Ahora</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/collections">Ver Colecciones</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="iDivas Moda"
                width={600}
                height={800}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

