import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { AboutTrainer } from "@/components/AboutTrainer"
import { Benefits } from "@/components/Benefits"
import { Booking } from "@/components/Booking"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutTrainer />
      <Benefits />
      <Booking />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
