import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart, Box, Home, Package, Percent, Settings, ShoppingBag, ShoppingCart, Truck, Users } from "lucide-react"

export function AdminSidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block w-64">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="h-6 w-6 text-pink-500" />
            <span className="">iDivas Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-pink-500"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/productos"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <Package className="h-4 w-4" />
              Productos
            </Link>
            <Link
              href="/admin/pedidos"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <ShoppingCart className="h-4 w-4" />
              Pedidos
            </Link>
            <Link
              href="/admin/clientes"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <Users className="h-4 w-4" />
              Clientes
            </Link>
            <Link
              href="/admin/envios"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <Truck className="h-4 w-4" />
              Envíos
            </Link>
            <Link
              href="/admin/inventario"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <Box className="h-4 w-4" />
              Inventario
            </Link>
            <Link
              href="/admin/calculadora"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <Percent className="h-4 w-4" />
              Calculadora
            </Link>
            <Link
              href="/admin/analiticas"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <BarChart className="h-4 w-4" />
              Analíticas
            </Link>
            <Link
              href="/admin/configuracion"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-pink-500"
            >
              <Settings className="h-4 w-4" />
              Configuración
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button className="w-full bg-pink-500 hover:bg-pink-600">Cerrar Sesión</Button>
        </div>
      </div>
    </div>
  )
}

