import z4 from 'zod/v4'
import { auth } from '@/integrations/auth'
import { protectedProcedure } from '@/integrations/trpc/config'

export const usersRouter = {
  list: protectedProcedure
    .input(z4.object({ search: z4.string().optional().default('') }))
    .query(async ({ ctx, input }) => {
      const { users, total } = await auth.api.listUsers({
        query: {
          searchValue: input.search,
          limit: 100,
          sortDirection: 'desc',
        },
        headers: ctx.headers,
      })
      return {
        users,
        total,
      }
    }),
}
