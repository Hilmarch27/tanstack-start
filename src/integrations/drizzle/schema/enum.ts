import { pgEnum } from 'drizzle-orm/pg-core'

export const paymentStatus = pgEnum('payment_status', [
  'paid',
  'unpaid',
  'partial',
])
