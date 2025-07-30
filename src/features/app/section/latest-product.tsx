import { ShoppingBag } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { products } from '@/features/app/data'
import { CardProduct } from '@/features/app/card-product'

export function LatestProduct() {
  return (
    <section className="py-12 md:py-24 bg-muted/30" id="hotProduct">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Produk Terlaris
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Snack favorit pilihan pelanggan kami
            </p>
          </div>
        </div>
        <div className="mx-auto px-3 grid grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to=".">
            <Button size="lg" variant="outline" className="gap-1">
              <ShoppingBag className="h-4 w-4" />
              Lihat Semua Produk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
