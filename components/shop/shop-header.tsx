"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { getCartItemCount } from "@/lib/client-storage"
import { Search, Menu, ShoppingBag, Heart, User, X } from "lucide-react"

export function ShopHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  // Update cart count when component mounts and when cart changes
  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartItemCount())
    }

    // Initial update
    updateCartCount()

    // Listen for storage events (when cart is updated)
    window.addEventListener("storage", updateCartCount)

    // Custom event for cart updates within the same window
    window.addEventListener("cartUpdated", updateCartCount)

    return () => {
      window.removeEventListener("storage", updateCartCount)
      window.removeEventListener("cartUpdated", updateCartCount)
    }
  }, [])

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-sm" : "bg-white"}`}
    >
      {/* Top Bar */}
      <div className="bg-pink-500 text-white py-2 text-center text-sm">
        <p>Envío gratis en compras superiores a RD$ 5,000</p>
      </div>

      {/* Main Header */}
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://i.imgur.com/1PP6Yfo.png"
                alt="iDivas Logo"
                width={120}
                height={40}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Inicio
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Tienda
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Colecciones
            </Link>
            <Link href="/featured" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Destacados
            </Link>
            <Link href="/sale" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Ofertas
            </Link>
            <Link href="/lookbook" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Lookbook
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="absolute right-0 top-0 flex items-center">
                  <Input type="search" placeholder="Buscar productos..." className="w-[200px] md:w-[300px]" />
                  <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setSearchOpen(false)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Cerrar búsqueda</span>
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Buscar</span>
                </Button>
              )}
            </div>

            {/* Account */}
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Mi cuenta</span>
              </Link>
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link href="/favorites">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favoritos</span>
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-pink-500">
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Carrito</span>
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                        <Image
                          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=240&h=80&auto=format&fit=crop"
                          alt="iDivas Logo"
                          width={120}
                          height={40}
                          className="object-contain"
                        />
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Cerrar menú</span>
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 flex-1 overflow-auto">
                    <div className="flex flex-col space-y-3">
                      <Link
                        href="/"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Inicio
                      </Link>
                      <Link
                        href="/shop"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tienda
                      </Link>
                      <Link
                        href="/collections"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Colecciones
                      </Link>
                      <Link
                        href="/featured"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Destacados
                      </Link>
                      <Link
                        href="/sale"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Ofertas
                      </Link>
                      <Link
                        href="/lookbook"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Lookbook
                      </Link>

                      <div className="h-px bg-gray-200 my-2"></div>

                      <Link
                        href="/account"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Mi Cuenta
                      </Link>
                      <Link
                        href="/favorites"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Favoritos
                      </Link>
                      <Link
                        href="/cart"
                        className="py-2 text-lg font-medium hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Carrito
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 border-t">
                    <div className="flex flex-col space-y-3">
                      <Link
                        href="/about"
                        className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sobre Nosotros
                      </Link>
                      <Link
                        href="/contact"
                        className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contacto
                      </Link>
                      <Link
                        href="/shipping"
                        className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Envíos
                      </Link>
                      <Link
                        href="/returns"
                        className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Devoluciones
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Desktop) */}
      <div className="hidden md:block border-t">
        <div className="container px-4 md:px-6">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link
                href="/shop?category=dresses"
                className="text-xs text-gray-500 hover:text-pink-500 transition-colors"
              >
                Vestidos
              </Link>
              <Link href="/shop?category=tops" className="text-xs text-gray-500 hover:text-pink-500 transition-colors">
                Blusas y Tops
              </Link>
              <Link
                href="/shop?category=bottoms"
                className="text-xs text-gray-500 hover:text-pink-500 transition-colors"
              >
                Pantalones y Faldas
              </Link>
              <Link
                href="/shop?category=outerwear"
                className="text-xs text-gray-500 hover:text-pink-500 transition-colors"
              >
                Chaquetas y Abrigos
              </Link>
              <Link
                href="/shop?category=accessories"
                className="text-xs text-gray-500 hover:text-pink-500 transition-colors"
              >
                Accesorios
              </Link>
              <Link href="/shop?category=shoes" className="text-xs text-gray-500 hover:text-pink-500 transition-colors">
                Zapatos
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-xs text-gray-500 hover:text-pink-500 transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/contact" className="text-xs text-gray-500 hover:text-pink-500 transition-colors">
                Contacto
              </Link>
              <Link href="/shipping" className="text-xs text-gray-500 hover:text-pink-500 transition-colors">
                Envíos
              </Link>
              <Link href="/returns" className="text-xs text-gray-500 hover:text-pink-500 transition-colors">
                Devoluciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

