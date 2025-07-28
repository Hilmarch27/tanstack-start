import { QueryCache, QueryClient } from '@tanstack/react-query'
import superjson, { SuperJSON } from 'superjson'
import {
  createTRPCClient,
  httpBatchLink,
  httpBatchStreamLink,
  httpLink,
  isNonJsonSerializable,
  loggerLink,
  splitLink,
} from '@trpc/client'
import { createIsomorphicFn, createServerFn } from '@tanstack/react-start'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'
import { getWebRequest } from '@tanstack/react-start/server'
import { cache } from 'react'
import { toast } from 'sonner'
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

const getRequestHeaders = createServerFn({ method: 'GET' }).handler(
  // eslint-disable-next-line @typescript-eslint/require-await
  async () => {
    const request = getWebRequest()
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const headers = new Headers(request?.headers)

    return Object.fromEntries(headers)
  },
)

const headers = createIsomorphicFn()
  .client(() => ({}))
  .server(() => getRequestHeaders())

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
    splitLink({
      condition: (op) => isNonJsonSerializable(op.input),
      true: httpLink({
        url: getUrl(),
        transformer,
        headers,
      }),
      false: httpBatchLink({
        url: getUrl(),
        transformer,
        headers,
      }),
    }),
  ],
})

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      dehydrate: { serializeData: superjson.serialize },
      hydrate: { deserializeData: superjson.deserialize },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        // 🎉 only show error toasts if we already have data in the cache
        // which indicates a failed background update
        if (query.state.data !== undefined) {
          toast.error(`Something went wrong: ${error.message}`)
        }
      },
    }),
  })
}
export const createServerHelpers = ({
  queryClient,
}: {
  queryClient: QueryClient
}) => {
  const serverHelpers = createTRPCOptionsProxy({
    client: trpcClient,
    queryClient: queryClient,
  })
  return serverHelpers
}

export const getQueryClient = cache(createQueryClient)

export function Provider({
  children,
  queryClient,
}: {
  children: React.ReactNode
  queryClient: QueryClient
}) {
  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      {children}
    </TRPCProvider>
  )
}
