import { Link } from '@tanstack/react-router'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

function Header({ className, children, ...props }: ComponentProps<'header'>) {
  return (
    <header
      {...props}
      className={cn(
        'shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card',
        className,
      )}
    >
      {children}
    </header>
  )
}

function Main({ className, children, ...props }: ComponentProps<'main'>) {
  return (
    <main
      {...props}
      className={cn(
        'w-full md:w-full lg:w-[75%] lg:max-w-screen-xl mx-auto',
        className,
      )}
    >
      {children}
    </main>
  )
}

function Footer({ className, ...props }: ComponentProps<'footer'>) {
  return (
    <footer
      {...props}
      className={cn(
        'w-full md:w-full lg:w-[75%] lg:max-w-screen-xl mx-auto border-t py-6 md:py-0',
        className,
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; 2025 SnackShop Indonesia. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            Tentang Kami
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            Kontak
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  )
}

function Root({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col min-h-dvh bg-gradient-to-b from-pink-50 to-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const AppLayout = { Header, Main, Footer, Root }
