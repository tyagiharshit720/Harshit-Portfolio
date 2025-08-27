import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Stats from "@/components/Stats"
import Skills from "@/components/Skills"
import Resume from "@/components/Resume"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import Blog from "@/components/Blog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
