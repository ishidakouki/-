"use client";
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <RecoilRoot>
      <html lang="en">
        <body>
            <h1>Todo List</h1>{children}</body>
      </html>
    </RecoilRoot>
  )
}
