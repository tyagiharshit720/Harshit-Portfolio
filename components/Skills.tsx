"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS / Tailwind CSS", percentage: 90 },
    { name: "JavaScript (ES6+)", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Java", percentage: 80 },
    { name: "MySQL / MongoDB", percentage: 70 },
    { name: "Git & GitHub", percentage: 85 },
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 xl:ml-80">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My technical expertise covers both front-end and back-end technologies, enabling me to build full-stack
            applications from scratch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-blue-600 font-bold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
