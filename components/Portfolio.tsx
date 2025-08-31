"use client"

import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*")

  const filters = [
    { key: "*", label: "All" },
    { key: "fullstack", label: "Full Stack" },
    { key: "web", label: "Web" },
  ]

  const projects = [
  {
    id: 1,
    title: "ERP System",
    description: "MERN Stack ERP with HR, Admin & Employee modules.",
    image: "/erp-dashboard.png",
    category: "fullstack",
    link: "#",
  },
  {
    id: 2,
    title: "APIL India - Website",
    description: "React.js CRM with attendance tracking & role-based access.",
    image: "/apil.png",
    category: "fullstack",
    link: "https://www.apil-online.com",
  },
  {
    id: 3,
    title: "Admire Holidays - Website",
    description: "Travel & holiday booking website built with React & Node.js.",
    image: "/admire.png", // replace with your actual screenshot path
    category: "web",
    link: "https://admireholidays.com",
  },
  {
    id: 4,
    title: "Admire Holidays - Admin Panel",
    description: "Admin dashboard for managing tours, bookings & users.",
    image: "/admire-holidays-admin.png", // replace with your actual screenshot path
    category: "fullstack",
    link: "https://admin.admireholidays.com",
  },
   {
    id: 5,
    title: "Snake game - just for fun",
    description: "Created a small snake game website just for fun",
    image: "/snake.png", // replace with your actual screenshot path
    category: "web",
    link: "https://snake-game-12.netlify.app/",
  },
  // ...other projects
]


  const filteredProjects =
    activeFilter === "*" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-50 xl:ml-80">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my major projects, showcasing my skills in Full Stack Development, Web Development, and AI
            applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.key ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-blue-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <i className="bi bi-zoom-in"></i>
                    </button>
                    <a
                      href={project.link}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
