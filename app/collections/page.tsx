"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { CollectionCard } from "@/components/collections/collection-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState("all")

 const collections = [
  {
    id: 1,
    name: "Primavera 2025",
    description: "Descubre las tendencias más frescas para esta temporada",
    image: "https://source.unsplash.com/800x600/?spring,fashion",  // Imagen primavera 2025
    itemCount: 24,
    slug: "primavera-2025",
    featured: true,
  },
  {
    id: 2,
    name: "Básicos Esenciales",
    description: "Piezas atemporales que no pueden faltar en tu armario",
    image: "https://source.unsplash.com/800x600/?basic,clothing",  // Imagen básicos esenciales
    itemCount: 18,
    slug: "basicos-esenciales",
    featured: false,
  },
  {
    id: 3,
    name: "Fiesta & Noche",
    description: "Looks deslumbrantes para tus eventos especiales",
    image: "https://source.unsplash.com/800x600/?party,night",  // Imagen fiesta & noche
    itemCount: 15,
    slug: "fiesta-noche",
    featured: true,
  },
  {
    id: 4,
    name: "Oficina Chic",
    description: "Eleva tu estilo profesional con estas piezas elegantes",
    image: "https://source.unsplash.com/800x600/?office,style",  // Imagen oficina chic
    itemCount: 12,
    slug: "oficina-chic",
    featured: false,
  },
  {
    id: 5,
    name: "Accesorios Trendy",
    description: "Complementos que transformarán tus outfits",
    image: "https://source.unsplash.com/800x600/?accessories,fashion",  // Imagen accesorios trendy
    itemCount: 20,
    slug: "accesorios-trendy",
    featured: true,
  },
  {
    id: 6,
    name: "Deportiva",
    description: "Estilo y comodidad para tu rutina fitness",
    image: "https://source.unsplash.com/800x600/?sportswear,fitness",  // Imagen deportiva
    itemCount: 16,
    slug: "deportiva",
    featured: false,
  },
]


  const filteredCollections =
    activeTab === "all"
      ? collections
      : collections.filter((collection) => (activeTab === "featured" ? collection.featured : !collection.featured))

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Colecciones", href: "/collections", active: true },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold">Nuestras Colecciones</h1>
          <p className="text-gray-500 mt-2">Explora nuestras colecciones cuidadosamente seleccionadas</p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="all" className="flex-1">
                Todas
              </TabsTrigger>
              <TabsTrigger value="featured" className="flex-1">
                Destacadas
              </TabsTrigger>
              <TabsTrigger value="regular" className="flex-1">
                Regulares
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collections.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCollections.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="regular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCollections.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

