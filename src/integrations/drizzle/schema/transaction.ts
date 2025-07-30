import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { user } from '@/integrations/drizzle/schema/auth'
import { paymentStatus } from '@/integrations/drizzle/schema/enum'
import { generateTransactionId } from '@/integrations/drizzle/utils'

export const transactions = pgTable('transactions', {
  id: text('id').primaryKey().$defaultFn(generateTransactionId),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  customerName: text('customer_name'), // opsional: pembeli umum
  total: integer('total').notNull(),
  status: paymentStatus('status').notNull().default('unpaid'),
  note: text('note'), // catatan tambahan
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
})
