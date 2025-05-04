"use client"

import type React from "react"

import { useState } from "react"
import { ShopHeader } from "@/components/shop/shop-header"
import { Breadcrumb } from "@/components/shop/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      toast({
        title: "Mensaje enviado",
        description: "Hemos recibido tu mensaje. Te responderemos a la brevedad.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success state after a delay
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Contacto", href: "/contact", active: true },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold">Contáctanos</h1>
          <p className="text-gray-500 mt-2">
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>Diferentes formas de comunicarte con nosotros</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-pink-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-sm text-gray-500">
                      Calle Principal #123, Local 4<br />
                      Santo Domingo, República Dominicana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-pink-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-sm text-gray-500">
                      +1 (809) 123-4567
                      <br />
                      +1 (809) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-pink-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Correo Electrónico</h3>
                    <p className="text-sm text-gray-500">
                      info@idivas.com
                      <br />
                      ventas@idivas.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-pink-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horario de Atención</h3>
                    <p className="text-sm text-gray-500">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 1:00 PM
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Síguenos</CardTitle>
                <CardDescription>Mantente conectado con nosotros en redes sociales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Asunto de tu mensaje"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600" disabled={loading}>
                    {loading ? (
                      "Enviando..."
                    ) : success ? (
                      <span className="flex items-center">
                        Mensaje Enviado <CheckCircle2 className="ml-2 h-4 w-4" />
                      </span>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Nuestra Ubicación</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121543.13811772796!2d-69.98956562402344!3d18.481679899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1648646100000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Toaster />
    </div>
  )
}

