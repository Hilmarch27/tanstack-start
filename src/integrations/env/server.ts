import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    SERVER_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
