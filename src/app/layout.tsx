import './globals.css'

export const metadata = {
  title: {
    default: 'Netflix - Clone',
  },
  description: 'A clone from netflix website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
