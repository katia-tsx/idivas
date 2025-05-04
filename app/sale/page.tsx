"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { addToCart, addToFavorites, isInFavorites, removeFromFavorites } from "@/lib/client-storage"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function SalePage() {
  const [favorites, setFavorites] = useState<number[]>([])

  // Mock sale products (products with discounts)
  const saleProducts = [
    {
      id: 1,
      name: "Vestido Floral Verano",
      price: 1850,
      image: "https://source.unsplash.com/400x300/?dress,summer",  // Imagen de Unsplash
      category: "dresses",
      isNew: true,
      discount: 15,
    },
    {
      id: 4,
      name: "Conjunto Deportivo",
      price: 2250,
      image: "https://source.unsplash.com/400x300/?sportswear",  // Imagen de Unsplash
      category: "activewear",
      isNew: false,
      discount: 20,
    },
    {
      id: 10,
      name: "Pantalón Palazzo",
      price: 1750,
      image: "https://source.unsplash.com/400x300/?pants",  // Imagen de Unsplash
      category: "bottoms",
      isNew: false,
      discount: 10,
    },
    {
      id: 302,
      name: "Jumpsuit Elegante",
      price: 2650,
      image: "https://source.unsplash.com/400x300/?jumpsuit",  // Imagen de Unsplash
      category: "dresses",
      isNew: false,
      discount: 15,
    },
    {
      id: 602,
      name: "Top Deportivo",
      price: 950,
      image: "https://source.unsplash.com/400x300/?top,sports",  // Imagen de Unsplash
      category: "activewear",
      isNew: false,
      discount: 10,
    },
    {
      id: 103,
      name: "Falda Plisada Pastel",
      price: 1250,
      image: "https://source.unsplash.com/400x300/?skirt",  // Imagen de Unsplash
      category: "bottoms",
      isNew: false,
      discount: 10,
    },
]

  // Load favorites on component mount
  useState(() => {
    if (typeof window !== "undefined") {
      // Get all favorites and extract just the IDs
      const favs = saleProducts.filter((product) => isInFavorites(product.id)).map((p) => p.id)
      setFavorites(favs)
    }
  })

  const handleAddToCart = (product: any) => {
    // Default to first size if available, otherwise empty string
    const defaultSize = "M"

    // Calculate discounted price if applicable
    const price = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price

    addToCart(
      {
        ...product,
        price,
      },
      defaultSize,
      1,
    )

    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} ha sido añadido a tu carrito.`,
    })
  }

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      removeFromFavorites(productId)
      setFavorites(favorites.filter((id) => id !== productId))
      toast({
        title: "Eliminado de favoritos",
        description: "El producto ha sido eliminado de tus favoritos.",
      })
    } else {
      const product = saleProducts.find((p) => p.id === productId)
      if (product) {
        addToFavorites(product)
        setFavorites([...favorites, productId])
        toast({
          title: "¡Añadido a favoritos!",
          description: "El producto ha sido añadido a tus favoritos.",
        })
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Ofertas", href: "/sale", active: true },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold">Ofertas</h1>
          <p className="text-gray-500 mt-2">Aprovecha nuestros descuentos especiales</p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (index % 6), duration: 0.3 }}
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

                    {product.discount && (
                      <Badge className="absolute top-2 right-2 bg-black">-{product.discount}%</Badge>
                    )}

                    <div className="absolute right-2 bottom-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-9 w-9 bg-white hover:bg-pink-50"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-pink-500 text-pink-500" : "text-pink-500"}`}
                        />
                        <span className="sr-only">
                          {favorites.includes(product.id) ? "Eliminar de favoritos" : "Añadir a favoritos"}
                        </span>
                      </Button>
                      <Button
                        size="icon"
                        className="rounded-full h-9 w-9 bg-pink-500 hover:bg-pink-600"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Añadir al carrito</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-9 w-9 bg-white hover:bg-pink-50"
                        asChild
                      >
                        <Link href={`/product/${product.id}`}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Vista rápida</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/product/${product.id}`} className="hover:text-pink-500 transition-colors">
                      <h3 className="font-medium text-base">{product.name}</h3>
                    </Link>
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
        </div>
      </main>
      <Toaster />
    </div>
  )
}

