import { createAuthClient } from 'better-auth/react'
import { adminClient } from 'better-auth/client/plugins'
import { env } from '@/integrations/env/client'

export const authClient = createAuthClient({
  baseURL: env.VITE_CLIENT_URL,
  plugins: [adminClient()],
})

export type AuthClient = ReturnType<typeof createAuthClient>

export const useSession = () => {
  const session = authClient.useSession()
  return session
}
