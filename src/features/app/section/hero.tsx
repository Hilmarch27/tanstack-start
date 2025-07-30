import { ShoppingBag, Star } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-lg bg-pink-100 px-3 py-1 text-sm text-accent-700">
              <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
              <span>Snack Terbaik di Indonesia</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Nikmati Kelezatan{' '}
                <span className="text-primary">Snack Indonesia</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rasakan cita rasa autentik snack Indonesia dengan kualitas
                premium dan harga terjangkau. Dikirim langsung ke rumah Anda.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/">
                <Button size="lg" className="gap-1 bg-primary hover:bg-accent">
                  <ShoppingBag className="h-4 w-4" />
                  Belanja Sekarang
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="gap-1">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                </div>
                <span className="font-medium">5.0</span>
              </div>
              <div className="text-muted-foreground">1000+ Pelanggan Puas</div>
            </div>
          </div>
          <div className="relative mx-auto aspect-square max-w-[450px] overflow-hidden rounded-full bg-muted lg:aspect-square">
            <img
              src="/placeholder.svg?height=800&width=800"
              alt="Koleksi snack Indonesia"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute -right-4 -top-4 rounded-full bg-primary p-3 shadow-lg">
              <div className="rounded-full bg-white px-3 py-1 text-sm font-medium">
                Diskon 20%
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-full bg-green-500 p-3 shadow-lg">
              <div className="rounded-full bg-white px-3 py-1 text-sm font-medium">
                Gratis Ongkir
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
