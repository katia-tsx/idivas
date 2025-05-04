"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  activeFilters: {
    categories: string[]
    priceRange: [number, number]
    sizes: string[]
    colors: string[]
    sort?: string
  }
  onFilterChange: (filters: any) => void
  className?: string
}

export function ProductFilters({ activeFilters, onFilterChange, className }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(activeFilters.priceRange)

  // Update local state when activeFilters change
  useEffect(() => {
    setPriceRange(activeFilters.priceRange)
  }, [activeFilters.priceRange])

  const handleCategoryChange = (category: string) => {
    const updatedCategories = activeFilters.categories.includes(category)
      ? activeFilters.categories.filter((c) => c !== category)
      : [...activeFilters.categories, category]

    onFilterChange({ categories: updatedCategories })
  }

  const handleSizeChange = (size: string) => {
    const updatedSizes = activeFilters.sizes.includes(size)
      ? activeFilters.sizes.filter((s) => s !== size)
      : [...activeFilters.sizes, size]

    onFilterChange({ sizes: updatedSizes })
  }

  const handleColorChange = (color: string) => {
    const updatedColors = activeFilters.colors.includes(color)
      ? activeFilters.colors.filter((c) => c !== color)
      : [...activeFilters.colors, color]

    onFilterChange({ colors: updatedColors })
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
  }

  const handlePriceChangeEnd = () => {
    onFilterChange({ priceRange })
  }

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case "category":
        onFilterChange({
          categories: activeFilters.categories.filter((c) => c !== value),
        })
        break
      case "size":
        onFilterChange({
          sizes: activeFilters.sizes.filter((s) => s !== value),
        })
        break
      case "color":
        onFilterChange({
          colors: activeFilters.colors.filter((c) => c !== value),
        })
        break
    }
  }

  // Categories
  const categories = [
    { id: "dresses", label: "Vestidos" },
    { id: "tops", label: "Blusas y Tops" },
    { id: "bottoms", label: "Pantalones y Faldas" },
    { id: "outerwear", label: "Chaquetas y Abrigos" },
    { id: "accessories", label: "Accesorios" },
    { id: "shoes", label: "Zapatos" },
    { id: "activewear", label: "Ropa Deportiva" },
  ]

  // Sizes
  const sizes = [
    { id: "XS", label: "XS" },
    { id: "S", label: "S" },
    { id: "M", label: "M" },
    { id: "L", label: "L" },
    { id: "XL", label: "XL" },
  ]

  // Colors
  const colors = [
    { id: "black", label: "Negro" },
    { id: "white", label: "Blanco" },
    { id: "red", label: "Rojo" },
    { id: "blue", label: "Azul" },
    { id: "green", label: "Verde" },
    { id: "pink", label: "Rosa" },
    { id: "yellow", label: "Amarillo" },
    { id: "purple", label: "Morado" },
  ]

  return (
    <div className={cn("space-y-6", className)}>
      {/* Active Filters */}
      {(activeFilters.categories.length > 0 ||
        activeFilters.sizes.length > 0 ||
        activeFilters.colors.length > 0 ||
        activeFilters.priceRange[0] > 0 ||
        activeFilters.priceRange[1] < 5000) && (
        <div className="space-y-2">
          <h3 className="font-medium">Filtros Activos</h3>
          <div className="flex flex-wrap gap-2">
            {activeFilters.categories.map((category) => {
              const cat = categories.find((c) => c.id === category)
              return (
                <Badge key={category} variant="secondary" className="flex items-center gap-1">
                  {cat?.label}
                  <button onClick={() => removeFilter("category", category)}>
                    <X className="h-3 w-3" />
                    <span className="sr-only">Eliminar filtro</span>
                  </button>
                </Badge>
              )
            })}

            {activeFilters.sizes.map((size) => (
              <Badge key={size} variant="secondary" className="flex items-center gap-1">
                Talla: {size}
                <button onClick={() => removeFilter("size", size)}>
                  <X className="h-3 w-3" />
                  <span className="sr-only">Eliminar filtro</span>
                </button>
              </Badge>
            ))}

            {activeFilters.colors.map((color) => {
              const col = colors.find((c) => c.id === color)
              return (
                <Badge key={color} variant="secondary" className="flex items-center gap-1">
                  Color: {col?.label}
                  <button onClick={() => removeFilter("color", color)}>
                    <X className="h-3 w-3" />
                    <span className="sr-only">Eliminar filtro</span>
                  </button>
                </Badge>
              )
            })}

            {(activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 5000) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                RD$ {activeFilters.priceRange[0]} - RD$ {activeFilters.priceRange[1]}
                <button onClick={() => onFilterChange({ priceRange: [0, 5000] })}>
                  <X className="h-3 w-3" />
                  <span className="sr-only">Eliminar filtro</span>
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <Accordion type="single" collapsible defaultValue="categories">
        <AccordionItem value="categories" className="border-b">
          <AccordionTrigger className="text-base font-medium">Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={activeFilters.categories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Price Range */}
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="text-base font-medium">Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1">
              <div className="flex justify-between">
                <span className="text-sm">RD$ {priceRange[0]}</span>
                <span className="text-sm">RD$ {priceRange[1]}</span>
              </div>
              <Slider
                defaultValue={[0, 5000]}
                value={[priceRange[0], priceRange[1]]}
                min={0}
                max={5000}
                step={100}
                onValueChange={handlePriceChange}
                onValueCommit={handlePriceChangeEnd}
                className="py-2"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Sizes */}
      <Accordion type="single" collapsible defaultValue="sizes">
        <AccordionItem value="sizes" className="border-b">
          <AccordionTrigger className="text-base font-medium">Tallas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size.id}`}
                    checked={activeFilters.sizes.includes(size.id)}
                    onCheckedChange={() => handleSizeChange(size.id)}
                  />
                  <Label htmlFor={`size-${size.id}`} className="text-sm cursor-pointer">
                    {size.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Colors */}
      <Accordion type="single" collapsible defaultValue="colors">
        <AccordionItem value="colors" className="border-b">
          <AccordionTrigger className="text-base font-medium">Colores</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {colors.map((color) => (
                <div key={color.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color.id}`}
                    checked={activeFilters.colors.includes(color.id)}
                    onCheckedChange={() => handleColorChange(color.id)}
                  />
                  <Label htmlFor={`color-${color.id}`} className="text-sm cursor-pointer">
                    {color.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

