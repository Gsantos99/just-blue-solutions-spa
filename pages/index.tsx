import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Features } from "../components/Features"
import { Footer } from "../components/Footer"
import { Faq } from "../components/Faq"

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Footer />
    </div>
  )
}
