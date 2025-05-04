"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { ProductFilters } from "@/components/shop/product-filters"
import { ProductGrid } from "@/components/shop/product-grid"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[]
    priceRange: [number, number]
    sizes: string[]
    colors: string[]
    sort: string
  }>({
    categories: [],
    priceRange: [0, 5000],
    sizes: [],
    colors: [],
    sort: "featured",
  })

  const handleFilterChange = (newFilters: any) => {
    setActiveFilters({
      ...activeFilters,
      ...newFilters,
    })
  }

  const clearAllFilters = () => {
    setActiveFilters({
      categories: [],
      priceRange: [0, 5000],
      sizes: [],
      colors: [],
      sort: "featured",
    })
  }

  const hasActiveFilters = () => {
    return (
      activeFilters.categories.length > 0 ||
      activeFilters.sizes.length > 0 ||
      activeFilters.colors.length > 0 ||
      activeFilters.priceRange[0] > 0 ||
      activeFilters.priceRange[1] < 5000
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Tienda", href: "/shop", active: true },
          ]}
        />

        <div className="flex items-center justify-between mt-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Tienda</h1>

          <div className="flex items-center gap-2">
            {hasActiveFilters() && (
              <Button variant="outline" size="sm" onClick={clearAllFilters} className="hidden md:flex">
                Limpiar filtros
                <X className="ml-1 h-4 w-4" />
              </Button>
            )}

            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
                <div className="p-6 h-full overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-lg">Filtros</h3>
                    {hasActiveFilters() && (
                      <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                        Limpiar
                        <X className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <ProductFilters
                    activeFilters={activeFilters}
                    onFilterChange={handleFilterChange}
                    className="md:hidden"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0 hidden md:block">
            <ProductFilters activeFilters={activeFilters} onFilterChange={handleFilterChange} />
          </aside>

          <div className="flex-1">
            <ProductGrid activeFilters={activeFilters} onSortChange={(sort) => handleFilterChange({ sort })} />
          </div>
        </div>
      </main>
    </div>
  )
}

