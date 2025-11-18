import { getUserUsage } from "@/lib/usage";

import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const usageRouter = createTRPCRouter({
    status: protectedProcedure.query(async () => {
        try {
            const result = await getUserUsage();

            return result;
        } catch {
            return null;
        }
    })
})