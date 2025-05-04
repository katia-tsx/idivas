"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Package, MapPin, CreditCard, Bell, Settings, LogOut, Eye } from "lucide-react"

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Mock orders data
  const orders = [
    {
      id: "ORD-2025-001",
      date: "15 Mar, 2025",
      total: "RD$ 3,250.00",
      status: "Entregado",
      statusColor: "bg-green-500",
      items: 3,
    },
    {
      id: "ORD-2025-002",
      date: "28 Feb, 2025",
      total: "RD$ 1,850.00",
      status: "En tránsito",
      statusColor: "bg-blue-500",
      items: 2,
    },
    {
      id: "ORD-2025-003",
      date: "15 Feb, 2025",
      total: "RD$ 4,500.00",
      status: "Procesando",
      statusColor: "bg-yellow-500",
      items: 5,
    },
  ]

  // Mock addresses
  const addresses = [
    {
      id: 1,
      name: "Casa",
      address: "Calle Principal #123, Sector Bella Vista",
      city: "Santo Domingo",
      province: "Distrito Nacional",
      postalCode: "10111",
      phone: "+1 (809) 555-1234",
      isDefault: true,
    },
    {
      id: 2,
      name: "Trabajo",
      address: "Av. Winston Churchill, Torre Empresarial, Piso 5",
      city: "Santo Domingo",
      province: "Distrito Nacional",
      postalCode: "10122",
      phone: "+1 (809) 555-5678",
      isDefault: false,
    },
  ]

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Mi Cuenta", href: "/account", active: true },
            ]}
          />

          <div className="mt-8 max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Iniciar Sesión</CardTitle>
                  <CardDescription>Ingresa a tu cuenta para ver tus pedidos y gestionar tu perfil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Contraseña</Label>
                      <a href="#" className="text-sm text-pink-500 hover:underline">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={() => setIsLoggedIn(true)}>
                    Iniciar Sesión
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿No tienes una cuenta?</CardTitle>
                  <CardDescription>
                    Regístrate para disfrutar de una experiencia de compra personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Al crear una cuenta podrás realizar un seguimiento de tus pedidos, guardar tus direcciones de envío
                    y acceder a ofertas exclusivas.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Crear Cuenta
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Mi Cuenta", href: "/account", active: true },
          ]}
        />

        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-pink-100 text-pink-500 text-xl">MP</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 font-semibold text-lg">María Pérez</h3>
                  <p className="text-sm text-gray-500">maria.perez@ejemplo.com</p>

                  <div className="w-full mt-6 space-y-1">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="#profile">
                        <User className="mr-2 h-4 w-4" />
                        Mi Perfil
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="#orders">
                        <Package className="mr-2 h-4 w-4" />
                        Mis Pedidos
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="#addresses">
                        <MapPin className="mr-2 h-4 w-4" />
                        Direcciones
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="#payment">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Métodos de Pago
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="#notifications">
                        <Bell className="mr-2 h-4 w-4" />
                        Notificaciones
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="#settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Configuración
                      </a>
                    </Button>
                  </div>

                  <Button variant="outline" className="w-full mt-6" onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar Sesión
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <Tabs defaultValue="orders">
              <TabsList className="mb-6">
                <TabsTrigger value="orders">Mis Pedidos</TabsTrigger>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
                <TabsTrigger value="addresses">Direcciones</TabsTrigger>
              </TabsList>

              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Historial de Pedidos</CardTitle>
                    <CardDescription>Visualiza y gestiona todos tus pedidos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Pedido</TableHead>
                          <TableHead>Fecha</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>Estado</TableHead>
                          <TableHead>Productos</TableHead>
                          <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                              <Badge className={`${order.statusColor} text-white`}>{order.status}</Badge>
                            </TableCell>
                            <TableCell>{order.items}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                Ver
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>Actualiza tu información de perfil</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" defaultValue="María" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" defaultValue="Pérez" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" defaultValue="maria.perez@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" defaultValue="+1 (809) 555-1234" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-pink-500 hover:bg-pink-600">Guardar Cambios</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="addresses">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Mis Direcciones</CardTitle>
                      <CardDescription>Gestiona tus direcciones de envío</CardDescription>
                    </div>
                    <Button className="bg-pink-500 hover:bg-pink-600">Añadir Dirección</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <Card key={address.id} className="border border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center">
                                <h3 className="font-semibold">{address.name}</h3>
                                {address.isDefault && <Badge className="ml-2 bg-pink-500">Predeterminada</Badge>}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  Editar
                                </Button>
                                {!address.isDefault && (
                                  <Button variant="ghost" size="sm">
                                    Eliminar
                                  </Button>
                                )}
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-gray-500 space-y-1">
                              <p>{address.address}</p>
                              <p>
                                {address.city}, {address.province} {address.postalCode}
                              </p>
                              <p>{address.phone}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

