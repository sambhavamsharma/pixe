import { RateLimiterPrisma } from "rate-limiter-flexible";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

const FREE_POINTS = 5;
const PRO_POINTS = 100;
const DURATION = 30 * 24 * 60 * 60;
const GENERATION_COST = 1;

export async function getUsageTracker() {
  const { has } = await auth();
  const hasProAccess = has({ plan: "pro"});

  const useTracker = new RateLimiterPrisma({
    storeClient: prisma,
    tableName: "Usage",
    points: hasProAccess ? PRO_POINTS : FREE_POINTS,
    duration: DURATION,
  });

  return useTracker;
}

export async function consumeCredits() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const useTracker = await getUsageTracker();
  const result = await useTracker.consume(userId, GENERATION_COST);
  return result;
}

// FIXED: This is the "get user usage" function
export async function getUserUsage() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const useTracker = await getUsageTracker();
  const result = await useTracker.get(userId);
  return result;
}
