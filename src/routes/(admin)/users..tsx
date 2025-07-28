import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { UserPage } from '@/features/users'
import { useTRPC } from '@/integrations/trpc/react'

export const Route = createFileRoute('/(admin)/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  const trpc = useTRPC()
  const { data, error } = useQuery(trpc.users.list.queryOptions({}))
  console.log('data', data)

  if (error) console.log('error', error.message)
  return <UserPage />
}
