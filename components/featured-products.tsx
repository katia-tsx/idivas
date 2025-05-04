import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Vestido Floral",
      price: 1850,
      image: "/placeholder.svg?height=400&width=300",
      category: "Vestidos",
      isNew: true,
    },
    {
      id: 2,
      name: "Blusa Elegante",
      price: 950,
      image: "/placeholder.svg?height=400&width=300",
      category: "Blusas",
      isNew: false,
    },
    {
      id: 3,
      name: "Jeans Premium",
      price: 1650,
      image: "/placeholder.svg?height=400&width=300",
      category: "Pantalones",
      isNew: true,
    },
    {
      id: 4,
      name: "Conjunto Deportivo",
      price: 2250,
      image: "/placeholder.svg?height=400&width=300",
      category: "Deportiva",
      isNew: false,
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Productos Destacados</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Descubre nuestras prendas más populares y las últimas tendencias
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="object-cover w-full h-[300px]"
                />
                {product.isNew && <Badge className="absolute top-2 right-2 bg-pink-500">Nuevo</Badge>}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="font-bold text-lg mt-2">RD$ {product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-pink-500 hover:bg-pink-600">Añadir al Carrito</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  )
}

