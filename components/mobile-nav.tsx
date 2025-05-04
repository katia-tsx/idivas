"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Inicio",
      active: pathname === "/",
    },
    {
      href: "/shop",
      label: "Tienda",
      active: pathname === "/shop",
    },
    {
      href: "/collections",
      label: "Colecciones",
      active: pathname === "/collections",
    },
    {
      href: "/about",
      label: "Nosotros",
      active: pathname === "/about",
    },
    {
      href: "/account",
      label: "Mi Cuenta",
      active: pathname === "/account",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-2">
          <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setOpen(false)}>
            <ShoppingBag className="h-6 w-6 text-pink-500" />
            <span className="font-bold text-xl">iDivas</span>
          </Link>
          <nav className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-pink-500 py-2",
                  route.active ? "text-pink-500" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="bg-pink-500 text-white py-2 px-4 rounded-md text-sm font-medium text-center mt-4"
            >
              Comprar Ahora
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

