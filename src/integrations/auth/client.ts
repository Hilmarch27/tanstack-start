import { createAuthClient } from 'better-auth/react'
import { env } from '@/integrations/env/client'

export const authClient = createAuthClient({
  baseURL: env.VITE_CLIENT_URL,
})

export type AuthClient = ReturnType<typeof createAuthClient>
