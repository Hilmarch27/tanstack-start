import { createTRPCRouter } from "@/integrations/trpc/config"
import { todoRouter } from "@/integrations/trpc/routers/todo"
import { usersRouter } from "@/integrations/trpc/routers/users"

export const trpcRouter = createTRPCRouter({
  people: todoRouter,
  users: usersRouter,
})
export type TRPCRouter = typeof trpcRouter
