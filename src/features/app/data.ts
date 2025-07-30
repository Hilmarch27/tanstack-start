export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

export const products: Array<Product> = [
  {
    id: '1',
    name: 'Keripik Singkong Balado',
    description: 'Keripik singkong dengan bumbu balado pedas khas Indonesia',
    price: 15000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'keripik',
    stock: 50,
  },
  {
    id: '2',
    name: 'Keripik Pisang Coklat',
    description: 'Keripik pisang dengan taburan coklat premium',
    price: 18000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'keripik',
    stock: 45,
  },
  {
    id: '3',
    name: 'Makaroni Pedas',
    description: 'Makaroni kering dengan bumbu pedas level 3',
    price: 12000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'makaroni',
    stock: 60,
  },
  {
    id: '4',
    name: 'Kacang Atom Pedas',
    description: 'Kacang atom dengan balutan tepung pedas gurih',
    price: 10000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'kacang',
    stock: 75,
  },
  {
    id: '5',
    name: 'Basreng Pedas',
    description: 'Bakso goreng kering dengan bumbu pedas khas Bandung',
    price: 15000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'bakso',
    stock: 40,
  },
  {
    id: '6',
    name: 'Kerupuk Seblak',
    description: 'Kerupuk dengan bumbu seblak pedas khas Bandung',
    price: 8000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'kerupuk',
    stock: 80,
  },
  {
    id: '7',
    name: 'Mie Lidi Pedas',
    description: 'Mie kering berbentuk lidi dengan bumbu pedas',
    price: 9000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'mie',
    stock: 65,
  },
  {
    id: '8',
    name: 'Keripik Tempe',
    description: 'Keripik tempe renyah dengan bumbu gurih',
    price: 14000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'keripik',
    stock: 55,
  },
  {
    id: '9',
    name: 'Usus Krispi',
    description: 'Usus ayam krispi dengan bumbu pedas manis',
    price: 20000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'krispi',
    stock: 35,
  },
  {
    id: '10',
    name: 'Kue Bawang',
    description: 'Kue bawang renyah dengan rasa gurih',
    price: 13000,
    image: '/placeholder.svg?height=300&width=300',
    category: 'kue',
    stock: 70,
  },
]
