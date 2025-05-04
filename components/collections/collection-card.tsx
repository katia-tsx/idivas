import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CollectionCardProps {
  collection: {
    id: number
    name: string
    description: string
    image: string
    itemCount: number
    slug: string
    featured?: boolean
  }
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm group">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={collection.image || "/placeholder.svg"}
            alt={collection.name}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {collection.featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded">Destacada</span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{collection.name}</h3>
        <p className="text-gray-500 mt-2">{collection.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{collection.itemCount} productos</span>
          <Link href={`/collections/${collection.slug}`}>
            <Button variant="ghost" className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 p-0 h-auto">
              Ver colección <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

