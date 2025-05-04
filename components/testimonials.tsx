import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María Pérez",
      avatar: "MP",
      content:
        "Excelente servicio y productos de calidad. Mi pedido llegó antes de lo esperado y todo estaba perfecto.",
      rating: 5,
    },
    {
      name: "Laura Gómez",
      avatar: "LG",
      content: "Me encanta la variedad de productos y lo fácil que es comprar. Definitivamente mi tienda favorita.",
      rating: 5,
    },
    {
      name: "Carolina Díaz",
      avatar: "CD",
      content: "Precios increíbles y un servicio al cliente excepcional. Siempre responden rápido a mis consultas.",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-pink-100">
              <CardContent className="p-6 flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-pink-100 text-pink-500">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-pink-500 text-pink-500" />
                        ))}
                      {Array(5 - testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

