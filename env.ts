import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    clientPrefix: 'GOOGLE',
    client: {
        GOOGLE_CLIENT_EMAIL: z.string().min(1),
        GOOGLE_PRIVATE_KEY: z.string().min(1),
        GOOGLE_SHEET_ID: z.string().min(1),
    },
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
})