import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function ShopFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Newsletter */}
      <div className="bg-pink-500 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Suscríbete a nuestro newsletter</h3>
              <p>Recibe las últimas tendencias y ofertas exclusivas directamente en tu correo.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-pink-500 hover:bg-white/90">Suscribirse</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="https://i.imgur.com/1PP6Yfo.png"
                  alt="iDivas Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <p className="text-gray-500 text-sm mb-4">
                Tu tienda de moda favorita en República Dominicana. Encuentra las últimas tendencias con entrega rápida
                y segura.
              </p>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Compras</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Tienda
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Colecciones
                  </Link>
                </li>
                <li>
                  <Link href="/featured" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Destacados
                  </Link>
                </li>
                <li>
                  <Link href="/sale" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Ofertas
                  </Link>
                </li>
                <li>
                  <Link href="/lookbook" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Lookbook
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Información</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Envíos
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Devoluciones
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-pink-500 transition-colors text-sm">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-500 text-sm">
                    Calle Principal #123, Local 4<br />
                    Santo Domingo, República Dominicana
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-500 text-sm">+1 (809) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <a
                    href="mailto:info@idivas.com"
                    className="text-gray-500 hover:text-pink-500 transition-colors text-sm"
                  >
                    info@idivas.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} iDivas. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Powered by</span>
                <a
                  href="https://www.talentix.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Image
                    src="https://i.imgur.com/YklAFIO.png"
                    alt="Talentix"
                    width={80}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=40&h=30&auto=format&fit=crop"
                alt="Visa"
                width={40}
                height={30}
                className="object-contain"
              />
              <Image
                src="https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=40&h=30&auto=format&fit=crop"
                alt="Mastercard"
                width={40}
                height={30}
                className="object-contain"
              />
              <Image
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=40&h=30&auto=format&fit=crop"
                alt="American Express"
                width={40}
                height={30}
                className="object-contain"
              />
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=40&h=30&auto=format&fit=crop"
                alt="PayPal"
                width={40}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

