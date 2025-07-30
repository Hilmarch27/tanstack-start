import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="sm"
      variant="ghost"
      className="w-auto justify-start"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
        <span className="block lg:hidden">Dark</span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className="size-5" />
        <span className="block lg:hidden">Ligth</span>
      </div>

      <span className="sr-only">System</span>
    </Button>
  )
}
