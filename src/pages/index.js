import { Inter } from 'next/font/google'
import { Counter } from '@/componets/counter'
import ProductCard from '@/componets/product-card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className} mx-auto w-[600px] mt-10`}
    >
      <Counter/>
      <ProductCard/>

    </main>
  )
}
