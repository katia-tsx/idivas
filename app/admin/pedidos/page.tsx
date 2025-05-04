"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Eye, Package, Truck, CheckCircle, AlertCircle, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function PedidosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock orders data
  const orders = [
    {
      id: "ORD-2025-001",
      customer: "María Pérez",
      initials: "MP",
      date: "15 Mar, 2025",
      total: 3250,
      items: 3,
      status: "Entregado",
      statusColor: "bg-green-500",
      paymentStatus: "Pagado",
      paymentMethod: "Tarjeta de Crédito",
    },
    {
      id: "ORD-2025-002",
      customer: "Laura Gómez",
      initials: "LG",
      date: "28 Feb, 2025",
      total: 1850,
      items: 2,
      status: "En tránsito",
      statusColor: "bg-blue-500",
      paymentStatus: "Pagado",
      paymentMethod: "Transferencia Bancaria",
    },
    {
      id: "ORD-2025-003",
      customer: "Carolina Díaz",
      initials: "CD",
      date: "15 Feb, 2025",
      total: 4500,
      items: 5,
      status: "Procesando",
      statusColor: "bg-yellow-500",
      paymentStatus: "Pendiente",
      paymentMethod: "Efectivo contra entrega",
    },
    {
      id: "ORD-2025-004",
      customer: "Ana Martínez",
      initials: "AM",
      date: "10 Feb, 2025",
      total: 1350,
      items: 1,
      status: "Cancelado",
      statusColor: "bg-red-500",
      paymentStatus: "Reembolsado",
      paymentMethod: "Tarjeta de Crédito",
    },
    {
      id: "ORD-2025-005",
      customer: "Sofía Rodríguez",
      initials: "SR",
      date: "05 Feb, 2025",
      total: 5980,
      items: 4,
      status: "Entregado",
      statusColor: "bg-green-500",
      paymentStatus: "Pagado",
      paymentMethod: "PayPal",
    },
  ]

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Pedidos</h2>
        <Button className="bg-pink-500 hover:bg-pink-600">Exportar Pedidos</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-blue-100 p-3 mb-4">
              <Package className="h-6 w-6 text-blue-500" />
            </div>
            <CardTitle className="text-xl mb-1">Procesando</CardTitle>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-yellow-100 p-3 mb-4">
              <Package className="h-6 w-6 text-yellow-500" />
            </div>
            <CardTitle className="text-xl mb-1">Empacados</CardTitle>
            <p className="text-3xl font-bold">5</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-purple-100 p-3 mb-4">
              <Truck className="h-6 w-6 text-purple-500" />
            </div>
            <CardTitle className="text-xl mb-1">En Tránsito</CardTitle>
            <p className="text-3xl font-bold">8</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <CardTitle className="text-xl mb-1">Entregados</CardTitle>
            <p className="text-3xl font-bold">42</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="todos" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="procesando">Procesando</TabsTrigger>
            <TabsTrigger value="transito">En Tránsito</TabsTrigger>
            <TabsTrigger value="entregados">Entregados</TabsTrigger>
            <TabsTrigger value="cancelados">Cancelados</TabsTrigger>
          </TabsList>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar pedidos..."
              className="pl-8 w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value="todos" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-right">Productos</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Pago</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No se encontraron pedidos
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-pink-100 text-pink-500">{order.initials}</AvatarFallback>
                            </Avatar>
                            <span>{order.customer}</span>
                          </div>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">RD$ {order.total.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{order.items}</TableCell>
                        <TableCell>
                          <Badge className={`${order.statusColor} text-white`}>{order.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              order.paymentStatus === "Pagado"
                                ? "border-green-500 text-green-500"
                                : order.paymentStatus === "Pendiente"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-red-500 text-red-500"
                            }
                          >
                            {order.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Acciones</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                Ver Detalles
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Package className="mr-2 h-4 w-4" />
                                Actualizar Estado
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <AlertCircle className="mr-2 h-4 w-4" />
                                Marcar Problema
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procesando" className="space-y-4">
          {/* Contenido similar para pedidos en procesamiento */}
        </TabsContent>

        <TabsContent value="transito" className="space-y-4">
          {/* Contenido similar para pedidos en tránsito */}
        </TabsContent>

        <TabsContent value="entregados" className="space-y-4">
          {/* Contenido similar para pedidos entregados */}
        </TabsContent>

        <TabsContent value="cancelados" className="space-y-4">
          {/* Contenido similar para pedidos cancelados */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

