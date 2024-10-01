
import './globals.css'
import NavBar from '@/components/NavBar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    // </ClerkProvider>
  )
}