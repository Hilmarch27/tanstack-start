import { createFileRoute } from '@tanstack/react-router'
import { LayoutSidebar } from '@/components/sidebar/sidebar'

export const Route = createFileRoute('/_admin')({
  component: LayoutSidebar,
})
