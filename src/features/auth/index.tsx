import { Loader } from '@/components/ui/loader'
import { AuthForm } from '@/features/auth/form'
import { authClient } from '@/integrations/auth/client'

export function AuthPage() {
  const { isPending } = authClient.useSession()

  if (isPending) {
    return <Loader />
  }

  return (
    <div className="flex items-center justify-center h-svh">
      {/* <AuthForm.Login /> */}
      <AuthForm.Register />
    </div>
  )
}
