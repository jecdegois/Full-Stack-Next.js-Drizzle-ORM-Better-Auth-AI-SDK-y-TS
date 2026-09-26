import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const community = pgTable('communities', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    createdBy: text('created_by').notNull()
})


//npx drizzle-kit generate :: Para generar migraciones
//npx drizzle-kit push :: Para aplicar migraciones

type InsertCommunity2 = InferInsertModel<typeof community> //Crear tipos con drizzle

type SelectCommunity2= InferSelectModel<typeof community>




