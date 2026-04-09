'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/programs', label: '프로그램 추천' },
  { href: '/#process', label: '상담절차' },
  { href: '/#reviews', label: '합격후기' },
  { href: '/#camp', label: '영어캠프' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[800] h-[68px] flex items-center justify-between px-5 md:px-[60px] bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        {/* Logo */}
        <Link href="/" className="font-jakarta text-[22px] font-extrabold text-brand tracking-tight no-underline">
          Mono<span className="text-gray-800">grit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-500 text-sm font-medium hover:text-brand transition-colors no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#consult"
            className="bg-brand text-white px-5 py-[9px] rounded-md text-[13px] font-bold hover:bg-brand-dark transition-colors no-underline"
          >
            무료상담 →
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
          className="md:hidden flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
        >
          <span
            className={`block w-[22px] h-0.5 bg-gray-800 rounded transition-all duration-300 origin-center ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-gray-800 rounded transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-gray-800 rounded transition-all duration-300 origin-center ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[68px] left-0 right-0 bg-white z-[799] flex flex-col border-b border-gray-200 shadow-xl transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={close}
            className="block text-gray-800 no-underline text-base font-semibold px-7 py-4 border-b border-gray-100 hover:bg-brand-light hover:text-brand transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="#consult"
          onClick={close}
          className="mx-7 my-4 bg-brand text-white text-center rounded-lg py-4 px-7 text-[15px] font-bold no-underline block"
        >
          ✈️ 무료 상담 신청하기
        </Link>
      </div>
    </>
  )
}
