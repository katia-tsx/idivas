"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { addToCart, addToFavorites, isInFavorites, removeFromFavorites } from "@/lib/client-storage"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

interface ProductGridProps {
  activeFilters: {
    categories: string[]
    priceRange: [number, number]
    sizes: string[]
    colors: string[]
    sort: string
  }
  onSortChange: (sort: string) => void
}

export function ProductGrid({ activeFilters, onSortChange }: ProductGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Vestido Floral Verano",
      price: 1850,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=300&h=400&auto=format&fit=crop",
      category: "dresses",
      isNew: true,
      discount: 15,
      sizes: ["S", "M", "L"],
      colors: ["pink", "blue"],
    },
    {
      id: 2,
      name: "Blusa Asimétrica",
      price: 950,
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=300&h=400&auto=format&fit=crop",
      category: "tops",
      isNew: false,
      sizes: ["XS", "S", "M", "L"],
      colors: ["white", "black"],
    },
    {
      id: 3,
      name: "Jeans Premium Stretch",
      price: 1650,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&h=400&auto=format&fit=crop",
      category: "bottoms",
      isNew: true,
      sizes: ["S", "M", "L", "XL"],
      colors: ["blue"],
    },
    {
      id: 4,
      name: "Conjunto Deportivo",
      price: 2250,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&h=400&auto=format&fit=crop",
      category: "activewear",
      isNew: false,
      discount: 20,
      sizes: ["S", "M", "L"],
      colors: ["black", "pink"],
    },
    {
      id: 5,
      name: "Collar Minimalista",
      price: 850,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=300&h=400&auto=format&fit=crop",
      category: "accessories",
      isNew: true,
      colors: ["gold", "silver"],
    },
    {
      id: 6,
      name: "Falda Plisada",
      price: 1450,
      image: "https://images.unsplash.com/photo-1551163943-3f7359e92b07?q=80&w=300&h=400&auto=format&fit=crop",
      category: "bottoms",
      isNew: false,
      sizes: ["XS", "S", "M", "L"],
      colors: ["black", "red"],
    },
    {
      id: 7,
      name: "Vestido Elegante",
      price: 2850,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300&h=400&auto=format&fit=crop",
      category: "dresses",
      isNew: true,
      sizes: ["S", "M", "L"],
      colors: ["black", "red"],
    },
    {
      id: 8,
      name: "Bolso Estructurado",
      price: 1950,
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=300&h=400&auto=format&fit=crop",
      category: "accessories",
      isNew: false,
      colors: ["black", "brown"],
    },
    {
      id: 9,
      name: "Top Crop Estampado",
      price: 750,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=300&h=400&auto=format&fit=crop",
      category: "tops",
      isNew: true,
      sizes: ["XS", "S", "M"],
      colors: ["yellow", "green"],
    },
    {
      id: 10,
      name: "Pantalón Palazzo",
      price: 1750,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&h=400&auto=format&fit=crop",
      category: "bottoms",
      isNew: false,
      discount: 10,
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "white"],
    },
    {
      id: 11,
      name: "Vestido Midi Satinado",
      price: 2450,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&h=400&auto=format&fit=crop",
      category: "dresses",
      isNew: false,
      sizes: ["S", "M", "L"],
      colors: ["purple", "blue"],
    },
    {
      id: 12,
      name: "Aretes Geométricos",
      price: 550,
      image: "https://images.unsplash.com/photo-1576249296103-0260afa05fc8?q=80&w=300&h=400&auto=format&fit=crop",
      category: "accessories",
      isNew: true,
      colors: ["gold", "silver"],
    },
  ]

  // Load favorites on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get all favorites and extract just the IDs
      const favs = products.filter((product) => isInFavorites(product.id)).map((p) => p.id)
      setFavorites(favs)
    }
  }, [])

  // Apply filters
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
      return false
    }

    // Filter by price range
    const [minPrice, maxPrice] = activeFilters.priceRange
    const productPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price

    if (productPrice < minPrice || productPrice > maxPrice) {
      return false
    }

    // Filter by size
    if (activeFilters.sizes.length > 0 && product.sizes) {
      if (!product.sizes.some((size) => activeFilters.sizes.includes(size))) {
        return false
      }
    }

    // Filter by color
    if (activeFilters.colors.length > 0 && product.colors) {
      if (!product.colors.some((color) => activeFilters.colors.includes(color))) {
        return false
      }
    }

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (activeFilters.sort) {
      case "price-low":
        return (
          (a.discount ? a.price * (1 - a.discount / 100) : a.price) -
          (b.discount ? b.price * (1 - b.discount / 100) : b.price)
        )
      case "price-high":
        return (
          (b.discount ? b.price * (1 - b.discount / 100) : b.price) -
          (a.discount ? a.price * (1 - a.discount / 100) : a.price)
        )
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0
      default: // featured
        return 0
    }
  })

  const handleAddToCart = (product: any) => {
    // Default to first size if available, otherwise empty string
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : ""

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
      const product = products.find((p) => p.id === productId)
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
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          Mostrando {sortedProducts.length} {sortedProducts.length === 1 ? "producto" : "productos"}
        </p>
        <select
          className="text-sm border rounded-md p-2"
          value={activeFilters.sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="featured">Destacados</option>
          <option value="newest">Más nuevos</option>
          <option value="price-low">Precio: Menor a Mayor</option>
          <option value="price-high">Precio: Mayor a Menor</option>
        </select>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product, index) => (
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

                  {product.discount && <Badge className="absolute top-2 right-2 bg-black">-{product.discount}%</Badge>}

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
      ) : (
        <div className="text-center py-12 border rounded-lg">
          <p className="text-gray-500">No se encontraron productos que coincidan con los filtros seleccionados.</p>
          <Button variant="outline" className="mt-4" onClick={() => onSortChange("featured")}>
            Ver todos los productos
          </Button>
        </div>
      )}
      <Toaster />
    </div>
  )
}

