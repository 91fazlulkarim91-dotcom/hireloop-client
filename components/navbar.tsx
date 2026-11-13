"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import logo from "@/app/images/logo.png"

const links = [
  { label: "For job seekers", href: "/jobs" },
  { label: "For employers", href: "/employers" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Hireloop home"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
        >
          <Image
            src={logo}
            alt="Hireloop"
            priority
            className="h-9 w-auto"
            sizes="154px"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-8"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            render={<Link href="/sign-in" />}
            className="text-white hover:bg-white/10 hover:text-white"
          >
            Sign in
          </Button>
          <Button
            render={<Link href="/sign-up" />}
            className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-600 px-5 text-white hover:from-sky-600 hover:to-fuchsia-700"
          >
            Get started
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 px-4 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button
                variant="ghost"
                render={<Link href="/sign-in" />}
                className="justify-start text-white hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Button>
              <Button
                render={<Link href="/sign-up" />}
                className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-600 text-white hover:from-sky-600 hover:to-fuchsia-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
