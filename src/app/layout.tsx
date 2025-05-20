// src/app/layout.tsx
import './styles/globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerald Ng',
  description: 'Gerald Ng is a software developer who builds web applications that just makes sense.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
