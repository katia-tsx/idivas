import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />}

            {item.active ? (
              <span className="text-gray-500 text-sm" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-sm text-gray-600 hover:text-pink-500 transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

