import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { ChevronsDown, Github } from 'lucide-react'
import { AppLayout } from '@/features/app/layout-app'
import { ThemeSwitch } from '@/components/extend/theme-switch'
import { Button } from '@/components/ui/button'
import { NavApp } from '@/features/app/nav-app'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AppLayout.Root>
      <AppLayout.Header>
        <Link to="/" className="font-bold text-lg flex items-center">
          <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          Shadcn
        </Link>
        <NavApp />
        <div className="hidden lg:flex">
          <ThemeSwitch />
          <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
            <a
              aria-label="View on GitHub"
              href="https://github.com/nobruf/shadcn-landing-page.git"
              target="_blank"
            >
              <Github className="size-5" />
            </a>
          </Button>
        </div>
      </AppLayout.Header>
      <AppLayout.Main className="content-center min-h-screen flex-1">
        <Outlet />
      </AppLayout.Main>
    </AppLayout.Root>
  )
}
