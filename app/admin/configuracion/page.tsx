"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Settings,
  CreditCard,
  User,
  Truck,
  Bell,
  ShieldCheck,
  Store,
  LogOut,
  UploadCloud,
  Instagram,
  Facebook,
  Twitter,
  ShoppingBag,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [logoFile, setLogoFile] = useState<File | null>(null)

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0])
      toast({
        title: "Archivo seleccionado",
        description: `Nombre: ${e.target.files[0].name}`,
      })
    }
  }

  // Save settings
  const handleSaveSettings = () => {
    toast({
      title: "Configuración guardada",
      description: "Los cambios se han guardado correctamente.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
        <p className="text-muted-foreground">Administra la configuración de tu tienda y personaliza tu experiencia</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-transparent p-0 h-auto">
          <div className="flex overflow-x-auto space-x-1 pb-2 border-b">
            <TabsTrigger
              value="general"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <Settings className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="store"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <Store className="w-4 h-4 mr-2" />
              Tienda
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Pagos
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <Truck className="w-4 h-4 mr-2" />
              Envíos
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notificaciones
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Seguridad
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="rounded-none border-b-2 border-transparent px-4 py-2 hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <User className="w-4 h-4 mr-2" />
              Cuenta
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información General</CardTitle>
              <CardDescription>Configura la información básica de tu tienda.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="store-name">Nombre de la Tienda</Label>
                <Input id="store-name" defaultValue="iDivas" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-description">Descripción de la Tienda</Label>
                <Textarea
                  id="store-description"
                  defaultValue="Tu tienda de moda favorita en República Dominicana. Encuentra las últimas tendencias de Shein con entrega rápida y segura."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-email">Correo Electrónico de Contacto</Label>
                <Input id="store-email" type="email" defaultValue="info@idivas.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-phone">Teléfono de Contacto</Label>
                <Input id="store-phone" defaultValue="+1 (809) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-address">Dirección Física</Label>
                <Textarea id="store-address" defaultValue="Santo Domingo, República Dominicana" />
              </div>
              <div className="space-y-2">
                <Label>Logo de la Tienda</Label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-md border flex items-center justify-center bg-muted">
                    <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label htmlFor="logo-upload" asChild>
                      <Button variant="outline" className="cursor-pointer">
                        <UploadCloud className="mr-2 h-4 w-4" />
                        Subir Logo
                      </Button>
                    </Label>
                    <p className="text-xs text-muted-foreground">Recomendado: 250x100px en formato PNG o SVG</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Redes Sociales</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="instagram">Instagram</Label>
                    </div>
                    <Input id="instagram" defaultValue="@idivas_rd" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Facebook className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="facebook">Facebook</Label>
                    </div>
                    <Input id="facebook" defaultValue="iDivasRD" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="twitter">Twitter</Label>
                    </div>
                    <Input id="twitter" defaultValue="@iDivasRD" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="store" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de la Tienda</CardTitle>
              <CardDescription>Personaliza la experiencia de compra de tus clientes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currency">Moneda</Label>
                <Select defaultValue="dop">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Seleccionar moneda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dop">Peso Dominicano (RD$)</SelectItem>
                    <SelectItem value="usd">Dólar Estadounidense ($)</SelectItem>
                    <SelectItem value="eur">Euro (€)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <Select defaultValue="es">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Seleccionar idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">Inglés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-stock" className="block">
                      Mostrar Disponibilidad de Stock
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Muestra la cantidad de productos disponibles en la página del producto
                    </p>
                  </div>
                  <Switch id="show-stock" defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="guest-checkout" className="block">
                      Permitir Compra como Invitado
                    </Label>
                    <p className="text-sm text-muted-foreground">Permite a los clientes comprar sin crear una cuenta</p>
                  </div>
                  <Switch id="guest-checkout" defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reviews" className="block">
                      Permitir Reseñas de Productos
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Permite a los clientes dejar reseñas en los productos
                    </p>
                  </div>
                  <Switch id="reviews" defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="products-per-page">Productos por Página</Label>
                <Select defaultValue="12">
                  <SelectTrigger id="products-per-page">
                    <SelectValue placeholder="Número de productos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8 productos</SelectItem>
                    <SelectItem value="12">12 productos</SelectItem>
                    <SelectItem value="16">16 productos</SelectItem>
                    <SelectItem value="24">24 productos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pago</CardTitle>
              <CardDescription>Configura las opciones de pago para tus clientes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">Tarjetas de Crédito/Débito</Label>
                    <p className="text-sm text-muted-foreground">Acepta pagos con Visa, Mastercard, etc.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">Transferencia Bancaria</Label>
                    <p className="text-sm text-muted-foreground">Acepta pagos por transferencia bancaria</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">Pago contra Entrega</Label>
                    <p className="text-sm text-muted-foreground">Permite a los clientes pagar al recibir el producto</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">PayPal</Label>
                    <p className="text-sm text-muted-foreground">Acepta pagos a través de PayPal</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="bank-info">Información Bancaria para Transferencias</Label>
                <Textarea
                  id="bank-info"
                  defaultValue="Banco Popular Dominicano
Cuenta: 123456789
Titular: iDivas SRL
RNC: 123456789"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Opciones de Envío</CardTitle>
              <CardDescription>Configura las opciones de envío para tus clientes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="default-shipping">Método de Envío Predeterminado</Label>
                <Select defaultValue="standard">
                  <SelectTrigger id="default-shipping">
                    <SelectValue placeholder="Seleccionar método" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Estándar (2-4 días)</SelectItem>
                    <SelectItem value="express">Express (1-2 días)</SelectItem>
                    <SelectItem value="pickup">Recogida en Tienda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">Envío Gratis en Compras Superiores a</Label>
                    <p className="text-sm text-muted-foreground">
                      Ofrece envío gratuito en pedidos que superen este monto
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>RD$</span>
                    <Input className="w-24" defaultValue="5000" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Zonas de Envío</Label>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Santo Domingo</p>
                      <p className="text-sm text-muted-foreground">RD$ 150 - Entrega en 1-2 días</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Norte (Cibao)</p>
                      <p className="text-sm text-muted-foreground">RD$ 250 - Entrega en 2-3 días</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Este</p>
                      <p className="text-sm text-muted-foreground">RD$ 200 - Entrega en 2-3 días</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Sur</p>
                      <p className="text-sm text-muted-foreground">RD$ 300 - Entrega en 3-4 días</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Configura cómo y cuándo recibir notificaciones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificaciones por Correo Electrónico</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Nuevos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones cuando se realice un nuevo pedido
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Estado de Pedidos</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones cuando cambie el estado de un pedido
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Inventario Bajo</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe alertas cuando un producto esté por agotarse
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Nuevos Registros</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones cuando un cliente se registre
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Correos a Clientes</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Confirmación de Pedido</Label>
                      <p className="text-sm text-muted-foreground">
                        Envía correos de confirmación cuando se realice un pedido
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Actualización de Envío</Label>
                      <p className="text-sm text-muted-foreground">Envía correos cuando el estado del envío cambie</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="block">Recordatorio de Carrito Abandonado</Label>
                      <p className="text-sm text-muted-foreground">Envía recordatorios para carritos abandonados</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>Configura las opciones de seguridad de tu tienda.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">Autenticación de Dos Factores</Label>
                    <p className="text-sm text-muted-foreground">Aumenta la seguridad de tu cuenta con 2FA</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Tiempo de Sesión (minutos)</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="session-timeout">
                    <SelectValue placeholder="Seleccionar tiempo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutos</SelectItem>
                    <SelectItem value="30">30 minutos</SelectItem>
                    <SelectItem value="60">60 minutos</SelectItem>
                    <SelectItem value="120">120 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Cambiar Contraseña</Label>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña Actual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nueva Contraseña</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Contraseña actualizada",
                        description: "Tu contraseña ha sido actualizada correctamente.",
                      })
                    }}
                  >
                    Cambiar Contraseña
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mi Cuenta</CardTitle>
              <CardDescription>Gestiona tu información personal y preferencias.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">Idalenny Ramos</h3>
                  <p className="text-sm text-muted-foreground">Administrador</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="account-name">Nombre Completo</Label>
                <Input id="account-name" defaultValue="Idalenny Ramos" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-email">Correo Electrónico</Label>
                <Input id="account-email" type="email" defaultValue="idalenny@idivas.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-phone">Teléfono</Label>
                <Input id="account-phone" defaultValue="+1 (809) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language-preference">Idioma de la Interfaz</Label>
                <Select defaultValue="es">
                  <SelectTrigger id="language-preference">
                    <SelectValue placeholder="Seleccionar idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">Inglés</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="block">Modo Oscuro</Label>
                    <p className="text-sm text-muted-foreground">Cambia entre tema claro y oscuro</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Button>
              <Button className="bg-pink-500 hover:bg-pink-600" onClick={handleSaveSettings}>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

