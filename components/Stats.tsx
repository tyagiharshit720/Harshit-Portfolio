"use client"

import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    {
      icon: "bi-journal-code",
      number: 12,
      title: "Projects Completed",
      subtitle: "Academic & Internship",
    },
    {
      icon: "bi-stack",
      number: 8,
      title: "Technologies",
      subtitle: "Java, JavaScript, React, Node.js, Spring Boot, MySQL...",
    },
    {
      icon: "bi-clock-history",
      number: 1500,
      title: "Hours of Learning",
      subtitle: "Coding, Debugging & Problem Solving",
    },
    {
      icon: "bi-people",
      number: 5,
      title: "Team Projects",
      subtitle: "Collaborated with developers",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return <span>{count}</span>
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 xl:ml-80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <i className={`bi ${stat.icon} text-4xl text-blue-600 mb-4`}></i>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  <CountUp end={stat.number} />
                </div>
                <h4 className="font-semibold text-gray-700 mb-1">{stat.title}</h4>
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
