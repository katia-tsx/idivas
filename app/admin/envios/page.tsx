"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, MoreHorizontal, Truck, Map, PackageCheck, PackageX, Edit, MapPin, Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function EnviosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock shipping data
  const shippings = [
    {
      id: "ENV-2025-001",
      orderId: "ORD-2025-001",
      customer: "María Pérez",
      address: "Calle Principal #123, Bella Vista, Santo Domingo",
      province: "Distrito Nacional",
      phone: "+1 (809) 555-1234",
      status: "Entregado",
      statusColor: "bg-green-500",
      carrier: "Caribe Express",
      trackingNumber: "CE789456123",
      date: "16 Mar, 2025",
      deliveryDate: "18 Mar, 2025",
    },
    {
      id: "ENV-2025-002",
      orderId: "ORD-2025-002",
      customer: "Laura Gómez",
      address: "Av. Winston Churchill, Piantini, Santo Domingo",
      province: "Distrito Nacional",
      phone: "+1 (809) 555-5678",
      status: "En tránsito",
      statusColor: "bg-blue-500",
      carrier: "Caribe Express",
      trackingNumber: "CE789456124",
      date: "01 Mar, 2025",
      deliveryDate: "Pendiente",
    },
    {
      id: "ENV-2025-003",
      orderId: "ORD-2025-003",
      customer: "Carolina Díaz",
      address: "Calle Las Flores #45, Los Jardines, Santiago",
      province: "Santiago",
      phone: "+1 (809) 555-9012",
      status: "Procesando",
      statusColor: "bg-yellow-500",
      carrier: "Pendiente",
      trackingNumber: "Pendiente",
      date: "16 Feb, 2025",
      deliveryDate: "Pendiente",
    },
    {
      id: "ENV-2025-004",
      orderId: "ORD-2025-004",
      customer: "Ana Martínez",
      address: "Calle Principal #78, Gazcue, Santo Domingo",
      province: "Distrito Nacional",
      phone: "+1 (809) 555-3456",
      status: "Cancelado",
      statusColor: "bg-red-500",
      carrier: "N/A",
      trackingNumber: "N/A",
      date: "11 Feb, 2025",
      deliveryDate: "N/A",
    },
    {
      id: "ENV-2025-005",
      orderId: "ORD-2025-005",
      customer: "Sofía Rodríguez",
      address: "Av. Anacaona #32, Los Cacicazgos, Santo Domingo",
      province: "Distrito Nacional",
      phone: "+1 (809) 555-7890",
      status: "Entregado",
      statusColor: "bg-green-500",
      carrier: "Caribe Express",
      trackingNumber: "CE789456127",
      date: "06 Feb, 2025",
      deliveryDate: "08 Feb, 2025",
    },
  ]

  // Filter shippings based on search term
  const filteredShippings = shippings.filter(
    (shipping) =>
      shipping.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipping.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipping.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipping.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Shipping zones
  const shippingZones = [
    {
      id: 1,
      name: "Santo Domingo",
      provinces: ["Distrito Nacional", "Santo Domingo Este", "Santo Domingo Norte", "Santo Domingo Oeste"],
      price: 150,
      estimatedDelivery: "1-2 días",
    },
    {
      id: 2,
      name: "Norte (Cibao)",
      provinces: ["Santiago", "Puerto Plata", "La Vega", "Espaillat"],
      price: 250,
      estimatedDelivery: "2-3 días",
    },
    {
      id: 3,
      name: "Este",
      provinces: ["La Altagracia", "La Romana", "San Pedro de Macorís"],
      price: 200,
      estimatedDelivery: "2-3 días",
    },
    {
      id: 4,
      name: "Sur",
      provinces: ["Azua", "Barahona", "Peravia", "San Cristóbal"],
      price: 300,
      estimatedDelivery: "3-4 días",
    },
  ]

  // Update shipping status
  const updateShippingStatus = (id: string, status: string) => {
    toast({
      title: "Estado actualizado",
      description: `El envío ${id} ha sido actualizado a "${status}"`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Envíos</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Sincronización completa",
                description: "La información de envíos ha sido actualizada desde los proveedores.",
              })
            }}
          >
            <Truck className="mr-2 h-4 w-4" />
            Sincronizar Datos
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-pink-500 hover:bg-pink-600">
                <Plus className="mr-2 h-4 w-4" />
                Crear Envío
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Crear Nuevo Envío</DialogTitle>
                <DialogDescription>Completa los detalles para crear un nuevo envío</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="order">Pedido Relacionado</Label>
                    <Select>
                      <SelectTrigger id="order">
                        <SelectValue placeholder="Seleccionar pedido" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ord-001">ORD-2025-001</SelectItem>
                        <SelectItem value="ord-002">ORD-2025-002</SelectItem>
                        <SelectItem value="ord-003">ORD-2025-003</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carrier">Transportista</Label>
                    <Select>
                      <SelectTrigger id="carrier">
                        <SelectValue placeholder="Seleccionar transportista" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="caribe">Caribe Express</SelectItem>
                        <SelectItem value="bps">BPS Cargo</SelectItem>
                        <SelectItem value="egi">EGI Cargo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tracking">Número de Seguimiento</Label>
                  <Input id="tracking" placeholder="Ej: CE789456123" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Estado</Label>
                    <Select defaultValue="processing">
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Seleccionar estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="processing">Procesando</SelectItem>
                        <SelectItem value="shipped">Enviado</SelectItem>
                        <SelectItem value="intransit">En Tránsito</SelectItem>
                        <SelectItem value="delivered">Entregado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha de Envío</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notas Adicionales</Label>
                  <Input id="notes" placeholder="Instrucciones especiales para este envío" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600"
                  onClick={() => {
                    toast({
                      title: "Envío creado",
                      description: "El nuevo envío ha sido creado correctamente.",
                    })
                  }}
                >
                  Crear Envío
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-blue-100 p-3 mb-4">
              <PackageCheck className="h-6 w-6 text-blue-500" />
            </div>
            <CardTitle className="text-lg mb-1">Por Procesar</CardTitle>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-yellow-100 p-3 mb-4">
              <Truck className="h-6 w-6 text-yellow-500" />
            </div>
            <CardTitle className="text-lg mb-1">En Tránsito</CardTitle>
            <p className="text-2xl font-bold">8</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Map className="h-6 w-6 text-green-500" />
            </div>
            <CardTitle className="text-lg mb-1">Entregados</CardTitle>
            <p className="text-2xl font-bold">42</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-red-100 p-3 mb-4">
              <PackageX className="h-6 w-6 text-red-500" />
            </div>
            <CardTitle className="text-lg mb-1">Cancelados</CardTitle>
            <p className="text-2xl font-bold">5</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="envios" className="space-y-4">
        <TabsList>
          <TabsTrigger value="envios">Envíos</TabsTrigger>
          <TabsTrigger value="zonas">Zonas de Envío</TabsTrigger>
          <TabsTrigger value="transportistas">Transportistas</TabsTrigger>
        </TabsList>

        <div className="flex justify-end">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar envíos..."
              className="pl-8 w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value="envios" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Envío</TableHead>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Ubicación</TableHead>
                    <TableHead>Transportista</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredShippings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No se encontraron envíos
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredShippings.map((shipping) => (
                      <TableRow key={shipping.id}>
                        <TableCell className="font-medium">{shipping.id}</TableCell>
                        <TableCell>{shipping.orderId}</TableCell>
                        <TableCell>{shipping.customer}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{shipping.province}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{shipping.carrier}</span>
                            {shipping.trackingNumber !== "Pendiente" && shipping.trackingNumber !== "N/A" && (
                              <span className="text-xs text-muted-foreground">{shipping.trackingNumber}</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{shipping.date}</span>
                            {shipping.deliveryDate !== "Pendiente" && shipping.deliveryDate !== "N/A" && (
                              <span className="text-xs text-muted-foreground">Entrega: {shipping.deliveryDate}</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${shipping.statusColor} text-white`}>{shipping.status}</Badge>
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
                              <DropdownMenuItem onClick={() => updateShippingStatus(shipping.id, "Procesando")}>
                                <PackageCheck className="mr-2 h-4 w-4" />
                                Marcar como Procesando
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateShippingStatus(shipping.id, "En tránsito")}>
                                <Truck className="mr-2 h-4 w-4" />
                                Marcar como En Tránsito
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateShippingStatus(shipping.id, "Entregado")}>
                                <Map className="mr-2 h-4 w-4" />
                                Marcar como Entregado
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => updateShippingStatus(shipping.id, "Cancelado")}>
                                <PackageX className="mr-2 h-4 w-4" />
                                Marcar como Cancelado
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Editar Envío
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

        <TabsContent value="zonas" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Zonas de Envío</CardTitle>
                <Button className="bg-pink-500 hover:bg-pink-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Añadir Zona
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Provincias</TableHead>
                    <TableHead>Costo (RD$)</TableHead>
                    <TableHead>Tiempo Estimado</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shippingZones.map((zone) => (
                    <TableRow key={zone.id}>
                      <TableCell className="font-medium">{zone.name}</TableCell>
                      <TableCell>{zone.provinces.join(", ")}</TableCell>
                      <TableCell>RD$ {zone.price}</TableCell>
                      <TableCell>{zone.estimatedDelivery}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Editar</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transportistas" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Transportistas</CardTitle>
                <Button className="bg-pink-500 hover:bg-pink-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Añadir Transportista
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Caribe Express</h3>
                        <p className="text-sm text-muted-foreground mt-1">Servicio nacional</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Estado:</span>
                        <Badge className="bg-green-500">Activo</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">URL de Seguimiento:</span>
                        <span className="text-sm font-medium">caribexpress.com/tracking</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">BPS Cargo</h3>
                        <p className="text-sm text-muted-foreground mt-1">Servicio nacional</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Estado:</span>
                        <Badge className="bg-green-500">Activo</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">URL de Seguimiento:</span>
                        <span className="text-sm font-medium">bpscargo.com/tracking</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">EGI Cargo</h3>
                        <p className="text-sm text-muted-foreground mt-1">Servicio nacional</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Estado:</span>
                        <Badge className="bg-gray-500">Inactivo</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">URL de Seguimiento:</span>
                        <span className="text-sm font-medium">egicargo.com/tracking</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

