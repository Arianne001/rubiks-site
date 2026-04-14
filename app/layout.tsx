import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

          <h1 className="font-bold text-xl">
            🧊 Rubik’s Guide
          </h1>

          <div className="flex gap-6 font-medium">
            <a href="/" className="hover:text-blue-500 transition">Home</a>
            <a href="/funfacts" className="hover:text-blue-500 transition">History</a>
            <a href="/basics" className="hover:text-blue-500 transition">Basics</a>
            <a href="/solve" className="hover:text-blue-500 transition">Solve</a>
            <a href="/math" className="hover:text-blue-500 transition">Math</a>
          </div>

        </nav>

        {children}

      </body>
    </html>
  )
}
