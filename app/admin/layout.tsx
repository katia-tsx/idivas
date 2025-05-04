import type React from "react"
import type { Metadata } from "next"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export const metadata: Metadata = {
  title: "iDivas Admin | Panel de Administración",
  description: "Panel de administración para gestionar productos, pedidos e inventario de iDivas",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  )
}

