import "dotenv/config";
import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  try {
    for (const u of userData) {
      await prisma.user.create({ data: u });
    }
    console.log("✅ Seeding complete!");
  } catch (e) {
    console.error("❌ Error while seeding:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
