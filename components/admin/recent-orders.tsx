import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentOrders() {
  const orders = [
    {
      id: "ORD-001",
      customer: "María Pérez",
      initials: "MP",
      status: "Completado",
      statusColor: "bg-green-500",
      products: 3,
      total: "RD$ 4,500",
    },
    {
      id: "ORD-002",
      customer: "Laura Gómez",
      initials: "LG",
      status: "Procesando",
      statusColor: "bg-blue-500",
      products: 2,
      total: "RD$ 2,850",
    },
    {
      id: "ORD-003",
      customer: "Carolina Díaz",
      initials: "CD",
      status: "Pendiente",
      statusColor: "bg-yellow-500",
      products: 5,
      total: "RD$ 7,200",
    },
    {
      id: "ORD-004",
      customer: "Ana Martínez",
      initials: "AM",
      status: "Enviado",
      statusColor: "bg-purple-500",
      products: 1,
      total: "RD$ 1,350",
    },
    {
      id: "ORD-005",
      customer: "Sofía Rodríguez",
      initials: "SR",
      status: "Completado",
      statusColor: "bg-green-500",
      products: 4,
      total: "RD$ 5,980",
    },
  ]

  return (
    <div className="space-y-8">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-pink-100 text-pink-500">{order.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{order.customer}</p>
            <p className="text-sm text-muted-foreground">{order.id}</p>
          </div>
          <div className="ml-auto font-medium">{order.total}</div>
          <div className="ml-2">
            <Badge className={`${order.statusColor} text-white`}>{order.status}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

