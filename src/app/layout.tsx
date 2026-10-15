import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEE · Psicóloga en línea para mujeres que lo sostienen todo | Lourdes Solares",
  description:
    "Sesiones en línea y en español para mujeres cansadas de sostenerlo todo. Método SER en BEE: Sostenerte, Elegirte, Renacer. Estés donde estés.",
  keywords: [
    "psicóloga en línea",
    "terapia en español",
    "mujeres",
    "bienestar emocional",
    "Lourdes Solares",
    "BEE",
    "SER en BEE",
  ],
  openGraph: {
    title: "BEE · Bien Estar Emocional",
    description:
      "Sesiones en línea y en español para mujeres cansadas de sostenerlo todo.",
    type: "website",
    locale: "es_GT",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
