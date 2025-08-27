import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bren Icons - Biblioteca de Ícones SVG para React',
  description: 'Explore nossa coleção completa de ícones SVG personalizados para React. Copie o código e use em seus projetos.',
  keywords: 'ícones, svg, react, typescript, ui, design-system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
