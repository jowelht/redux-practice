import { Inter } from 'next/font/google'
import { Counter } from '@/components/counter'
import ProductCard from '@/components/product-card'
import Offcanvets from '@/components/cart-aside'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className} mx-auto w-[600px] mt-10`}
    >
      <Counter/>
      <ProductCard/>
      <Offcanvets/>
    </main>
  )
}
