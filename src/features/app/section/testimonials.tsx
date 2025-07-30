import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    id: 1,
    name: 'Sari Dewi',
    location: 'Jakarta',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'Keripik singkong balado-nya enak banget! Pedasnya pas dan renyah. Sudah jadi langganan keluarga kami.',
    product: 'Keripik Singkong Balado',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    location: 'Bandung',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'Packaging rapi, pengiriman cepat, dan yang paling penting rasanya autentik seperti buatan rumah. Recommended!',
    product: 'Basreng Pedas',
  },
  {
    id: 3,
    name: 'Maya Putri',
    location: 'Surabaya',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'Anak-anak suka banget sama keripik pisang coklatnya. Manis dan gurih, cocok untuk cemilan sehat.',
    product: 'Keripik Pisang Coklat',
  },
  {
    id: 4,
    name: 'Ahmad Rizki',
    location: 'Yogyakarta',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4,
    comment:
      'Kualitas produk bagus, harga terjangkau. Makaroni pedasnya jadi favorit teman-teman kantor.',
    product: 'Makaroni Pedas',
  },
  {
    id: 5,
    name: 'Rina Sari',
    location: 'Medan',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'Pelayanan customer service sangat baik, produk selalu fresh. Terima kasih SnackShop!',
    product: 'Kacang Atom Pedas',
  },
  {
    id: 6,
    name: 'Doni Pratama',
    location: 'Makassar',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'Usus krispinya juara! Bumbu pedasnya nagih, teksturnya pas. Pasti order lagi.',
    product: 'Usus Krispi',
  },
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-orange-50/50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-700">
            <Quote className="mr-1 h-3 w-3" />
            <span>Testimoni Pelanggan</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Apa Kata Mereka Tentang{' '}
              <span className="text-orange-500">Produk Kami</span>
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kepuasan pelanggan adalah prioritas utama kami. Dengarkan
              pengalaman mereka dengan produk SnackShop.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">1000+</div>
            <div className="text-sm text-muted-foreground">Pelanggan Puas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">4.9</div>
            <div className="text-sm text-muted-foreground">
              Rating Rata-rata
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">95%</div>
            <div className="text-sm text-muted-foreground">Repeat Order</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">24/7</div>
            <div className="text-sm text-muted-foreground">
              Customer Support
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-orange-500 text-orange-500"
                      />
                    ))}
                  {Array(5 - testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                </div>

                <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-orange-100 text-orange-700">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <div className="text-xs text-orange-600 font-medium">
                    Produk: {testimonial.product}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-orange-500 text-orange-500"
                  />
                ))}
            </div>
            <span>Bergabunglah dengan 1000+ pelanggan yang puas</span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Rasakan sendiri kelezatan snack premium kami dan jadilah bagian dari
            keluarga besar SnackShop Indonesia.
          </p>
        </div>
      </div>
    </section>
  )
}
