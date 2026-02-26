import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env.ts";

console.log(ENV.DATABASE_URL);
export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL!,
  },
});
