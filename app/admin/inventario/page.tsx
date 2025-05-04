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
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Box,
  AlertOctagon,
  AlertTriangle,
  ArrowDownUp,
  FileDown,
  RefreshCw,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function InventarioPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock products for inventory
  const products = [
    {
      id: 1,
      name: "Vestido Floral Verano",
      sku: "VF-001",
      image: "/placeholder.svg?height=80&width=60",
      category: "Vestidos",
      stock: 15,
      stockStatus: "En Stock",
      stockStatusColor: "bg-green-500",
      reserved: 2,
      minStock: 5,
      restockStatus: "Óptimo",
      restockStatusColor: "bg-green-500",
      variants: [
        { size: "S", stock: 5 },
        { size: "M", stock: 7 },
        { size: "L", stock: 3 },
      ],
    },
    {
      id: 2,
      name: "Blusa Asimétrica",
      sku: "BA-002",
      image: "/placeholder.svg?height=80&width=60",
      category: "Blusas",
      stock: 8,
      stockStatus: "En Stock",
      stockStatusColor: "bg-green-500",
      reserved: 1,
      minStock: 5,
      restockStatus: "Óptimo",
      restockStatusColor: "bg-green-500",
      variants: [
        { size: "S", stock: 3 },
        { size: "M", stock: 3 },
        { size: "L", stock: 2 },
      ],
    },
    {
      id: 3,
      name: "Jeans Premium Stretch",
      sku: "JP-003",
      image: "/placeholder.svg?height=80&width=60",
      category: "Pantalones",
      stock: 4,
      stockStatus: "Stock Bajo",
      stockStatusColor: "bg-yellow-500",
      reserved: 2,
      minStock: 5,
      restockStatus: "Reordenar",
      restockStatusColor: "bg-yellow-500",
      variants: [
        { size: "S", stock: 1 },
        { size: "M", stock: 2 },
        { size: "L", stock: 1 },
      ],
    },
    {
      id: 4,
      name: "Conjunto Deportivo",
      sku: "CD-004",
      image: "/placeholder.svg?height=80&width=60",
      category: "Deportiva",
      stock: 0,
      stockStatus: "Agotado",
      stockStatusColor: "bg-red-500",
      reserved: 0,
      minStock: 3,
      restockStatus: "Urgente",
      restockStatusColor: "bg-red-500",
      variants: [
        { size: "S", stock: 0 },
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
      ],
    },
    {
      id: 5,
      name: "Collar Minimalista",
      sku: "CM-005",
      image: "/placeholder.svg?height=80&width=60",
      category: "Accesorios",
      stock: 20,
      stockStatus: "En Stock",
      stockStatusColor: "bg-green-500",
      reserved: 0,
      minStock: 5,
      restockStatus: "Óptimo",
      restockStatusColor: "bg-green-500",
      variants: [{ size: "Único", stock: 20 }],
    },
  ]

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.stockStatus.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Stock adjustment
  const adjustStock = (productId: number, adjustment: "add" | "remove", quantity: number) => {
    toast({
      title: "Stock actualizado",
      description: `Se han ${adjustment === "add" ? "añadido" : "eliminado"} ${quantity} unidades del producto #${productId}`,
    })
  }

  // Recent stock movements
  const stockMovements = [
    {
      id: 1,
      date: "19 Mar, 2025",
      productSku: "VF-001",
      productName: "Vestido Floral Verano",
      type: "Entrada",
      quantity: 10,
      reason: "Reposición",
      operator: "Admin",
    },
    {
      id: 2,
      date: "18 Mar, 2025",
      productSku: "BA-002",
      productName: "Blusa Asimétrica",
      type: "Salida",
      quantity: 1,
      reason: "Venta",
      operator: "Sistema",
    },
    {
      id: 3,
      date: "17 Mar, 2025",
      productSku: "JP-003",
      productName: "Jeans Premium Stretch",
      type: "Salida",
      quantity: 2,
      reason: "Venta",
      operator: "Sistema",
    },
    {
      id: 4,
      date: "15 Mar, 2025",
      productSku: "CD-004",
      productName: "Conjunto Deportivo",
      type: "Ajuste",
      quantity: -1,
      reason: "Defectuoso",
      operator: "Admin",
    },
    {
      id: 5,
      date: "14 Mar, 2025",
      productSku: "CM-005",
      productName: "Collar Minimalista",
      type: "Entrada",
      quantity: 15,
      reason: "Reposición",
      operator: "Admin",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inventario</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Exportación iniciada",
                description: "El informe de inventario será enviado a tu correo electrónico.",
              })
            }}
          >
            <FileDown className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Inventario sincronizado",
                description: "El inventario ha sido actualizado con los datos más recientes.",
              })
            }}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Sincronizar
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-pink-500 hover:bg-pink-600">
                <Plus className="mr-2 h-4 w-4" />
                Ajustar Stock
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Ajustar Stock</DialogTitle>
                <DialogDescription>Aumenta o disminuye el stock de un producto</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="product">Producto</Label>
                  <Select>
                    <SelectTrigger id="product">
                      <SelectValue placeholder="Seleccionar producto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id.toString()}>
                          {product.name} ({product.sku})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="variant">Variante</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="variant">
                      <SelectValue placeholder="Todas las variantes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las variantes</SelectItem>
                      <SelectItem value="S">Talla S</SelectItem>
                      <SelectItem value="M">Talla M</SelectItem>
                      <SelectItem value="L">Talla L</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="adjustment">Tipo de Ajuste</Label>
                    <Select defaultValue="add">
                      <SelectTrigger id="adjustment">
                        <SelectValue placeholder="Seleccionar ajuste" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="add">Añadir Stock</SelectItem>
                        <SelectItem value="remove">Quitar Stock</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Cantidad</Label>
                    <Input id="quantity" type="number" min="1" defaultValue="1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Razón</Label>
                  <Select>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Seleccionar razón" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restock">Reposición</SelectItem>
                      <SelectItem value="return">Devolución</SelectItem>
                      <SelectItem value="damaged">Producto Dañado</SelectItem>
                      <SelectItem value="error">Error de Conteo</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notas</Label>
                  <Textarea id="notes" placeholder="Detalles adicionales sobre este ajuste..." />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600"
                  onClick={() => {
                    toast({
                      title: "Stock ajustado",
                      description: "El ajuste de stock ha sido registrado correctamente.",
                    })
                  }}
                >
                  Guardar Ajuste
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Productos en Stock</h3>
                <p className="text-3xl font-bold mt-2">42</p>
              </div>
              <Box className="h-8 w-8 text-blue-500" />
            </div>
            <Progress value={75} className="h-2 mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Stock Bajo</h3>
                <p className="text-3xl font-bold mt-2">8</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
            <Progress value={25} className="h-2 mt-4 bg-yellow-100">
              <div className="bg-yellow-500 h-full w-[25%]" />
            </Progress>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Productos Agotados</h3>
                <p className="text-3xl font-bold mt-2">4</p>
              </div>
              <AlertOctagon className="h-8 w-8 text-red-500" />
            </div>
            <Progress value={12} className="h-2 mt-4 bg-red-100">
              <div className="bg-red-500 h-full w-[12%]" />
            </Progress>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="productos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="productos">Productos</TabsTrigger>
          <TabsTrigger value="movimientos">Movimientos</TabsTrigger>
          <TabsTrigger value="alertas">Alertas</TabsTrigger>
        </TabsList>
        <div className="flex justify-end">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar productos..."
              className="pl-8 w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TabsContent value="productos" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                    <TableHead className="text-right">Reservados</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Nivel</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No se encontraron productos
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-md overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{product.sku}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell className="text-right">{product.stock}</TableCell>
                        <TableCell className="text-right">{product.reserved}</TableCell>
                        <TableCell>
                          <Badge className={`${product.stockStatusColor} text-white`}>{product.stockStatus}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              product.restockStatus === "Óptimo"
                                ? "border-green-500 text-green-500"
                                : product.restockStatus === "Reordenar"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-red-500 text-red-500"
                            }
                          >
                            {product.restockStatus}
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
                              <DropdownMenuItem onClick={() => adjustStock(product.id, "add", 5)}>
                                <ArrowDownUp className="mr-2 h-4 w-4" />
                                Ajustar Stock
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Editar Producto
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500">
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

        <TabsContent value="movimientos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Movimientos Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Producto</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Cantidad</TableHead>
                    <TableHead>Razón</TableHead>
                    <TableHead>Usuario</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockMovements.map((movement) => (
                    <TableRow key={movement.id}>
                      <TableCell>{movement.date}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{movement.productName}</div>
                          <div className="text-sm text-muted-foreground">{movement.productSku}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={
                            movement.type === "Entrada"
                              ? "bg-green-500"
                              : movement.type === "Salida"
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                          }
                        >
                          {movement.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={movement.quantity < 0 ? "text-red-500" : ""}>
                          {movement.quantity > 0 ? `+${movement.quantity}` : movement.quantity}
                        </span>
                      </TableCell>
                      <TableCell>{movement.reason}</TableCell>
                      <TableCell>{movement.operator}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alertas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alertas de Inventario</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products
                  .filter((product) => product.stockStatus !== "En Stock")
                  .map((product) => (
                    <Card key={product.id} className="border-l-4 border-l-yellow-500">
                      <CardContent className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div>
                            {product.stockStatus === "Agotado" ? (
                              <AlertOctagon className="h-8 w-8 text-red-500" />
                            ) : (
                              <AlertTriangle className="h-8 w-8 text-yellow-500" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {product.stockStatus === "Agotado"
                                ? "Producto agotado. Reordenar inmediatamente."
                                : "Stock bajo. Considerar reordenar pronto."}
                            </p>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" size="sm" className="bg-white">
                            Reordenar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                {products.filter((product) => product.stockStatus !== "En Stock").length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">No hay alertas de inventario actualmente</div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster />
    </div>
  )
}

