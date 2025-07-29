import { Command } from 'lucide-react'
import { Outlet } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
import { DATA_SIDEBAR } from '@/components/sidebar/data-sidebar'
import { NavbarAdmin } from '@/components/sidebar/navbar'

type MainNavProps = {
  items: Array<{
    name: string
    url: string
    icon: LucideIcon
  }>
}

function MainNav({ items }: MainNavProps) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>General Admin</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

type SecondaryNavProps = {
  items: Array<{
    title: string
    url: string
    icon: LucideIcon
  }>
}

function SecondaryNav({
  items,
  ...props
}: SecondaryNavProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">DND Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={DATA_SIDEBAR.navMain} />
        <SecondaryNav items={DATA_SIDEBAR.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}

export function LayoutSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="border-2">
        <NavbarAdmin />
        <div className="container mx-0 px-2 md:px-4.5">
          {children ? children : <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
