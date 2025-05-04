"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function TrendingCollection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "Todos" },
    { id: "dresses", name: "Vestidos" },
    { id: "tops", name: "Tops" },
    { id: "bottoms", name: "Pantalones" },
    { id: "accessories", name: "Accesorios" },
  ]

  const products = [
    {
      id: 1,
      name: "Vestido Floral Verano",
      price: 1850,
      image: "/placeholder.svg?height=400&width=300",
      category: "dresses",
      isNew: true,
      discount: 15,
    },
    {
      id: 2,
      name: "Blusa Asimétrica",
      price: 950,
      image: "/placeholder.svg?height=400&width=300",
      category: "tops",
      isNew: false,
    },
    {
      id: 3,
      name: "Jeans Premium Stretch",
      price: 1650,
      image: "/placeholder.svg?height=400&width=300",
      category: "bottoms",
      isNew: true,
    },
    {
      id: 4,
      name: "Conjunto Deportivo",
      price: 2250,
      image: "/placeholder.svg?height=400&width=300",
      category: "tops",
      isNew: false,
      discount: 20,
    },
    {
      id: 5,
      name: "Collar Minimalista",
      price: 850,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: true,
    },
    {
      id: 6,
      name: "Falda Plisada",
      price: 1450,
      image: "/placeholder.svg?height=400&width=300",
      category: "bottoms",
      isNew: false,
    },
    {
      id: 7,
      name: "Vestido Elegante",
      price: 2850,
      image: "/placeholder.svg?height=400&width=300",
      category: "dresses",
      isNew: true,
    },
    {
      id: 8,
      name: "Bolso Estructurado",
      price: 1950,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: false,
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tendencias del Momento</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Descubre nuestras piezas más populares y las últimas tendencias
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full",
                  activeCategory === category.id
                    ? "bg-pink-500 text-white hover:bg-pink-600 border-pink-500"
                    : "bg-transparent hover:text-pink-500 hover:border-pink-500",
                )}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-0 shadow-sm group">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-[350px] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {product.isNew && <Badge className="absolute top-2 left-2 bg-pink-500">Nuevo</Badge>}

                  {product.discount && <Badge className="absolute top-2 right-2 bg-black">-{product.discount}%</Badge>}

                  <div className="absolute right-2 bottom-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full h-9 w-9 bg-white hover:bg-pink-50">
                      <Heart className="h-4 w-4 text-pink-500" />
                      <span className="sr-only">Añadir a favoritos</span>
                    </Button>
                    <Button size="icon" className="rounded-full h-9 w-9 bg-pink-500 hover:bg-pink-600">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Añadir al carrito</span>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-base">{product.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      {product.discount ? (
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg text-pink-500">
                            RD$ {Math.round(product.price * (1 - product.discount / 100))}
                          </span>
                          <span className="text-sm text-gray-400 line-through">RD$ {product.price}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-lg">RD$ {product.price}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
            <a href="/shop">Ver Toda la Colección</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

