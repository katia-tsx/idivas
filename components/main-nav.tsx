"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav() {
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
  ]

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <ShoppingBag className="h-6 w-6 text-pink-500" />
        <span className="inline-block font-bold text-xl tracking-tight">iDivas</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-pink-500",
              route.active ? "text-pink-500" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

