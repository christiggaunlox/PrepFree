"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="z-40 w-full bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-prepfree.svg"
            alt="Prepfree"
            width={110}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            AI Mock Interview
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Resume Builder
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Bootcamps
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Career Guidance
          </Link>
          <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
            FAQ
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="rounded-3xl px-7 border">
            <Link href="#">Sign Up</Link>
          </Button>
          <Button className="text-black rounded-3xl bg-[#F9D71C] hover:bg-[#D0B41A]">
            Create Account
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav id="mobile-nav" className="border-t md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <Link href="#" className="py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              AI Mock Interview
            </Link>
            <Link href="#" className="py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              Resume Builder
            </Link>
            <Link href="#" className="py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              Bootcamps
            </Link>
            <Link href="#" className="py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              Career Guidance
            </Link>
            <Link href="#faq" className="py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              FAQ
            </Link>

            <div className="flex flex-col gap-2 mt-3">
              <Button variant="ghost" className="rounded-3xl px-7 border">
                <Link href="#">Sign Up</Link>
              </Button>
              <Button className="text-black rounded-3xl bg-[#F9D71C] hover:bg-[#D0B41A]">
                Create Account
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
