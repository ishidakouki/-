"use client";

import { useState } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [count, setCount] = useState(0)

  return (
    <html lang="en">
      <body>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        <h2>Header</h2>{children}</body>
    </html>
  )
}
