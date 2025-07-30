import { ChevronsDown } from 'lucide-react'
import React from 'react'
import { Link } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import MenuButton from '@/components/extend/menu-button'
import { ThemeSwitch } from '@/components/extend/theme-switch'

type RouteProps = {
  href: string
  label: string
}

const ROUTE_LIST: Array<RouteProps> = [
  {
    href: '#testimonials',
    label: 'Testimonials',
  },
  {
    href: '#hotProduct',
    label: 'Hot',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
]

export function NavApp() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Drawer modal open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <MenuButton
              className="cursor-pointer lg:hidden"
              open={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </DrawerTrigger>

          <DrawerContent className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary">
            <div>
              <DrawerHeader className="mb-4 ml-4">
                <DrawerTitle className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Shadcn
                  </Link>
                </DrawerTitle>
              </DrawerHeader>

              <div className="flex flex-col gap-2">
                {ROUTE_LIST.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link to={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <DrawerFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ThemeSwitch />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {ROUTE_LIST.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link to={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
