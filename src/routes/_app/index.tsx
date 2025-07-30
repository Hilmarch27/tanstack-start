import { createFileRoute } from '@tanstack/react-router'
import { SectionApp } from '@/features/app/section'

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SectionApp.Hero />
      <SectionApp.Featured />
      <SectionApp.LatestProduct />
      <SectionApp.Testimonials />
      <SectionApp.Recap />
    </>
  )
}
