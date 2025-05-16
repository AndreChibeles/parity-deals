import { createDefineEnv } from "next/dist/build/swc";
import { z } from "zod";

export const env = createDefineEnv({
  emptyStringAsUndefined: true,
  server: {
    DATABASE_URL: z.string().url(),
    CLERK_SECRET_KEY: z.string(),
  },
  experimental_runtimeEnv: process.env,
});
