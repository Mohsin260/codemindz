"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full transition-all duration-300 z-10 ${isSticky ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['Hero', 'Experience', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-400 transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header