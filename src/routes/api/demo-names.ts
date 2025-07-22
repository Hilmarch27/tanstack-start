/* eslint-disable @typescript-eslint/require-await */
import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute('/api/demo-names').methods({
  GET: async () => {
   return json({ message: 'Hello, World!' })
  },
})
