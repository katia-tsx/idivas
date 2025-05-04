"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, ArrowRight } from "lucide-react"

export default function LookbookPage() {
  const [activeTab, setActiveTab] = useState("summer")

  // Mock lookbook data
 const lookbooks = {
  summer: {
    title: "Verano 2025",
    description: "Descubre nuestra colección de verano con piezas ligeras y coloridas para los días soleados.",
    banner: "https://source.unsplash.com/1200x400/?summer,beach",  // Banner de Unsplash
    outfits: [
      {
        id: 1,
        title: "Look Playero",
        image: "https://source.unsplash.com/600x400/?beach,summer,dress",  // Imagen look playero
        products: [
          { id: 101, name: "Vestido Floral Midi", price: 1950, category: "dresses" },
          { id: 102, name: "Sandalias Trenzadas", price: 1450, category: "shoes" },
          { id: 103, name: "Sombrero de Paja", price: 850, category: "accessories" },
        ],
      },
      {
        id: 2,
        title: "Look Casual Diurno",
        image: "https://source.unsplash.com/600x400/?casual,day,summer",  // Imagen look casual diurno
        products: [
          { id: 104, name: "Blusa Manga Abullonada", price: 850, category: "tops" },
          { id: 105, name: "Pantalón Culotte", price: 1650, category: "bottoms" },
          { id: 106, name: "Bolso Estructurado", price: 1950, category: "accessories" },
        ],
      },
      {
        id: 3,
        title: "Look Fiesta Veraniega",
        image: "https://source.unsplash.com/600x400/?summer,party,dress",  // Imagen look fiesta veraniega
        products: [
          { id: 107, name: "Vestido Satinado", price: 2450, category: "dresses" },
          { id: 108, name: "Sandalias de Tacón", price: 1850, category: "shoes" },
          { id: 109, name: "Clutch Dorado", price: 1250, category: "accessories" },
        ],
      },
    ],
  },
  autumn: {
    title: "Otoño 2025",
    description: "Prepárate para el cambio de estación con nuestra colección de otoño llena de tonos cálidos y texturas acogedoras.",
    banner: "https://source.unsplash.com/1200x400/?autumn,fall",  // Banner de Unsplash
    outfits: [
      {
        id: 4,
        title: "Look Oficina",
        image: "https://source.unsplash.com/600x400/?autumn,office",  // Imagen look oficina
        products: [
          { id: 201, name: "Blazer Oversize", price: 2850, category: "outerwear" },
          { id: 202, name: "Pantalón Sastre", price: 1850, category: "bottoms" },
          { id: 203, name: "Botines de Cuero", price: 2250, category: "shoes" },
        ],
      },
      {
        id: 5,
        title: "Look Fin de Semana",
        image: "https://source.unsplash.com/600x400/?autumn,weekend",  // Imagen look fin de semana
        products: [
          { id: 204, name: "Suéter Tejido", price: 1450, category: "tops" },
          { id: 205, name: "Jeans Mom Fit", price: 1750, category: "bottoms" },
          { id: 206, name: "Botas Chelsea", price: 2450, category: "shoes" },
        ],
      },
    ],
  },
  winter: {
    title: "Invierno 2025",
    description: "Mantente abrigada con estilo con nuestra colección de invierno llena de prendas cálidas y elegantes.",
    banner: "https://source.unsplash.com/1200x400/?winter,snow",  // Banner de Unsplash
    outfits: [
      {
        id: 6,
        title: "Look Festivo",
        image: "https://source.unsplash.com/600x400/?winter,festive",  // Imagen look festivo
        products: [
          { id: 301, name: "Vestido de Terciopelo", price: 2950, category: "dresses" },
          { id: 302, name: "Abrigo de Lana", price: 3450, category: "outerwear" },
          { id: 303, name: "Zapatos de Tacón", price: 2250, category: "shoes" },
        ],
      },
      {
        id: 7,
        title: "Look Casual Invernal",
        image: "https://source.unsplash.com/600x400/?winter,cold,cashmere",  // Imagen look casual invernal
        products: [
          { id: 304, name: "Chaqueta Acolchada", price: 2850, category: "outerwear" },
          { id: 305, name: "Suéter de Cuello Alto", price: 1650, category: "tops" },
          { id: 306, name: "Jeans Skinny", price: 1750, category: "bottoms" },
        ],
      },
    ],
  },
}


  const currentLookbook = lookbooks[activeTab as keyof typeof lookbooks]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Lookbook", href: "/lookbook", active: true },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold">Lookbook</h1>
          <p className="text-gray-500 mt-2">Inspírate con nuestras propuestas de outfits completos</p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="summer" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="summer" className="flex-1">
                Verano
              </TabsTrigger>
              <TabsTrigger value="autumn" className="flex-1">
                Otoño
              </TabsTrigger>
              <TabsTrigger value="winter" className="flex-1">
                Invierno
              </TabsTrigger>
            </TabsList>

            {Object.keys(lookbooks).map((season) => (
              <TabsContent key={season} value={season} className="mt-0">
                <div className="space-y-8">
                  <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={lookbooks[season as keyof typeof lookbooks].banner || "/placeholder.svg"}
                      alt={lookbooks[season as keyof typeof lookbooks].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                          {lookbooks[season as keyof typeof lookbooks].title}
                        </h2>
                        <p className="mt-2 md:mt-4 max-w-2xl mx-auto">
                          {lookbooks[season as keyof typeof lookbooks].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lookbooks[season as keyof typeof lookbooks].outfits.map((outfit, index) => (
                      <motion.div
                        key={outfit.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <Card className="overflow-hidden border-0 shadow-sm">
                          <div className="relative aspect-[2/3] overflow-hidden">
                            <Image
                              src={outfit.image || "/placeholder.svg"}
                              alt={outfit.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <h3 className="text-xl font-bold">{outfit.title}</h3>
                              <p className="text-sm mt-1">{outfit.products.length} productos</p>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Productos en este look:</h4>
                            <ul className="space-y-2">
                              {outfit.products.map((product) => (
                                <li key={product.id} className="flex justify-between items-center">
                                  <Link
                                    href={`/product/${product.id}`}
                                    className="text-sm hover:text-pink-500 transition-colors"
                                  >
                                    {product.name}
                                  </Link>
                                  <Badge variant="outline">RD$ {product.price}</Badge>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex justify-between">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-pink-500 hover:text-pink-600 hover:bg-pink-50"
                                asChild
                              >
                                <Link href={`/product/${outfit.products[0].id}`}>
                                  Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                                <ShoppingBag className="mr-1 h-4 w-4" />
                                Comprar look
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  )
}

