"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock collections data
const collections = [
  {
    id: 1,
    name: "Primavera 2025",
    description:
      "Descubre las tendencias más frescas para esta temporada. Nuestra colección Primavera 2025 trae piezas ligeras, coloridas y versátiles que te permitirán crear looks increíbles para cualquier ocasión. Desde vestidos florales hasta conjuntos casuales, encontrarás todo lo que necesitas para renovar tu armario esta temporada.",
    image: "/placeholder.svg?height=600&width=1200",
    banner: "/placeholder.svg?height=400&width=1200",
    itemCount: 24,
    slug: "primavera-2025",
    featured: true,
  },
  {
    id: 2,
    name: "Básicos Esenciales",
    description:
      "Piezas atemporales que no pueden faltar en tu armario. Nuestra colección de Básicos Esenciales incluye prendas versátiles y de alta calidad que te acompañarán temporada tras temporada. Diseñadas para combinar fácilmente y crear múltiples looks, estas piezas son la base perfecta para cualquier guardarropa.",
    image: "/placeholder.svg?height=600&width=800",
    banner: "/placeholder.svg?height=400&width=1200",
    itemCount: 18,
    slug: "basicos-esenciales",
    featured: false,
  },
  {
    id: 3,
    name: "Fiesta & Noche",
    description:
      "Looks deslumbrantes para tus eventos especiales. Desde elegantes vestidos de cóctel hasta glamorosos conjuntos para ocasiones formales, nuestra colección Fiesta & Noche te ofrece opciones sofisticadas para brillar en cualquier evento. Telas premium, detalles cuidados y diseños exclusivos te harán destacar.",
    image: "/placeholder.svg?height=600&width=800",
    banner: "/placeholder.svg?height=400&width=1200",
    itemCount: 15,
    slug: "fiesta-noche",
    featured: true,
  },
  {
    id: 4,
    name: "Oficina Chic",
    description:
      "Eleva tu estilo profesional con estas piezas elegantes. Nuestra colección Oficina Chic combina sofisticación y comodidad para tu día a día laboral. Desde trajes sastre hasta blusas y faldas, encontrarás prendas que te harán lucir profesional sin sacrificar tu estilo personal.",
    image: "/placeholder.svg?height=600&width=800",
    banner: "/placeholder.svg?height=400&width=1200",
    itemCount: 12,
    slug: "oficina-chic",
    featured: false,
  },
  {
    id: 5,
    name: "Accesorios Trendy",
    description:
      "Complementos que transformarán tus outfits. Los accesorios son la clave para elevar cualquier look, y nuestra colección Accesorios Trendy te ofrece las últimas tendencias en bolsos, joyería, cinturones y más. Piezas cuidadosamente seleccionadas que añadirán ese toque especial a tus conjuntos.",
    image: "/placeholder.svg?height=600&width=800",
    banner: "/placeholder.svg?height=400&width=1200",
    itemCount: 20,
    slug: "accesorios-trendy",
    featured: true,
  },
  {
    id: 6,
    name: "Deportiva",
    description:
      "Estilo y comodidad para tu rutina fitness. Nuestra colección Deportiva combina funcionalidad y diseño para que te veas y te sientas bien mientras te mantienes activa. Desde leggings y tops hasta conjuntos completos, estas prendas te acompañarán en tus entrenamientos con el máximo confort.",
    image: "/placeholder.svg?height=600&width=800",
    banner: "/placeholder.svg?height=400&width=1200",
    itemCount: 16,
    slug: "deportiva",
    featured: false,
  },
]

