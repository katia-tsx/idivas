"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, DollarSign, Percent, Save, History, Settings, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function CalculadoraPage() {
  const [costoShein, setCostoShein] = useState("")
  const [impuestos, setImpuestos] = useState("10")
  const [envio, setEnvio] = useState("500")
  const [margen, setMargen] = useState("30")
  const [nombreProducto, setNombreProducto] = useState("")
  const [resultado, setResultado] = useState<{
    costoTotal: number
    precioVenta: number
    ganancia: number
    margenPorcentaje: number
  } | null>(null)

  const [historial, setHistorial] = useState<
    Array<{
      id: number
      fecha: string
      nombre: string
      costoShein: number
      precioVenta: number
      ganancia: number
    }>
  >([
    {
      id: 1,
      fecha: "2025-03-25",
      nombre: "Vestido Floral",
      costoShein: 1200,
      precioVenta: 1850,
      ganancia: 650,
    },
    {
      id: 2,
      fecha: "2025-03-24",
      nombre: "Blusa Elegante",
      costoShein: 650,
      precioVenta: 950,
      ganancia: 300,
    },
    {
      id: 3,
      fecha: "2025-03-22",
      nombre: "Jeans Premium",
      costoShein: 1100,
      precioVenta: 1650,
      ganancia: 550,
    },
  ])

  const calcularPrecio = () => {
    const costo = Number.parseFloat(costoShein) || 0
    const impuestosVal = (Number.parseFloat(impuestos) || 0) / 100
    const envioVal = Number.parseFloat(envio) || 0
    const margenVal = (Number.parseFloat(margen) || 0) / 100

    const costoConImpuestos = costo * (1 + impuestosVal)
    const costoTotal = costoConImpuestos + envioVal
    const precioVenta = costoTotal / (1 - margenVal)
    const ganancia = precioVenta - costoTotal
    const margenPorcentaje = (ganancia / precioVenta) * 100

    setResultado({
      costoTotal: Math.round(costoTotal * 100) / 100,
      precioVenta: Math.round(precioVenta * 100) / 100,
      ganancia: Math.round(ganancia * 100) / 100,
      margenPorcentaje: Math.round(margenPorcentaje * 100) / 100,
    })
  }

  const guardarCalculo = () => {
    if (!resultado || !nombreProducto) {
      toast({
        title: "Error",
        description: "Por favor ingresa un nombre para el producto y calcula el precio.",
        variant: "destructive",
      })
      return
    }

    const nuevoCalculo = {
      id: Date.now(),
      fecha: new Date().toISOString().split("T")[0],
      nombre: nombreProducto,
      costoShein: Number.parseFloat(costoShein),
      precioVenta: resultado.precioVenta,
      ganancia: resultado.ganancia,
    }

    setHistorial([nuevoCalculo, ...historial])

    toast({
      title: "Cálculo guardado",
      description: "El cálculo ha sido guardado en el historial.",
    })

    // Reset form
    setNombreProducto("")
    setCostoShein("")
    setResultado(null)
  }

  const eliminarDelHistorial = (id: number) => {
    setHistorial(historial.filter((item) => item.id !== id))

    toast({
      title: "Eliminado",
      description: "El cálculo ha sido eliminado del historial.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Calculadora de Precios</h2>
        <p className="text-muted-foreground">Calcula el precio de venta óptimo para tus productos de Shein</p>
      </div>

      <Tabs defaultValue="calculadora" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calculadora" className="flex items-center gap-1">
            <Calculator className="h-4 w-4" />
            <span>Calculadora</span>
          </TabsTrigger>
          <TabsTrigger value="historial" className="flex items-center gap-1">
            <History className="h-4 w-4" />
            <span>Historial</span>
          </TabsTrigger>
          <TabsTrigger value="configuracion" className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span>Configuración</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculadora" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-pink-500" />
                  Datos del Producto
                </CardTitle>
                <CardDescription>Ingresa los datos del producto para calcular su precio de venta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre del Producto</Label>
                  <Input
                    id="nombre"
                    placeholder="Ej: Vestido Floral"
                    value={nombreProducto}
                    onChange={(e) => setNombreProducto(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="costo">Costo en Shein (RD$)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="costo"
                      type="number"
                      placeholder="0.00"
                      className="pl-8"
                      value={costoShein}
                      onChange={(e) => setCostoShein(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="impuestos">Impuestos (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="impuestos"
                      type="number"
                      placeholder="10"
                      className="pl-8"
                      value={impuestos}
                      onChange={(e) => setImpuestos(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="envio">Costo de Envío (RD$)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="envio"
                      type="number"
                      placeholder="500"
                      className="pl-8"
                      value={envio}
                      onChange={(e) => setEnvio(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="margen">Margen de Ganancia (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="margen"
                      type="number"
                      placeholder="30"
                      className="pl-8"
                      value={margen}
                      onChange={(e) => setMargen(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button onClick={calcularPrecio} className="w-full bg-pink-500 hover:bg-pink-600">
                  Calcular Precio
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-pink-500" />
                  Resultado
                </CardTitle>
                <CardDescription>Detalles del cálculo y precio de venta recomendado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {resultado ? (
                  <>
                    <div className="rounded-lg bg-pink-50 p-4">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-pink-500">Precio de Venta Recomendado</h3>
                        <p className="text-3xl font-bold">RD$ {resultado.precioVenta.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Costo Total:</span>
                        <span className="font-medium">RD$ {resultado.costoTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ganancia:</span>
                        <span className="font-medium text-green-600">RD$ {resultado.ganancia.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Margen Real:</span>
                        <span className="font-medium">{resultado.margenPorcentaje}%</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex h-[200px] items-center justify-center text-center">
                    <p className="text-muted-foreground">
                      Ingresa los datos del producto y haz clic en "Calcular Precio" para ver el resultado
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={guardarCalculo}
                  className="w-full"
                  variant="outline"
                  disabled={!resultado || !nombreProducto}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Cálculo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="historial">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Cálculos</CardTitle>
              <CardDescription>Registro de todos los cálculos de precios realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Producto</TableHead>
                    <TableHead className="text-right">Costo</TableHead>
                    <TableHead className="text-right">Precio Venta</TableHead>
                    <TableHead className="text-right">Ganancia</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {historial.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>{item.nombre}</TableCell>
                      <TableCell className="text-right">RD$ {item.costoShein.toLocaleString()}</TableCell>
                      <TableCell className="text-right">RD$ {item.precioVenta.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-green-600">RD$ {item.ganancia.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => eliminarDelHistorial(item.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {historial.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                        No hay cálculos guardados en el historial
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuracion">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de la Calculadora</CardTitle>
              <CardDescription>Personaliza los valores predeterminados para tus cálculos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-impuestos">Impuestos Predeterminados (%)</Label>
                <div className="relative">
                  <Percent className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="default-impuestos" type="number" placeholder="10" className="pl-8" defaultValue="10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-envio">Costo de Envío Predeterminado (RD$)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="default-envio" type="number" placeholder="500" className="pl-8" defaultValue="500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-margen">Margen de Ganancia Predeterminado (%)</Label>
                <div className="relative">
                  <Percent className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="default-margen" type="number" placeholder="30" className="pl-8" defaultValue="30" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-pink-500 hover:bg-pink-600"
                onClick={() => {
                  toast({
                    title: "Configuración guardada",
                    description: "Los valores predeterminados han sido actualizados.",
                  })
                }}
              >
                Guardar Configuración
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

