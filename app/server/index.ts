import { z } from 'zod'
import { publicProcedure, router } from './trpc'
import { sideBarData } from '../../data/sideBarData'

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    // return await db.select().from(todos).all();
    return [0, 1, 2]
  }),
  getSidebar: publicProcedure.query(async () => {
    return sideBarData
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    // await db.insert(todos).values({ content: opts.input, done: 0 }).run();
    return true
  }),
  setDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.number(),
      })
    )
    .mutation(async (opts) => {
      // await db
      //   .update(todos)
      //   .set({ done: opts.input.done })
      //   .where(eq(todos.id, opts.input.id))
      //   .run();
      return true
    }),
})

export type AppRouter = typeof appRouter
