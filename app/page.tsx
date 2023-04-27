import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './components/widgets/Hero'
import AvailablePrograms from './components/widgets/AvailablePrograms'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <AvailablePrograms />
    </main>
  )
}
