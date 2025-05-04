import { ShoppingBag, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold">iDivas</span>
            </div>
            <p className="text-sm text-gray-500">
              Tu destino de moda favorito en República Dominicana. Encuentra las últimas tendencias de Shein con entrega
              rápida y segura.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Compras</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-gray-500 hover:text-pink-500">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-500 hover:text-pink-500">
                  Colecciones
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-gray-500 hover:text-pink-500">
                  Destacados
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-500 hover:text-pink-500">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/lookbook" className="text-gray-500 hover:text-pink-500">
                  Lookbook
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-pink-500">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-pink-500">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-500 hover:text-pink-500">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-500 hover:text-pink-500">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-pink-500">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-pink-500 shrink-0" />
                <span className="text-gray-500">Santo Domingo, República Dominicana</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-500" />
                <span className="text-gray-500">+1 (809) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="text-gray-500">info@idivas.com</span>
              </li>
            </ul>
            <Button className="w-full bg-pink-500 hover:bg-pink-600">Contáctanos</Button>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} iDivas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

