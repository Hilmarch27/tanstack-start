import { QueryClient } from '@tanstack/react-query'
import superjson, { SuperJSON } from 'superjson'
import {
  createTRPCClient,
  httpBatchStreamLink,
  isNonJsonSerializable,
  loggerLink,
} from '@trpc/client'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import type { TRPCRouter } from '@/integrations/trpc/routers'
import type { TRPCCombinedDataTransformer } from '@trpc/server'
import { TRPCProvider } from '@/integrations/trpc/react'

function getUrl() {
  const base = (() => {
    if (typeof window !== 'undefined') return ''
    return `http://localhost:${process.env.PORT ?? 3000}`
  })()
  return `${base}/api/trpc`
}

export const transformer: TRPCCombinedDataTransformer = {
  input: {
    serialize: (obj) => {
      if (isNonJsonSerializable(obj)) {
        return obj
      }
      return SuperJSON.serialize(obj)
    },
    deserialize: (obj) => {
      if (isNonJsonSerializable(obj)) {
        return obj
      }
      return SuperJSON.deserialize(obj)
    },
  },
  output: SuperJSON,
}

export const trpcClient = createTRPCClient<TRPCRouter>({
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    httpBatchStreamLink({
      transformer,
      url: getUrl(),
    }),
  ],
})

const queryClient = new QueryClient({
  defaultOptions: {
    dehydrate: { serializeData: superjson.serialize },
    hydrate: { deserializeData: superjson.deserialize },
  },
})

const serverHelpers = createTRPCOptionsProxy({
  client: trpcClient,
  queryClient: queryClient,
})

export function getContext() {
  return {
    queryClient,
    trpc: serverHelpers,
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      {children}
    </TRPCProvider>
  )
}
