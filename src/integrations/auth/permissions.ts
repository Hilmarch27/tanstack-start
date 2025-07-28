import { createAccessControl } from 'better-auth/plugins/access'
import { adminAc, defaultStatements } from 'better-auth/plugins/admin/access'

// Define custom statements for our application
export const statement = {
  ...defaultStatements,
  project: ['create', 'read', 'update', 'delete', 'share'],
  billing: ['read', 'update', 'manage'],
} as const

// Create access control instance
const ac = createAccessControl(statement)

// Define roles with specific permissions
export const user = ac.newRole({
  project: ['create', 'read'],
  billing: ['read'],
})

export const admin = ac.newRole({
  project: ['create', 'read', 'update', 'delete', 'share'],
  billing: ['read', 'update'],
  ...adminAc.statements, // Include all admin statements
})

export const superadmin = ac.newRole({
  project: ['create', 'read', 'update', 'delete', 'share'],
  billing: ['read', 'update', 'manage'],
  ...adminAc.statements, // Include all admin statements
})

// Export the access control instance and roles
export { ac }

// Role type definitions
export type UserRole = 'user' | 'admin' | 'superadmin'
