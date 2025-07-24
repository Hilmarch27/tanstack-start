import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from '@/integrations/drizzle/schema'
import { env } from '@/integrations/env/server'

const sql = neon(env.DATABASE_URL)

export const db = drizzle({
  schema,
  client: sql,
})

export type DB = typeof db
