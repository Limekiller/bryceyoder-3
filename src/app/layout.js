import "./globals.scss";

export const metadata = {
  title: "Bryce Yoder",
  description: "Designer and full-stack developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
