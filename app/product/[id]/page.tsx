"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Heart, ShoppingBag, Share2, Star, Truck, RotateCcw, Shield } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  addToCart,
  addToFavorites,
  isInFavorites,
  removeFromFavorites,
  addToRecentlyViewed,
} from "@/lib/client-storage"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Mock product data
const products = [
  {
    id: 1,
    name: "Vestido Floral Verano",
    price: 1850,
    image: "https://source.unsplash.com/500x600/?dress,floral,summer", // Imagen de Unsplash
    images: [
      "https://source.unsplash.com/500x600/?dress,floral,summer", // Imagen principal de Unsplash
      "https://source.unsplash.com/500x600/?dress,floral,side", // Imagen lateral
      "https://source.unsplash.com/500x600/?dress,floral,back", // Imagen trasera
    ],
    category: "dresses",
    isNew: true,
    discount: 15,
    description:
      "Hermoso vestido floral perfecto para el verano. Confeccionado con tela ligera y fresca, ideal para días calurosos. Diseño exclusivo con estampado floral vibrante.",
    details: {
      material: "95% Algodón, 5% Elastano",
      cuidado: "Lavado a máquina en frío, no usar blanqueador",
      origen: "Importado",
      ajuste: "Regular fit",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Rosa", "Floral Azul"],
    stock: 15,
    reviews: 4.5,
    reviewCount: 28,
  },
  {
    id: 2,
    name: "Blusa Asimétrica",
    price: 950,
    image: "https://source.unsplash.com/500x600/?blouse,asymmetric", // Imagen de Unsplash
    images: [
      "https://source.unsplash.com/500x600/?blouse,asymmetric", // Imagen principal de Unsplash
      "https://source.unsplash.com/500x600/?blouse,asymmetric,side", // Imagen lateral
      "https://source.unsplash.com/500x600/?blouse,asymmetric,back", // Imagen trasera
    ],
    category: "tops",
    isNew: false,
    description:
      "Blusa asimétrica con diseño moderno y elegante. Perfecta para ocasiones casuales o formales. Combina fácilmente con jeans o pantalones de vestir.",
    details: {
      material: "100% Poliéster",
      cuidado: "Lavado a mano, no retorcer",
      origen: "Importado",
      ajuste: "Regular fit",
    },
    sizes: ["S", "M", "L"],
    colors: ["Blanco", "Negro", "Rojo"],
    stock: 8,
    reviews: 4.2,
    reviewCount: 15,
  },
  // Add more products as needed
]

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)

  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Simulate fetching product data
    const foundProduct = products.find((p) => p.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)
      setMainImage(foundProduct.images[0])
      setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : "")

      // Add to recently viewed
      addToRecentlyViewed(foundProduct)

      // Check if product is in favorites
      setIsFavorite(isInFavorites(foundProduct.id))
    }

    setLoading(false)
  }, [productId])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
          <div className="animate-pulse">
            <div className="h-6 w-1/3 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[500px] bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded mt-6"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold">Producto no encontrado</h2>
            <p className="mt-2 text-gray-500">Lo sentimos, el producto que buscas no existe.</p>
            <Button className="mt-6 bg-pink-500 hover:bg-pink-600" onClick={() => router.push("/shop")}>
              Volver a la tienda
            </Button>
          </div>
        </main>
      </div>
    )
  }

  const discountedPrice = product.discount ? Math.round(product.price * (1 - product.discount / 100)) : product.price

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecciona una talla",
        description: "Por favor selecciona una talla antes de añadir al carrito",
        variant: "destructive",
      })
      return
    }

    addToCart(
      {
        ...product,
        price: discountedPrice,
      },
      selectedSize,
      quantity,
    )

    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} (Talla: ${selectedSize}) ha sido añadido a tu carrito.`,
    })
  }

  const handleBuyNow = () => {
    handleAddToCart()
    router.push("/cart")
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id)
      setIsFavorite(false)
      toast({
        title: "Eliminado de favoritos",
        description: `${product.name} ha sido eliminado de tus favoritos.`,
      })
    } else {
      addToFavorites(product)
      setIsFavorite(true)
      toast({
        title: "¡Añadido a favoritos!",
        description: `${product.name} ha sido añadido a tus favoritos.`,
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Tienda", href: "/shop" },
            { label: product.name, href: `/product/${product.id}`, active: true },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border bg-white">
              <Image
                src={mainImage || "https://source.unsplash.com/400x300/?floral,dress,summer"}
                alt={product.name}
                fill
                className="object-cover"
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
            </div>

            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img: string, idx: number) => (
                <div
                  key={idx}
                  className={`relative aspect-square overflow-hidden rounded-md border cursor-pointer ${mainImage === img ? "ring-2 ring-pink-500" : ""}`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} - Vista ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.reviews) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.reviews} ({product.reviewCount} reseñas)
                </span>
              </div>

              <div className="mt-4">
                {product.discount ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-pink-500">RD$ {discountedPrice}</span>
                    <span className="text-lg text-gray-400 line-through">RD$ {product.price}</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">RD$ {product.price}</span>
                )}
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <Label htmlFor="color">
                  Color: <span className="font-medium">{selectedColor}</span>
                </Label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color: string) => (
                    <Button
                      key={color}
                      type="button"
                      variant={selectedColor === color ? "default" : "outline"}
                      className={selectedColor === color ? "bg-pink-500 hover:bg-pink-600" : ""}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="size">Talla</Label>
                  <button className="text-sm text-pink-500 hover:underline">Guía de tallas</button>
                </div>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium peer-data-[state=checked]:border-pink-500 peer-data-[state=checked]:bg-pink-50 peer-data-[state=checked]:text-pink-500 cursor-pointer"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Cantidad</Label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
                <span className="text-sm text-gray-500 ml-2">{product.stock} disponibles</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-pink-500 hover:bg-pink-600" size="lg" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                Añadir al carrito
              </Button>
              <Button className="flex-1" size="lg" onClick={handleBuyNow}>
                Comprar ahora
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12" onClick={toggleFavorite}>
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-pink-500 text-pink-500" : ""}`} />
                <span className="sr-only">Añadir a favoritos</span>
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Compartir</span>
              </Button>
            </div>

            {/* Shipping & Returns */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Envío</h4>
                  <p className="text-sm text-gray-500">Entrega estimada: 2-4 días hábiles</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RotateCcw className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Devoluciones</h4>
                  <p className="text-sm text-gray-500">Devoluciones gratuitas dentro de los 30 días</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Garantía</h4>
                  <p className="text-sm text-gray-500">Garantía de calidad en todos nuestros productos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px data-[state=active]:border-pink-500 data-[state=active]:text-pink-500 data-[state=active]:shadow-none"
              >
                Detalles
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px data-[state=active]:border-pink-500 data-[state=active]:text-pink-500 data-[state=active]:shadow-none"
              >
                Envío y Devoluciones
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px data-[state=active]:border-pink-500 data-[state=active]:text-pink-500 data-[state=active]:shadow-none"
              >
                Reseñas ({product.reviewCount})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Especificaciones del producto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Material</span>
                      <span>{product.details.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Cuidado</span>
                      <span>{product.details.cuidado}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Origen</span>
                      <span>{product.details.origen}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-500">Ajuste</span>
                      <span>{product.details.ajuste}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Información de envío</h3>
                  <p className="mt-2 text-gray-600">
                    Realizamos envíos a todo República Dominicana. Los tiempos de entrega estimados son:
                  </p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    <li>Santo Domingo: 1-2 días hábiles (RD$ 150)</li>
                    <li>Norte (Cibao): 2-3 días hábiles (RD$ 250)</li>
                    <li>Este: 2-3 días hábiles (RD$ 200)</li>
                    <li>Sur: 3-4 días hábiles (RD$ 300)</li>
                  </ul>
                  <p className="mt-4 text-gray-600">Envío gratis en compras superiores a RD$ 5,000.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium">Política de devoluciones</h3>
                  <p className="mt-2 text-gray-600">
                    Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del pedido. Los artículos
                    deben estar en su estado original, sin usar y con todas las etiquetas.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Para iniciar una devolución, por favor contacta a nuestro servicio al cliente a través de
                    info@idivas.com o llama al +1 (809) 123-4567.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Reseñas de clientes</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(product.reviews) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">Basado en {product.reviewCount} reseñas</span>
                    </div>
                  </div>
                  <Button className="bg-pink-500 hover:bg-pink-600">Escribir una reseña</Button>
                </div>

                <Separator />

                {/* Mock reviews */}
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <h4 className="font-medium mt-2">¡Me encanta este vestido!</h4>
                        </div>
                        <span className="text-sm text-gray-500">Hace 2 semanas</span>
                      </div>
                      <p className="mt-2 text-gray-600">
                        El vestido es precioso, la tela es de buena calidad y el diseño es exactamente como en las
                        fotos. Llegó en el tiempo estimado y el empaque era muy bonito. Definitivamente compraré más
                        productos.
                      </p>
                      <div className="mt-4">
                        <span className="text-sm font-medium">María G.</span>
                        <span className="text-sm text-gray-500"> - Compra verificada</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <h4 className="font-medium mt-2">Buena compra</h4>
                        </div>
                        <span className="text-sm text-gray-500">Hace 1 mes</span>
                      </div>
                      <p className="mt-2 text-gray-600">
                        El producto llegó en buen estado y es bastante bonito. La talla es un poco más pequeña de lo
                        esperado, pero aún así me queda bien. El envío fue rápido.
                      </p>
                      <div className="mt-4">
                        <span className="text-sm font-medium">Carolina P.</span>
                        <span className="text-sm text-gray-500"> - Compra verificada</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Toaster />
    </div>
  )
}

