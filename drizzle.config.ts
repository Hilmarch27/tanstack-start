import { defineConfig } from 'drizzle-kit'
import { env } from '@/integrations/env/server'

export default defineConfig({
  schema: './src/integrations/drizzle/schema',
  out: './src/integrations/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
