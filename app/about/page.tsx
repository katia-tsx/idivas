import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Package, ShieldCheck, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="iDivas - Sobre Nosotros"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Sobre Nosotros</h1>
              <p className="mt-2 md:mt-4 max-w-2xl mx-auto">
                Conoce la historia detrás de iDivas y nuestra misión de traer la mejor moda a República Dominicana
              </p>
            </div>
          </div>
        </div>

        <div className="container px-4 py-12 md:px-6 md:py-16">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Sobre Nosotros", href: "/about", active: true },
            ]}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  iDivas nació en 2020 con una visión clara: hacer que la moda internacional sea accesible para todos en
                  República Dominicana. Fundada por Idalenny Ramos, una apasionada de la moda con experiencia en
                  comercio electrónico, iDivas comenzó como un pequeño emprendimiento que rápidamente se convirtió en
                  una de las tiendas online de moda más populares del país.
                </p>
                <p>
                  Lo que comenzó como un sueño en un pequeño apartamento en Santo Domingo, hoy es una empresa en
                  crecimiento con un equipo dedicado y miles de clientes satisfechos. Nuestra historia es un testimonio
                  de perseverancia, pasión y el compromiso inquebrantable de ofrecer lo mejor a nuestros clientes.
                </p>
                <p>
                  A lo largo de los años, hemos establecido relaciones sólidas con proveedores internacionales, lo que
                  nos permite ofrecer las últimas tendencias de moda a precios accesibles, sin comprometer la calidad.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Nuestra+Historia"
                alt="Historia de iDivas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pasión</h3>
                  <p className="text-gray-600">
                    Amamos lo que hacemos y nos apasiona la moda. Esta pasión se refleja en cada aspecto de nuestro
                    negocio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Calidad</h3>
                  <p className="text-gray-600">
                    Nos comprometemos a ofrecer productos de alta calidad que cumplan con las expectativas de nuestros
                    clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                  <p className="text-gray-600">
                    Valoramos a nuestra comunidad de clientes y nos esforzamos por crear una experiencia de compra
                    excepcional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-pink-100 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovación</h3>
                  <p className="text-gray-600">
                    Buscamos constantemente nuevas formas de mejorar y ofrecer lo último en tendencias de moda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Nuestro+Equipo"
                alt="Equipo de iDivas"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Detrás de iDivas hay un equipo diverso y talentoso de profesionales apasionados por la moda y el
                  servicio al cliente. Desde nuestros especialistas en selección de productos hasta nuestro equipo de
                  atención al cliente, todos compartimos el mismo objetivo: hacer que tu experiencia de compra sea
                  excepcional.
                </p>
                <p>
                  Nuestro equipo está formado por personas creativas, dedicadas y con un profundo conocimiento de la
                  industria de la moda. Trabajamos juntos para seleccionar cuidadosamente cada producto, asegurar la
                  calidad y brindarte el mejor servicio posible.
                </p>
                <p>
                  En iDivas, creemos que nuestro éxito se debe a la pasión y el compromiso de nuestro equipo. Estamos
                  constantemente aprendiendo, creciendo y buscando nuevas formas de mejorar para ofrecerte lo mejor.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a la Comunidad iDivas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Ser parte de la comunidad iDivas significa estar al día con las últimas tendencias, acceder a ofertas
              exclusivas y formar parte de una familia que comparte la pasión por la moda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-pink-500 hover:bg-pink-600">
                <Link href="/shop">Explorar Tienda</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

