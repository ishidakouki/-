"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <h1>Todo List</h1>{children}</body>
    </html>
  )
}
