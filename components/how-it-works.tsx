import { CheckCircle, Package, Search, Truck } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-pink-500" />,
      title: "Explora y Selecciona",
      description: "Navega por nuestro catálogo o envíanos el enlace de los productos que deseas de Shein.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-pink-500" />,
      title: "Confirma tu Pedido",
      description: "Realiza tu pago y confirma los detalles de tu pedido con nuestro equipo.",
    },
    {
      icon: <Package className="h-10 w-10 text-pink-500" />,
      title: "Procesamos tu Orden",
      description: "Nos encargamos de comprar, recibir y verificar la calidad de tus productos.",
    },
    {
      icon: <Truck className="h-10 w-10 text-pink-500" />,
      title: "Entrega Segura",
      description: "Recibe tus productos en la comodidad de tu hogar en cualquier parte de República Dominicana.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Cómo Funciona?</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Comprar en iDivas es fácil, rápido y seguro. Sigue estos simples pasos:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-pink-100 p-4">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

