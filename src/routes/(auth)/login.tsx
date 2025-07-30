import { createFileRoute } from '@tanstack/react-router'
import { AuthPage } from '@/features/auth'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-b from-emerald-50 to-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <AuthPage />
      </div>
    </main>
  )
}
