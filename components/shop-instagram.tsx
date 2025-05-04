"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShopInstagram() {
  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=300",
      likes: 245,
      comments: 18,
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=300",
      likes: 189,
      comments: 24,
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      likes: 321,
      comments: 32,
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=300",
      likes: 178,
      comments: 14,
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=300",
      likes: 267,
      comments: 29,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Instagram className="h-5 w-5 text-pink-500" />
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">@idivas_rd</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Síguenos en Instagram y etiquétanos con #iDivasStyle
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="relative group overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                width={300}
                height={300}
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-sm flex gap-4">
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

