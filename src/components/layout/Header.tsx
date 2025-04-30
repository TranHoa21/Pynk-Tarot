'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Trang Chủ', href: '/' },
    { label: 'Giới Thiệu', href: '/about' },
    { label: 'Dịch Vụ', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Liên Hệ', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-200 via-amber-50 to-rose-200 shadow">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo Cosmic Tarot" width={50} height={50} />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-[#B76E79]">PYNK TAROT</span>
            <span className="text-sm text-blue-900">Dịch Vụ Xem Tarot</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[16px] font-medium text-blue-900">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${pathname === item.href ? 'text-[#B76E79] font-semibold' : ''} hover:text-[#B76E79] transition`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <Link
          href="#about"
          className="hidden md:inline-block bg-[#B76E79] hover:bg-[#D29BA3] text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition"
        >
          Bắt Đầu Ngay
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#B76E79] text-2xl focus:outline-none"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-lg z-40 md:hidden">
            <nav className="flex flex-col p-4 gap-4 text-blue-900 text-base font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${pathname === item.href ? 'text-[#B76E79] font-semibold' : ''} hover:text-[#B76E79] transition`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="bg-[#B76E79] hover:bg-[#D29BA3] text-white text-sm font-semibold px-4 py-2 rounded-md shadow text-center"
              >
                Bắt Đầu Ngay
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
