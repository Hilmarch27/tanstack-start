import { ShoppingBag } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function Recap() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kualitas Terbaik untuk Anda
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kami hanya menggunakan bahan-bahan berkualitas tinggi untuk
                memastikan kepuasan Anda. Setiap produk dibuat dengan cinta dan
                perhatian khusus.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to=".">
                <Button size="lg" className="gap-1">
                  <ShoppingBag className="h-4 w-4" />
                  Belanja Sekarang
                </Button>
              </Link>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl bg-muted/50 object-cover">
            <img
              src="https://placehold.co/600x800"
              alt="Proses produksi snack"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
