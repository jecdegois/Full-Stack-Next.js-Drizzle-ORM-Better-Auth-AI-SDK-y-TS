import { community } from "@/src/db/schema"

export type InsertCommunity = typeof community.$inferInsert // otro metodo para crear tipos con drizzle

export type SelectCommunity = typeof community.$inferSelect // otro metodo para crear tipos con drizzle