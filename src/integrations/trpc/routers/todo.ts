import { publicProcedure } from '@/integrations/trpc/config'

export const todoRouter = {
  list: publicProcedure.query(async () => {
    return await [
      {
        name: 'John Doe',
      },
      {
        name: 'Jane Doe',
      },
    ]
  }),
}
