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
import { Plus, Search, Edit, Trash2, Upload, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Vestido Floral Verano",
      sku: "VF-001",
      price: 1850,
      cost: 1200,
      stock: 15,
      category: "Vestidos",
      image: "/placeholder.svg?height=80&width=60",
      status: "Activo",
    },
    {
      id: 2,
      name: "Blusa Asimétrica",
      sku: "BA-002",
      price: 950,
      cost: 650,
      stock: 8,
      category: "Blusas",
      image: "/placeholder.svg?height=80&width=60",
      status: "Activo",
    },
    {
      id: 3,
      name: "Jeans Premium Stretch",
      sku: "JP-003",
      price: 1650,
      cost: 1100,
      stock: 12,
      category: "Pantalones",
      image: "/placeholder.svg?height=80&width=60",
      status: "Activo",
    },
    {
      id: 4,
      name: "Conjunto Deportivo",
      sku: "CD-004",
      price: 2250,
      cost: 1500,
      stock: 0,
      category: "Deportiva",
      image: "/placeholder.svg?height=80&width=60",
      status: "Agotado",
    },
    {
      id: 5,
      name: "Collar Minimalista",
      sku: "CM-005",
      price: 850,
      cost: 450,
      stock: 20,
      category: "Accesorios",
      image: "/placeholder.svg?height=80&width=60",
      status: "Activo",
    },
  ]

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Productos</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-pink-500 hover:bg-pink-600">
              <Plus className="mr-2 h-4 w-4" />
              Añadir Producto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Producto</DialogTitle>
              <DialogDescription>Completa los detalles del producto para añadirlo al catálogo</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Producto</Label>
                  <Input id="name" placeholder="Ej: Vestido Floral" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input id="sku" placeholder="Ej: VF-001" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (RD$)</Label>
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cost">Costo (RD$)</Label>
                  <Input id="cost" type="number" placeholder="0.00" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input id="stock" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vestidos">Vestidos</SelectItem>
                      <SelectItem value="blusas">Blusas</SelectItem>
                      <SelectItem value="pantalones">Pantalones</SelectItem>
                      <SelectItem value="accesorios">Accesorios</SelectItem>
                      <SelectItem value="deportiva">Deportiva</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Descripción del producto..." />
              </div>
              <div className="space-y-2">
                <Label>Imagen del Producto</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Arrastra una imagen o haz clic para seleccionar</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Seleccionar Archivo
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-pink-500 hover:bg-pink-600">Guardar Producto</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="todos" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="activos">Activos</TabsTrigger>
            <TabsTrigger value="agotados">Agotados</TabsTrigger>
          </TabsList>
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

        <TabsContent value="todos" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-right">Precio</TableHead>
                    <TableHead className="text-right">Costo</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                    <TableHead>Estado</TableHead>
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
                        <TableCell className="text-right">RD$ {product.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">RD$ {product.cost.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{product.stock}</TableCell>
                        <TableCell>
                          <Badge className={product.status === "Activo" ? "bg-green-500" : "bg-red-500"}>
                            {product.status}
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

        <TabsContent value="activos" className="space-y-4">
          {/* Contenido similar para productos activos */}
        </TabsContent>

        <TabsContent value="agotados" className="space-y-4">
          {/* Contenido similar para productos agotados */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

