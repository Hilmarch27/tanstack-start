import { ShoppingCart, Star } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from '@tanstack/react-router'
import type { Product } from '@/features/app/data'
import { formatRupiah } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

interface ProductCardProps {
  product: Product
}

export function CardProduct({ product }: ProductCardProps) {
  const isMobile = useIsMobile()

  const addToCart = () => {
    toast.success(`${product.name} telah ditambahkan ke keranjang belanja.`, {
      description: 'heheheh',
    })
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-md">
      <Link to=".">
        <img
          className="h-36 xs:h-40 sm:h-48 w-full rounded-t-lg object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
          width={500}
          height={240}
        />
      </Link>
      <span className="absolute top-0 left-0 w-16 xs:w-20 sm:w-24 md:w-28 translate-y-1 xs:translate-y-2 sm:translate-y-3 md:translate-y-4 -translate-x-4 xs:-translate-x-5 sm:-translate-x-5 md:-translate-x-7 -rotate-45 bg-primary text-center text-[10px] xs:text-xs sm:text-sm py-1 text-primary-foreground">
        Best
      </span>
      <div className="mt-2 xs:mt-3 sm:mt-4 px-2 xs:px-3 sm:px-4 md:px-5 pb-2 xs:pb-3 sm:pb-4 md:pb-5">
        <Link to=".">
          <h5 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold tracking-tight text-slate-900 line-clamp-1 xs:line-clamp-2">
            {product.name}
          </h5>
        </Link>
        <div className="mt-1 xs:mt-2 mb-1 xs:mb-2 sm:mb-3 flex items-center flex-wrap gap-1">
          <span className="mr-1 sm:mr-2 rounded bg-yellow-200 px-1.5 xs:px-2 sm:px-2.5 py-0.5 text-[10px] xs:text-xs font-semibold">
            5.0
          </span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-300 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <span className="text-base xs:text-lg sm:text-xl md:text-3xl font-bold text-slate-900">
            {formatRupiah(product.price)}
          </span>
          <span className="text-xs xs:text-sm text-slate-900 line-through ml-1 xs:ml-2">
            {formatRupiah(product.price * 1.15)} {/* pluse 15 % */}
          </span>
        </div>
        <div className="flex justify-between items-center mt-1 md:mt-2">
          <div className="flex items-center text-[10px] xs:text-xs text-muted-foreground">
            <span className="truncate">Stok: {product.stock}</span>
            <span className="mx-1 xs:mx-2">•</span>
            <span className="capitalize truncate">{product.category}</span>
          </div>
          <Button
            title="Add to cart"
            onClick={addToCart}
            variant="outline"
            size="icon"
            className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-auto sm:px-2"
          >
            <ShoppingCart className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="sr-only sm:not-sr-only sm:ml-2">
              {!isMobile && 'Add to cart'}
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
