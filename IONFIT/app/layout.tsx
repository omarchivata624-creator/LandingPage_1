import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "IONFIT — Nutrición y Suplementos de Alto Rendimiento",
  description:
    "Transforma tu cuerpo con los suplementos y planes nutricionales de IONFIT. Ciencia aplicada al rendimiento deportivo en Colombia.",
  openGraph: {
    title: "IONFIT — Nutrición de Alto Rendimiento",
    description: "Suplementos y planes nutricionales para atletas y deportistas en Colombia.",
    type: "website",
    locale: "es_CO",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geist.variable} bg-brand-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
