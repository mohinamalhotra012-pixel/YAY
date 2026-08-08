import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate | Smiles Through STEM',
  description: 'Support Smiles Through STEM.',
}

export default function DonatePage() {
  return (
    <main className="min-h-[70vh] bg-secondary">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Support the work</p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">Help bring STEM to a child</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Smiles Through STEM is raising funds to support children during difficult times. Your donation will help provide each child with a STEM kit containing four experiments, an instructional pamphlet outlining the steps and lessons, and video tutorials accessible by scanning QR codes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { amount: '$4.00', impact: 'can help support one child' },
            { amount: '$20.00', impact: 'can help support five children' },
            { amount: '$40.00', impact: 'can help support ten children' },
          ].map((option) => (
            <article key={option.amount} className="flex flex-col gap-2 rounded-2xl bg-background p-6 shadow-sm">
              <p className="font-heading text-3xl font-extrabold text-primary">{option.amount}</p>
              <p className="leading-relaxed text-muted-foreground">{option.impact}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-primary p-7 text-primary-foreground sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Every donation makes a difference</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-primary-foreground/85">
              Any donation is appreciated. Thank you for supporting this initiative.
            </p>
          </div>
          <a
            href="https://gofund.me/24ebe10f8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-background px-6 py-3 font-bold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 sm:mt-0"
          >
            Donate on GoFundMe
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  )
}
