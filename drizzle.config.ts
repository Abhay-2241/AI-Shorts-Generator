import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./configs/schema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:AE0fbilxWBy6@ep-purple-dust-a5nvdnm5.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});