// Mock products for each collection
const collectionProducts = {
  "primavera-2025": [
    {
      id: 101,
      name: "Vestido Floral Midi",
      price: 1950,
      image: "/placeholder.svg?height=400&width=300",
      category: "dresses",
      isNew: true,
    },
    {
      id: 102,
      name: "Blusa Manga Abullonada",
      price: 850,
      image: "/placeholder.svg?height=400&width=300",
      category: "tops",
      isNew: true,
    },
    {
      id: 103,
      name: "Falda Plisada Pastel",
      price: 1250,
      image: "/placeholder.svg?height=400&width=300",
      category: "bottoms",
      isNew: false,
      discount: 10,
    },
    {
      id: 104,
      name: "Sandalias Trenzadas",
      price: 1450,
      image: "/placeholder.svg?height=400&width=300",
      category: "shoes",
      isNew: true,
    },
    {
      id: 105,
      name: "Pantalón Culotte",
      price: 1650,
      image: "/placeholder.svg?height=400&width=300",
      category: "bottoms",
      isNew: false,
    },
    {
      id: 106,
      name: "Chaqueta Denim Oversize",
      price: 2250,
      image: "/placeholder.svg?height=400&width=300",
      category: "outerwear",
      isNew: true,
    },
  ],
  "basicos-esenciales": [
    {
      id: 201,
      name: "Camiseta Básica Algodón",
      price: 550,
      image: "/placeholder.svg?height=400&width=300",
      category: "tops",
      isNew: false,
    },
    {
      id: 202,
      name: "Jeans Straight Fit",
      price: 1750,
      image: "/placeholder.svg?height=400&width=300",
      category: "bottoms",
      isNew: false,
    },
    {
      id: 203,
      name: "Blazer Clásico Negro",
      price: 2450,
      image: "/placeholder.svg?height=400&width=300",
      category: "outerwear",
      isNew: false,
    },
    {
      id: 204,
      name: "Camisa Blanca Oxford",
      price: 950,
      image: "/placeholder.svg?height=400&width=300",
      category: "tops",
      isNew: false,
    },
  ],
  "fiesta-noche": [
    {
      id: 301,
      name: "Vestido Lentejuelas",
      price: 2950,
      image: "/placeholder.svg?height=400&width=300",
      category: "dresses",
      isNew: true,
    },
    {
      id: 302,
      name: "Jumpsuit Elegante",
      price: 2650,
      image: "/placeholder.svg?height=400&width=300",
      category: "dresses",
      isNew: false,
      discount: 15,
    },
    {
      id: 303,
      name: "Clutch Satinado",
      price: 950,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: true,
    },
  ],
  "oficina-chic": [
    {
      id: 401,
      name: "Pantalón Sastre",
      price: 1850,
      image: "/placeholder.svg?height=400&width=300",
      category: "bottoms",
      isNew: false,
    },
    {
      id: 402,
      name: "Blusa Lazo",
      price: 1250,
      image: "/placeholder.svg?height=400&width=300",
      category: "tops",
      isNew: true,
    },
  ],
  "accesorios-trendy": [
    {
      id: 501,
      name: "Collar Eslabones",
      price: 750,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: true,
    },
    {
      id: 502,
      name: "Bolso Estructurado",
      price: 1950,
      image: "/placeholder.svg?height=400&width=300",
      category: "accessories",
      isNew: false,
    },
  ],
  deportiva: [
    {
      id: 601,
      name: "Leggings Compresión",
      price: 1450,
      image: "/placeholder.svg?height=400&width=300",
      category: "activewear",
      isNew: true,
    },
    {
      id: 602,
      name: "Top Deportivo",
      price: 950,
      image: "/placeholder.svg?height=400&width=300",
      category: "activewear",
      isNew: false,
      discount: 10,
    },
  ],
}

export default function CollectionPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [collection, setCollection] = useState<any>(null)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching collection data
    const foundCollection = collections.find((c) => c.slug === slug)

    if (foundCollection) {
      setCollection(foundCollection)

      // Get products for this collection
      const collectionProductList = collectionProducts[slug as keyof typeof collectionProducts] || []
      setProducts(collectionProductList)
    }

    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
          <div className="animate-pulse">
            <div className="h-6 w-1/3 bg-gray-200 rounded mb-6"></div>
            <div className="h-[300px] bg-gray-200 rounded mb-8"></div>
            <div className="h-8 w-1/2 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-[350px] bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!collection) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold">Colección no encontrada</h2>
            <p className="mt-2 text-gray-500">Lo sentimos, la colección que buscas no existe.</p>
            <Button className="mt-6 bg-pink-500 hover:bg-pink-600" onClick={() => router.push("/collections")}>
              Ver todas las colecciones
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image src={collection.banner || "/placeholder.svg"} alt={collection.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{collection.name}</h1>
              <p className="mt-2 md:mt-4 max-w-2xl mx-auto">{collection.itemCount} productos</p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8 md:px-6 md:py-12">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Colecciones", href: "/collections" },
              { label: collection.name, href: `/collections/${collection.slug}`, active: true },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-gray-600">{collection.description}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Productos en esta colección</h2>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded">
                          Nuevo
                        </span>
                      )}
                      {product.discount && (
                        <span className="absolute top-2 right-2 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                          -{product.discount}%
                        </span>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-medium text-lg group-hover:text-pink-500 transition-colors">
                        <a href={`/product/${product.id}`}>{product.name}</a>
                      </h3>
                      <div className="mt-1">
                        {product.discount ? (
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-pink-500">
                              RD$ {Math.round(product.price * (1 - product.discount / 100))}
                            </span>
                            <span className="text-sm text-gray-400 line-through">RD$ {product.price}</span>
                          </div>
                        ) : (
                          <span className="font-bold">RD$ {product.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-gray-500">No hay productos disponibles en esta colección.</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-pink-500 hover:bg-pink-600" onClick={() => router.push("/collections")}>
              Ver todas las colecciones
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

