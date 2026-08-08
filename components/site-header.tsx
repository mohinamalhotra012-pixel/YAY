'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/donate', label: 'Donate' },
]

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Smiles Through STEM home">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-07-07%20at%2010.06.37%E2%80%AFPM-G0M0UUEBn4Dgb3KYMcIBZqCtwxnVGB.png"
        alt="Smiles Through STEM logo"
        width={1024}
        height={1024}
        className="size-12 rounded-full object-cover"
        priority
      />
      <span className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
        Smiles Through STEM
      </span>
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Brand />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon-lg" aria-label="Open navigation menu" className="md:hidden" />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle>Smiles Through STEM</SheetTitle>
              <SheetDescription>Explore our work and learn how to get involved.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 font-heading text-lg font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
