"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "resume", "portfolio", "services", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#hero", label: "Home", icon: "bi-house" },
    { href: "#about", label: "About", icon: "bi-person" },
    { href: "#resume", label: "Resume", icon: "bi-file-earmark-text" },
    { href: "#portfolio", label: "Portfolio", icon: "bi-images" },
    { href: "#services", label: "Services", icon: "bi-hdd-stack" },
    { href: "#blog", label: "Blogs", icon: "bi-menu-button" },
    { href: "#contact", label: "Contact", icon: "bi-envelope" },
  ]

  const socialLinks = [
    { href: "https://www.facebook.com/profile.php?id=100008736076488", icon: "bi-facebook", label: "Facebook" },
    { href: "https://www.instagram.com/harshit_tyagi__12/", icon: "bi-instagram", label: "Instagram" },
    { href: "https://www.linkedin.com/in/harshit-tyagi72/", icon: "bi-linkedin", label: "LinkedIn" },
    { href: "https://github.com/tyagiharshit720", icon: "bi-github", label: "GitHub" },
    { href: "https://www.geeksforgeeks.org/user/tyagiharshit72/", icon: "bi-book", label: "GeeksforGeeks" },
    { href: "https://leetcode.com/tyagiharshit720/", icon: "bi-code", label: "LeetCode" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <header className="fixed top-0 left-0 bottom-0 w-80 bg-gray-900 text-white flex flex-col z-50 xl:flex hidden">
        <button className="xl:hidden absolute top-4 right-4 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="bi bi-list"></i>
        </button>

        <div className="flex flex-col items-center py-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
              src="/ME photo.jpg"
              alt="Harshit Kumar Tyagi"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <Link href="/" className="text-center">
            <h1 className="text-xl font-bold">Harshit Kumar Tyagi</h1>
          </Link>

          <div className="flex gap-3 mt-4 relative">
  {socialLinks.map((social) => (
    <div key={social.label} className="relative group">
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        <i className={`bi ${social.icon}`}></i>
      </a>
      {/* Tooltip */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap transition-opacity duration-300">
        {social.label}
      </span>
    </div>
  ))}
</div>

        </div>

        <nav className="flex-1 px-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.href.slice(1) ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <i className={`bi ${item.icon}`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="xl:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Harshit Kumar Tyagi</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            <i className="bi bi-list"></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="bg-gray-800 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-700"
                  >
                    <i className={`bi ${item.icon}`}></i>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
