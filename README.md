
# 🛍️ iDivas – Tienda de Moda Premium
![idivas](https://i.imgur.com/qzVAA7u.png)

**iDivas** es una plataforma de e-commerce enfocada en ofrecer las últimas tendencias de moda en la República Dominicana. Desarrollada con tecnologías modernas como Next.js, TypeScript, Tailwind CSS, ShadCN y Supabase, esta aplicación proporciona una experiencia de compra rápida, segura y atractiva.

## 🚀 Tecnologías Utilizadas

* **Next.js** (App Router) para renderizado híbrido y rutas dinámicas.
* **TypeScript** para tipado estático y mayor robustez en el desarrollo.
* **Tailwind CSS** para estilos utilitarios y diseño responsivo.
* **ShadCN UI** para componentes accesibles y personalizables.
* **Supabase** como backend-as-a-service: base de datos PostgreSQL, autenticación y almacenamiento.
* **Vercel** para despliegue continuo y hosting optimizado.([Vercel][1])

## 🧩 Funcionalidades Principales

* Catálogo de productos con imágenes, precios y descuentos.
* Sistema de carrito de compras y favoritos.
* Autenticación de usuarios (registro, login).
* Gestión de colecciones, categorías y promociones.
* Integración con pasarelas de pago (Visa, Mastercard, PayPal).
* Newsletter y conexión con redes sociales.
* Panel de administración (en desarrollo).

## 📦 Estructura del Proyecto

```

idivas/
├── app/                # Rutas y páginas (Next.js App Router)
├── components/         # Componentes reutilizables (ShadCN + Tailwind)
├── lib/                # Utilidades, hooks y helpers
├── styles/             # Archivos CSS globales y configuraciones
├── supabase/           # Configuración y servicios de Supabase
├── public/             # Imágenes y recursos estáticos
├── types/              # Definiciones de tipos y modelos
├── .env.local          # Variables de entorno (no versionadas)
└── README.md
```



## ⚙️ Configuración Local

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/idivas.git
   cd idivas
   ```



2. Instala las dependencias:

   ```bash
   pnpm install
   ```



3. Configura las variables de entorno en `.env.local`:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```



4. Inicia el servidor de desarrollo:

   ```bash
   pnpm run dev
   ```



## 🧪 Scripts Disponibles

* `pnpm run dev` – Inicia el servidor en modo desarrollo.
* `pnpm run build` – Compila la aplicación para producción.
* `pnpm run lint` – Ejecuta el linter para verificar el código.

## 📸 Capturas de Pantalla

![oaicite:81](https://i.imgur.com/dMko6Va.png)
![oaicite:84](https://i.imgur.com/0ajhCdM.png)

## 📬 Contacto

* 🌐 Sitio web: [idivas.vercel.app](https://idivas.vercel.app)
* 📧 Correo: [info@idivas.com](mailto:info@idivas.com)
* 📍 Ubicación: Santo Domingo, República Dominicana

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

