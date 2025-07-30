import { Award, Clock, ShieldCheck, Truck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    description: 'Dikirim langsung ke alamat Anda dalam 1-3 hari kerja',
  },
  {
    icon: ShieldCheck,
    title: 'Kualitas Terjamin',
    description: 'Semua produk kami dibuat dengan bahan berkualitas tinggi',
  },
  {
    icon: Clock,
    title: 'Produksi Harian',
    description: 'Snack dibuat fresh setiap hari untuk menjaga kualitas',
  },
  {
    icon: Award,
    title: 'Produk Terbaik',
    description: 'Pemenang penghargaan snack terbaik Indonesia 2025',
  },
] as const

export function Featured() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-pink-100 p-3">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
