import { createTRPCRouter } from "@/integrations/trpc/config"
import { todoRouter } from "@/integrations/trpc/routers/todo"

export const trpcRouter = createTRPCRouter({
  people: todoRouter,
})
export type TRPCRouter = typeof trpcRouter
