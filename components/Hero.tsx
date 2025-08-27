"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const items = ["Designer", "Developer", "Freelancer"]
    let currentIndex = 0
    let currentText = ""
    let isDeleting = false

    const typeEffect = () => {
      const currentItem = items[currentIndex]

      if (isDeleting) {
        currentText = currentItem.substring(0, currentText.length - 1)
      } else {
        currentText = currentItem.substring(0, currentText.length + 1)
      }

      if (typedRef.current) {
        typedRef.current.textContent = currentText
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && currentText === currentItem) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && currentText === "") {
        isDeleting = false
        currentIndex = (currentIndex + 1) % items.length
        typeSpeed = 500
      }

      setTimeout(typeEffect, typeSpeed)
    }

    typeEffect()
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video/2887463-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white xl:ml-80">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Harshit Kumar Tyagi</h2>
        <p className="text-xl md:text-2xl">
          {"I'm "}
          <span ref={typedRef} className="text-blue-400"></span>
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  )
}
