"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { DollarSign, ArrowUpRight, ArrowDownRight, Users, ShoppingBag, LineChart } from "lucide-react"
import {
  Bar,
  BarChart as ReBarChart,
  Line,
  LineChart as ReLineChart,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Legend,
} from "recharts"

export default function AnaliticasPage() {
  const [period, setPeriod] = useState("month")

  // Summary data
  const summaryData = {
    day: {
      revenue: 5250,
      change: 8.2,
      orders: 18,
      orderChange: 12.5,
      customers: 15,
      customerChange: 5.3,
      avgOrder: 292,
      avgOrderChange: -4.3,
    },
    week: {
      revenue: 32500,
      change: 15.3,
      orders: 112,
      orderChange: 8.7,
      customers: 95,
      customerChange: 12.8,
      avgOrder: 290,
      avgOrderChange: 6.6,
    },
    month: {
      revenue: 145200,
      change: 22.5,
      orders: 487,
      orderChange: 18.2,
      customers: 350,
      customerChange: 20.4,
      avgOrder: 298,
      avgOrderChange: 4.3,
    },
    year: {
      revenue: 1250000,
      change: 35.8,
      orders: 4150,
      orderChange: 30.5,
      customers: 2250,
      customerChange: 45.2,
      avgOrder: 301,
      avgOrderChange: 5.3,
    },
  }

  // Sales data
  const salesData = {
    day: [
      { name: "12am", value: 150 },
      { name: "4am", value: 50 },
      { name: "8am", value: 450 },
      { name: "12pm", value: 950 },
      { name: "4pm", value: 1850 },
      { name: "8pm", value: 1800 },
    ],
    week: [
      { name: "Lun", value: 4500 },
      { name: "Mar", value: 3800 },
      { name: "Mié", value: 5200 },
      { name: "Jue", value: 4300 },
      { name: "Vie", value: 5900 },
      { name: "Sáb", value: 6800 },
      { name: "Dom", value: 4800 },
    ],
    month: [
      { name: "Sem 1", value: 25200 },
      { name: "Sem 2", value: 32500 },
      { name: "Sem 3", value: 38700 },
      { name: "Sem 4", value: 48800 },
    ],
    year: [
      { name: "Ene", value: 75000 },
      { name: "Feb", value: 82000 },
      { name: "Mar", value: 145200 },
      { name: "Abr", value: 78000 },
      { name: "May", value: 95000 },
      { name: "Jun", value: 110000 },
      { name: "Jul", value: 120000 },
      { name: "Ago", value: 105000 },
      { name: "Sep", value: 95000 },
      { name: "Oct", value: 90000 },
      { name: "Nov", value: 120000 },
      { name: "Dic", value: 150000 },
    ],
  }

  // Category data
  const categoryData = [
    { name: "Vestidos", value: 35 },
    { name: "Blusas", value: 25 },
    { name: "Pantalones", value: 20 },
    { name: "Accesorios", value: 15 },
    { name: "Otros", value: 5 },
  ]

  // Traffic sources data
  const trafficData = [
    { name: "Directo", value: 30 },
    { name: "Instagram", value: 40 },
    { name: "Facebook", value: 15 },
    { name: "Google", value: 10 },
    { name: "Otros", value: 5 },
  ]

  // Customers data
  const customersData = {
    day: [
      { name: "12am", new: 1, returning: 1 },
      { name: "4am", new: 0, returning: 0 },
      { name: "8am", new: 2, returning: 1 },
      { name: "12pm", new: 4, returning: 2 },
      { name: "4pm", new: 3, returning: 5 },
      { name: "8pm", new: 2, returning: 3 },
    ],
    week: [
      { name: "Lun", new: 5, returning: 10 },
      { name: "Mar", new: 8, returning: 12 },
      { name: "Mié", new: 6, returning: 8 },
      { name: "Jue", new: 10, returning: 15 },
      { name: "Vie", new: 12, returning: 18 },
      { name: "Sáb", new: 8, returning: 12 },
      { name: "Dom", new: 4, returning: 8 },
    ],
    month: [
      { name: "Sem 1", new: 35, returning: 50 },
      { name: "Sem 2", new: 42, returning: 65 },
      { name: "Sem 3", new: 38, returning: 55 },
      { name: "Sem 4", new: 45, returning: 70 },
    ],
    year: [
      { name: "Ene", new: 120, returning: 180 },
      { name: "Feb", new: 150, returning: 200 },
      { name: "Mar", new: 180, returning: 220 },
      { name: "Abr", new: 170, returning: 210 },
      { name: "May", new: 190, returning: 230 },
      { name: "Jun", new: 210, returning: 250 },
      { name: "Jul", new: 220, returning: 270 },
      { name: "Ago", new: 200, returning: 240 },
      { name: "Sep", new: 180, returning: 220 },
      { name: "Oct", new: 190, returning: 230 },
      { name: "Nov", new: 210, returning: 250 },
      { name: "Dic", new: 230, returning: 280 },
    ],
  }

  // Colors for charts
  const COLORS = ["#ec4899", "#8b5cf6", "#06b6d4", "#84cc16", "#f97316"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analíticas</h2>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Último día</SelectItem>
            <SelectItem value="week">Última semana</SelectItem>
            <SelectItem value="month">Último mes</SelectItem>
            <SelectItem value="year">Último año</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RD$ {summaryData[period].revenue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {summaryData[period].change > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{summaryData[period].change}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{summaryData[period].change}%</span>
                </>
              )}
              <span className="ml-1">respecto al periodo anterior</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData[period].orders}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {summaryData[period].orderChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{summaryData[period].orderChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{summaryData[period].orderChange}%</span>
                </>
              )}
              <span className="ml-1">respecto al periodo anterior</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaryData[period].customers}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {summaryData[period].customerChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{summaryData[period].customerChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{summaryData[period].customerChange}%</span>
                </>
              )}
              <span className="ml-1">respecto al periodo anterior</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedido Promedio</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RD$ {summaryData[period].avgOrder}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {summaryData[period].avgOrderChange > 0 ? (
                <>
                  <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">+{summaryData[period].avgOrderChange}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{summaryData[period].avgOrderChange}%</span>
                </>
              )}
              <span className="ml-1">respecto al periodo anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ventas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ventas">Ventas</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="productos">Productos</TabsTrigger>
        </TabsList>

        <TabsContent value="ventas" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Tendencia de Ventas</CardTitle>
                <CardDescription>
                  Análisis de ventas para el{" "}
                  {period === "day"
                    ? "último día"
                    : period === "week"
                      ? "la última semana"
                      : period === "month"
                        ? "el último mes"
                        : "el último año"}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart
                    data={salesData[period]}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `RD$${value.toLocaleString()}`} />
                    <Tooltip formatter={(value) => [`RD$${value.toLocaleString()}`, "Ventas"]} />
                    <Line type="monotone" dataKey="value" stroke="#ec4899" strokeWidth={2} activeDot={{ r: 8 }} />
                  </ReLineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ventas por Categoría</CardTitle>
                <CardDescription>Distribución de ventas por categoría de productos</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip formatter={(value) => [`${value}%`, "Porcentaje"]} />
                  </RePieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuentes de Tráfico</CardTitle>
                <CardDescription>De dónde vienen tus clientes</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ReBarChart
                    data={trafficData}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip formatter={(value) => [`${value}%`, "Porcentaje"]} />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]}>
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </ReBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clientes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Nuevos vs. Recurrentes</CardTitle>
              <CardDescription>Comparación entre clientes nuevos y recurrentes</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart
                  data={customersData[period]}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="new" name="Nuevos" fill="#ec4899" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="returning" name="Recurrentes" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="productos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Productos Más Vendidos</CardTitle>
                <CardDescription>Top productos por unidades vendidas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Vestido Floral</div>
                      <div>87 unidades</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[87%] rounded-full bg-pink-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Blusa Asimétrica</div>
                      <div>75 unidades</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[75%] rounded-full bg-pink-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Jeans Premium</div>
                      <div>65 unidades</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[65%] rounded-full bg-pink-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Collar Minimalista</div>
                      <div>52 unidades</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[52%] rounded-full bg-pink-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Conjunto Deportivo</div>
                      <div>45 unidades</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[45%] rounded-full bg-pink-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Productos por Ingresos</CardTitle>
                <CardDescription>Top productos por ingresos generados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Vestido Floral</div>
                      <div>RD$ 160,950</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[92%] rounded-full bg-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Conjunto Deportivo</div>
                      <div>RD$ 101,250</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[78%] rounded-full bg-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Jeans Premium</div>
                      <div>RD$ 95,200</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[75%] rounded-full bg-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Blusa Asimétrica</div>
                      <div>RD$ 71,250</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[65%] rounded-full bg-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Collar Minimalista</div>
                      <div>RD$ 44,200</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-full w-[45%] rounded-full bg-purple-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

