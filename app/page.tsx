import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Truck, RotateCcw, CreditCard } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&h=700&auto=format&fit=crop"
            alt="iDivas - Moda Premium"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Descubre la Nueva Colección
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  Las últimas tendencias de moda con entrega rápida en República Dominicana
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
                    <Link href="/shop">Comprar Ahora</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                  >
                    <Link href="/collections">Ver Colecciones</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Categorías Populares</h2>
            <p className="text-gray-500">Explora nuestras categorías más buscadas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <Link href="/shop?category=dresses" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Vestidos"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-medium">Vestidos</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=tops" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Tops"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-medium">Tops</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=bottoms" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Bottoms"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-medium">Bottoms</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=outerwear" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Outerwear"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-medium">Outerwear</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=accessories" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Accessories"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-medium">Accesorios</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=shoes" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Shoes"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white font-medium">Zapatos</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Productos Destacados</h2>
              <p className="text-gray-500">Descubre nuestra selección de productos más populares</p>
            </div>
            <Link
              href="/featured"
              className="mt-4 md:mt-0 text-pink-500 hover:text-pink-600 transition-colors flex items-center"
            >
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Product 1 */}
            <Card className="overflow-hidden border-0 shadow-sm group">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=300&h=400&auto=format&fit=crop"
                    alt="Vestido Floral"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Badge className="absolute top-2 left-2 bg-pink-500">Nuevo</Badge>
                <Badge className="absolute top-2 right-2 bg-black">-15%</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1 group-hover:text-pink-500 transition-colors">Vestido Floral Verano</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-pink-500">RD$ 1,572</span>
                    <span className="text-sm text-gray-400 line-through">RD$ 1,850</span>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="sr-only">Añadir al carrito</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 2 */}
            <Card className="overflow-hidden border-0 shadow-sm group">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=300&h=400&auto=format&fit=crop"
                    alt="Blusa Asimétrica"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1 group-hover:text-pink-500 transition-colors">Blusa Asimétrica</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">RD$ 950</span>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="sr-only">Añadir al carrito</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 3 */}
            <Card className="overflow-hidden border-0 shadow-sm group">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&h=400&auto=format&fit=crop"
                    alt="Jeans Premium"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Badge className="absolute top-2 right-2 bg-black">-20%</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1 group-hover:text-pink-500 transition-colors">Jeans Premium</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-pink-500">RD$ 1,280</span>
                    <span className="text-sm text-gray-400 line-through">RD$ 1,600</span>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="sr-only">Añadir al carrito</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Product 4 */}
            <Card className="overflow-hidden border-0 shadow-sm group">
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&h=400&auto=format&fit=crop"
                    alt="Bolso Elegante"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <Badge className="absolute top-2 left-2 bg-pink-500">Nuevo</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1 group-hover:text-pink-500 transition-colors">Bolso Elegante</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">RD$ 2,100</span>
                  </div>
                  <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="sr-only">Añadir al carrito</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-lg">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&h=400&auto=format&fit=crop"
                alt="Oferta Especial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="container px-4 md:px-6">
                  <div className="max-w-lg">
                    <Badge className="mb-4 bg-pink-500">Oferta Limitada</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hasta 50% de Descuento</h2>
                    <p className="text-white/90 mb-6">
                      En nuestra colección de verano. Oferta válida hasta agotar existencias.
                    </p>
                    <Button asChild className="bg-white text-black hover:bg-white/90">
                      <Link href="/sale">Ver Ofertas</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Nuestras Colecciones</h2>
            <p className="text-gray-500">Explora nuestras colecciones cuidadosamente seleccionadas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/collections/primavera-2025" className="group">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Primavera 2025"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Primavera 2025</h3>
                    <p className="text-white/80 text-sm">24 productos</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/collections/fiesta-noche" className="group">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Fiesta & Noche"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Fiesta & Noche</h3>
                    <p className="text-white/80 text-sm">15 productos</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/collections/accesorios-trendy" className="group">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=400&h=300&auto=format&fit=crop"
                  alt="Accesorios Trendy"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Accesorios Trendy</h3>
                    <p className="text-white/80 text-sm">20 productos</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/collections">Ver Todas las Colecciones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-medium mb-2">Envío Rápido</h3>
              <p className="text-gray-500 text-sm">Entrega en 2-4 días hábiles en todo República Dominicana</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <RotateCcw className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-medium mb-2">Devoluciones Gratuitas</h3>
              <p className="text-gray-500 text-sm">30 días para cambios y devoluciones sin costo adicional</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-medium mb-2">Pago Seguro</h3>
              <p className="text-gray-500 text-sm">Múltiples métodos de pago con procesamiento seguro</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-medium mb-2">Calidad Garantizada</h3>
              <p className="text-gray-500 text-sm">Productos seleccionados con los más altos estándares de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Síguenos en Instagram</h2>
            <p className="text-gray-500">@idivas_rd</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="https://instagram.com" className="group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Instagram post 1"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
            <Link href="https://instagram.com" className="group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Instagram post 2"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
            <Link href="https://instagram.com" className="group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Instagram post 3"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
            <Link href="https://instagram.com" className="group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Instagram post 4"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
            <Link href="https://instagram.com" className="group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Instagram post 5"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
            <Link href="https://instagram.com" className="group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="Instagram post 6"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
            <p className="text-gray-500 mb-6">
              Recibe las últimas novedades, ofertas exclusivas y consejos de moda directamente en tu correo.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit" className="bg-pink-500 hover:bg-pink-600">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

