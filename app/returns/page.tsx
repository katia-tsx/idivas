import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RotateCcw, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Devoluciones", href: "/returns", active: true },
          ]}
        />

        <div className="mt-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Política de Devoluciones</h1>
          <p className="text-gray-500 mt-2 mb-8">Conoce todo sobre nuestras políticas de devoluciones y cambios.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <RotateCcw className="h-8 w-8 text-pink-500" />
                <CardTitle>Devoluciones Gratuitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ofrecemos devoluciones gratuitas dentro de los 30 días posteriores a la recepción de tu pedido.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Clock className="h-8 w-8 text-pink-500" />
                <CardTitle>Proceso Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Procesamos las devoluciones en un plazo de 3-5 días hábiles tras recibir los artículos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <CheckCircle2 className="h-8 w-8 text-pink-500" />
                <CardTitle>Garantía de Calidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todos nuestros productos cuentan con garantía de calidad. Si recibes un artículo defectuoso, te
                  ofrecemos un reemplazo o reembolso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <AlertCircle className="h-8 w-8 text-pink-500" />
                <CardTitle>Condiciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Los artículos deben estar en su estado original, sin usar y con todas las etiquetas para ser elegibles
                  para devolución.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Proceso de Devolución</h2>
              <ol className="space-y-4 text-gray-600 list-decimal list-inside">
                <li className="pl-2">
                  <span className="font-medium">Solicita tu devolución:</span> Contacta a nuestro servicio al cliente a
                  través de info@idivas.com o llama al +1 (809) 123-4567 dentro de los 30 días posteriores a la
                  recepción de tu pedido.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Prepara tu paquete:</span> Coloca los artículos en su embalaje original
                  con todas las etiquetas intactas. Incluye el formulario de devolución que te enviaremos por correo
                  electrónico.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Envía tu paquete:</span> Utiliza la etiqueta de envío prepagada que te
                  proporcionaremos o envía el paquete a la dirección indicada.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Procesamiento:</span> Una vez recibido, procesaremos tu devolución en un
                  plazo de 3-5 días hábiles.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Reembolso:</span> El reembolso se realizará a través del mismo método de
                  pago utilizado en la compra original. Recibirás una notificación por correo electrónico cuando se
                  complete el proceso.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes sobre Devoluciones</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Cuál es el plazo para realizar una devolución?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del pedido. Pasado este
                      plazo, no podremos procesar la devolución.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Qué artículos no son elegibles para devolución?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">Los siguientes artículos no son elegibles para devolución:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Ropa interior y trajes de baño (por razones de higiene)</li>
                      <li>Artículos personalizados o hechos a medida</li>
                      <li>Productos con descuentos superiores al 50%</li>
                      <li>Artículos dañados por mal uso</li>
                      <li>Productos sin etiquetas originales o embalaje</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cuánto tiempo tarda en procesarse mi reembolso?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Una vez que recibamos los artículos devueltos, procesaremos tu reembolso en un plazo de 3-5 días
                      hábiles. Dependiendo de tu entidad bancaria, el reembolso puede tardar entre 5-10 días adicionales
                      en reflejarse en tu cuenta.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Puedo cambiar un artículo por otro tamaño o color?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Sí, ofrecemos la opción de cambio por otro tamaño o color, sujeto a disponibilidad. Para solicitar
                      un cambio, sigue el mismo proceso de devolución y especifica en el formulario que deseas un cambio
                      en lugar de un reembolso.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Qué hago si recibo un artículo defectuoso?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">
                      Si recibes un artículo defectuoso, por favor contáctanos dentro de las 48 horas posteriores a la
                      recepción del pedido. Envíanos fotos del defecto a info@idivas.com y te ofreceremos un reemplazo o
                      reembolso completo, incluyendo los gastos de envío.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Términos y Condiciones de Devolución</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  En iDivas nos comprometemos a garantizar tu satisfacción con cada compra. Nuestra política de
                  devoluciones está diseñada para ser justa y transparente, asegurando que tengas una experiencia de
                  compra positiva.
                </p>
                <p>Para que un artículo sea elegible para devolución, debe cumplir con las siguientes condiciones:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Estar en su estado original, sin usar y sin lavar</li>
                  <li>Tener todas las etiquetas originales intactas</li>
                  <li>Estar en su embalaje original</li>
                  <li>No mostrar signos de uso, desgaste o daños</li>
                </ul>
                <p>
                  Nos reservamos el derecho de rechazar devoluciones que no cumplan con estas condiciones. En caso de
                  rechazo, te notificaremos y te enviaremos los artículos de vuelta.
                </p>
                <p>
                  Si tienes alguna pregunta o inquietud sobre nuestra política de devoluciones, no dudes en contactarnos
                  a través de info@idivas.com o llamando al +1 (809) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

