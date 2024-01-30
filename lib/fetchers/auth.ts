import "server-only";

import { unstable_cache as cache } from "next/cache";
import { currentUser } from "@clerk/nextjs";

export async function getCasheduser() {
  try {
    return await cache(
      async () => {
        return currentUser();
      },
      ["cached-user"],
      {
        revalidate: 900,
        tags: ["cached-user"],
      }
    )();
  } catch (error) {
    console.error(error);
    return null;
  }
}
