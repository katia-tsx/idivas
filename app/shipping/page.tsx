import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Truck, Clock, Package, MapPin } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Envíos", href: "/shipping", active: true },
          ]}
        />

        <div className="mt-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Información de Envíos</h1>
          <p className="text-gray-500 mt-2 mb-8">
            Conoce todo sobre nuestros métodos de envío, tiempos de entrega y políticas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Truck className="h-8 w-8 text-pink-500" />
                <CardTitle>Métodos de Envío</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ofrecemos diferentes opciones de envío para que elijas la que mejor se adapte a tus necesidades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Clock className="h-8 w-8 text-pink-500" />
                <CardTitle>Tiempos de Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Los tiempos de entrega varían según tu ubicación y el método de envío seleccionado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Package className="h-8 w-8 text-pink-500" />
                <CardTitle>Seguimiento de Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Podrás hacer seguimiento de tu pedido en todo momento a través de tu cuenta.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <MapPin className="h-8 w-8 text-pink-500" />
                <CardTitle>Zonas de Cobertura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Realizamos envíos a todo República Dominicana, con tarifas especiales según la zona.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Métodos de Envío y Tarifas</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Zona</th>
                      <th className="border p-3 text-left">Estándar (2-4 días)</th>
                      <th className="border p-3 text-left">Express (1-2 días)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Santo Domingo</td>
                      <td className="border p-3">RD$ 150</td>
                      <td className="border p-3">RD$ 250</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Norte (Cibao)</td>
                      <td className="border p-3">RD$ 250</td>
                      <td className="border p-3">RD$ 350</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Este</td>
                      <td className="border p-3">RD$ 200</td>
                      <td className="border p-3">RD$ 300</td>
                    </tr>
                    <tr>
                      <td className="border p-3">Sur</td>
                      <td className="border p-3">RD$ 300</td>
                      <td className="border p-3">RD$ 400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-2">* Envío gratis en compras superiores a RD$ 5,000.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes sobre Envíos</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cuánto tiempo tarda en llegar mi pedido?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Los tiempos de entrega varían según tu ubicación y el método de envío seleccionado:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Santo Domingo: 1-2 días hábiles (envío estándar)</li>
                      <li>Resto del país: 2-4 días hábiles (envío estándar)</li>
                      <li>Envío express: 1-2 días hábiles para todo el país</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Cómo puedo hacer seguimiento de mi pedido?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de
                      seguimiento. También puedes acceder a esta información en la sección "Mis Pedidos" de tu cuenta.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Qué hago si mi pedido no llega en el tiempo estimado?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Si tu pedido no llega dentro del tiempo estimado, por favor contáctanos a través de
                      info@idivas.com o llama al +1 (809) 123-4567. Nuestro equipo de atención al cliente verificará el
                      estado de tu envío y te proporcionará la información necesaria.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Realizan envíos internacionales?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Actualmente solo realizamos envíos dentro de República Dominicana. Estamos trabajando para
                      expandir nuestros servicios a otros países en el futuro.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Puedo cambiar la dirección de envío después de realizar mi pedido?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Sí, puedes cambiar la dirección de envío siempre y cuando el pedido no haya sido despachado. Para
                      hacerlo, contáctanos lo antes posible a través de info@idivas.com o llama al +1 (809) 123-4567.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Política de Envíos</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  En iDivas nos comprometemos a entregar tus productos en perfectas condiciones y en el menor tiempo
                  posible. Todos nuestros envíos son realizados a través de empresas de mensajería confiables y con
                  experiencia.
                </p>
                <p>
                  Una vez realizado tu pedido, recibirás un correo electrónico de confirmación con los detalles del
                  mismo. Cuando tu pedido sea despachado, recibirás otro correo con la información de seguimiento.
                </p>
                <p>
                  Si tienes alguna pregunta o inquietud sobre nuestros servicios de envío, no dudes en contactarnos a
                  través de info@idivas.com o llamando al +1 (809) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

