"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export const Client = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: "mawu prefetch"}));

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}