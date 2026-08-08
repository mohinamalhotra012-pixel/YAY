import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Smiles Through STEM',
  description: 'Contact Smiles Through STEM by email.',
}

export default function ContactPage() {
  return (
    <main className="flex min-h-[70vh] items-center bg-muted">
      <section className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
          <Mail aria-hidden="true" className="size-7" />
        </span>
        <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Get in touch</p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We would love to hear from future partners, volunteers, and supporters.
        </p>
        <Link
          href="mailto:smilesthroughstem@gmail.com"
          className="mt-9 inline-flex rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-85"
        >
          smilesthroughstem@gmail.com
        </Link>
      </section>
    </main>
  )
}
