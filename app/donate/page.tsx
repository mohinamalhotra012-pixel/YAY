import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate | Smiles Through STEM',
  description: 'Support Smiles Through STEM.',
}

export default function DonatePage() {
  return (
    <main className="min-h-[70vh] bg-secondary">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Support the work</p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">Donate</h1>
      </section>
    </main>
  )
}
