import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const router = t.router;
export const procedure = t.procedure;

export const appRouter = router({
  hello: procedure
    .query(() => {
      return {
        greeting: `hello There`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;