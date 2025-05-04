"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Plus, MoreHorizontal, Mail, Phone, Calendar, Edit, Trash2, ShoppingBag } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ClientesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock clients data
  const clients = [
    {
      id: 1,
      name: "María Pérez",
      email: "maria.perez@ejemplo.com",
      phone: "+1 (809) 555-1234",
      address: "Calle Principal #123, Bella Vista, Santo Domingo",
      totalOrders: 8,
      totalSpent: 15750,
      lastOrderDate: "15 Mar, 2025",
      status: "Activo",
      notes: "Cliente frecuente, prefiere entregas en la tarde.",
    },
    {
      id: 2,
      name: "Laura Gómez",
      email: "laura.gomez@ejemplo.com",
      phone: "+1 (809) 555-5678",
      address: "Av. Winston Churchill, Piantini, Santo Domingo",
      totalOrders: 3,
      totalSpent: 5200,
      lastOrderDate: "28 Feb, 2025",
      status: "Activo",
      notes: "",
    },
    {
      id: 3,
      name: "Carolina Díaz",
      email: "carolina.diaz@ejemplo.com",
      phone: "+1 (809) 555-9012",
      address: "Calle Las Flores #45, Los Jardines, Santiago",
      totalOrders: 5,
      totalSpent: 8700,
      lastOrderDate: "15 Feb, 2025",
      status: "Activo",
      notes: "Prefiere contacto por WhatsApp.",
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana.martinez@ejemplo.com",
      phone: "+1 (809) 555-3456",
      address: "Calle Principal #78, Gazcue, Santo Domingo",
      totalOrders: 1,
      totalSpent: 1350,
      lastOrderDate: "10 Feb, 2025",
      status: "Inactivo",
      notes: "",
    },
    {
      id: 5,
      name: "Sofía Rodríguez",
      email: "sofia.rodriguez@ejemplo.com",
      phone: "+1 (809) 555-7890",
      address: "Av. Anacaona #32, Los Cacicazgos, Santo Domingo",
      totalOrders: 12,
      totalSpent: 24500,
      lastOrderDate: "05 Feb, 2025",
      status: "Activo",
      notes: "Cliente VIP. Ofrecer descuentos especiales.",
    },
  ]

  // Filter clients based on search term
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteClient = (id: number) => {
    toast({
      title: "Cliente eliminado",
      description: "El cliente ha sido eliminado correctamente.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-pink-500 hover:bg-pink-600">
              <Plus className="mr-2 h-4 w-4" />
              Añadir Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Cliente</DialogTitle>
              <DialogDescription>Completa los detalles del cliente para añadirlo al sistema</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Ej: María Pérez" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="ejemplo@correo.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+1 (809) 555-1234" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select defaultValue="activo">
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Seleccionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="activo">Activo</SelectItem>
                      <SelectItem value="inactivo">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" placeholder="Calle, Sector, Ciudad" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea id="notes" placeholder="Información adicional del cliente..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button
                className="bg-pink-500 hover:bg-pink-600"
                onClick={() => {
                  toast({
                    title: "Cliente añadido",
                    description: "El nuevo cliente ha sido añadido correctamente.",
                  })
                }}
              >
                Guardar Cliente
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="todos" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="activos">Activos</TabsTrigger>
            <TabsTrigger value="inactivos">Inactivos</TabsTrigger>
          </TabsList>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar clientes..."
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
                    <TableHead>Cliente</TableHead>
                    <TableHead>Contacto</TableHead>
                    <TableHead className="text-right">Pedidos</TableHead>
                    <TableHead className="text-right">Total Gastado</TableHead>
                    <TableHead>Último Pedido</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No se encontraron clientes
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredClients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarFallback className="bg-pink-100 text-pink-500">
                                {client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{client.name}</div>
                              <div className="text-sm text-muted-foreground">ID: {client.id}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-1 text-sm">
                              <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{client.email}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm">
                              <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                              <span>{client.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">{client.totalOrders}</TableCell>
                        <TableCell className="text-right">RD$ {client.totalSpent.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{client.lastOrderDate}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={client.status === "Activo" ? "bg-green-500" : "bg-gray-500"}>
                            {client.status}
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
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Ver Pedidos
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDeleteClient(client.id)} className="text-red-500">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Eliminar
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

        <TabsContent value="activos" className="space-y-4">
          {/* Similar content for active clients */}
        </TabsContent>

        <TabsContent value="inactivos" className="space-y-4">
          {/* Similar content for inactive clients */}
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

