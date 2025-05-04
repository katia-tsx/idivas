import Image from "next/image"

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-full border-8 border-pink-100">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Idalenny Ramos - CEO de iDivas"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Nosotros</h2>
              <p className="text-gray-500 md:text-xl">
                iDivas nació de la pasión por la moda y el deseo de hacer accesibles las últimas tendencias a todas las
                mujeres de República Dominicana.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Nuestra Misión</h3>
                <p className="text-gray-500">
                  Ofrecer productos de calidad a precios accesibles, brindando una experiencia de compra excepcional.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nuestra Visión</h3>
                <p className="text-gray-500">
                  Convertirnos en la tienda de moda online preferida en República Dominicana, destacando por nuestro
                  servicio y calidad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Conoce a Nuestra CEO</h3>
                <p className="text-gray-500">
                  Idalenny Ramos, fundadora y CEO de iDivas, combina su pasión por la moda con su visión empresarial
                  para traerte lo mejor de Shein directamente a tu puerta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

