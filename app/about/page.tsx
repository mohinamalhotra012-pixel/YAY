import type { Metadata } from 'next'
import Image from 'next/image'
import { Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Smiles Through STEM',
  description: 'Meet the founder and learn about the mission and vision behind Smiles Through STEM.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h1 className="mx-auto max-w-3xl text-center font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:gap-20">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">The Story</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">A personal mission</h2>
          <div className="mt-7 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              {"My name is Arshia Malhotra, and I am a sophomore enrolled in a Medical School Early Acceptance Program at Middle Tennessee State University. Spending hours volunteering in a medical center and with organizations supporting those with disabilities exposed me to the struggles they face, particularly the children. These children often experience significant anxiety, and those with extended hospital stays might even be missing school to receive the care they require."}
            </p>
            <p>
              {"To bring some positivity during this stressful time, I began creating and donating hands-on STEM kits in 2024, providing children the opportunity to engage in experiments that spark curiosity. Since then, I have distributed over 200 STEM kits to children's hospitals and health centers throughout Middle Tennessee. My desire to support these children has only grown stronger, as I am now working to expand the scope and impact of this initiative."}
            </p>
          </div>
        </div>
        <figure className="w-full max-w-xs justify-self-center overflow-hidden rounded-3xl bg-muted shadow-sm">
          <Image
            src="/images/arshia-malhotra.jpg"
            alt="Arshia Malhotra smiling in a garden"
            width={648}
            height={864}
            sizes="(min-width: 768px) 320px, calc(100vw - 40px)"
            className="aspect-[3/4] h-auto w-full object-cover object-center"
          />
        </figure>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-24">
          <article className="flex flex-col gap-5 rounded-3xl bg-background p-8 shadow-sm sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-full bg-muted text-primary">
              <Heart aria-hidden="true" className="size-5" />
            </span>
            <h2 className="font-heading text-2xl font-extrabold">Our Mission</h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              To alleviate anxiety among children during their clinical visits or medical treatment by providing interactive STEM kits that channel their curiosity into discovery.
            </p>
          </article>
          <article className="flex flex-col gap-5 rounded-3xl bg-background p-8 shadow-sm sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-full bg-muted text-primary">
              <Eye aria-hidden="true" className="size-5" />
            </span>
            <h2 className="font-heading text-2xl font-extrabold">Our Vision</h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"To expand this initiative to children’s hospitals and health centers across regions sustainably, creating a lasting impact."}
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
