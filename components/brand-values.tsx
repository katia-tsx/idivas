"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Truck, CreditCard, RefreshCw, Clock } from "lucide-react"

export function BrandValues() {
  const values = [
    {
      icon: <Truck className="h-10 w-10 text-pink-500" />,
      title: "Envío Rápido",
      description: "Entrega en 2-4 días en todo el país",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-pink-500" />,
      title: "Pago Seguro",
      description: "Múltiples métodos de pago disponibles",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-pink-500" />,
      title: "Devoluciones Fáciles",
      description: "30 días para cambios y devoluciones",
    },
    {
      icon: <Clock className="h-10 w-10 text-pink-500" />,
      title: "Atención 24/7",
      description: "Soporte disponible cuando lo necesites",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Idalenny Ramos - CEO de iDivas"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestra Misión</h2>
              <p className="text-gray-500 md:text-lg">
                En iDivas, nuestra misión es democratizar la moda, haciendo que las últimas tendencias sean accesibles
                para todas las mujeres de República Dominicana.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500">
                Fundada por Idalenny Ramos, iDivas nació de la pasión por la moda y el deseo de ofrecer un servicio
                excepcional que conecte a las dominicanas con las tendencias globales de Shein.
              </p>
              <p className="text-gray-500">
                Nos enorgullece ofrecer una experiencia de compra sin complicaciones, con precios transparentes y un
                servicio al cliente excepcional.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="rounded-full bg-pink-50 p-4">{value.icon}</div>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-gray-500">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

