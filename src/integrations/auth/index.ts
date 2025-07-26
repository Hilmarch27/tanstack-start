import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { reactStartCookies } from 'better-auth/react-start'
import { admin } from 'better-auth/plugins'
import { db } from '@/integrations/drizzle'
import * as schema from '@/integrations/drizzle/schema'
import { env } from '@/integrations/env/server'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.SERVER_URL,
  trustedOrigins: [env.SERVER_URL],
  basePath: '/api/auth',
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    admin(),
    reactStartCookies(), // make sure this is the last plugin in the array
  ],
})
