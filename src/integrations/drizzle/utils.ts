import { nanoid } from 'nanoid'

export const generateId = () => nanoid(12)
export const generateTransactionId = () => `tr-${generateId}`
