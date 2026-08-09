import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2, HandHeart, PackageOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const impact = [
  { value: '200+', label: 'Kits donated', icon: PackageOpen },
  { value: '3', label: 'Partner organizations', icon: Building2 },
  { value: '5', label: 'Volunteers', icon: HandHeart },
]

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:gap-20">
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Bringing smiles to children through STEM
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              An initiative that creates and donates hands-on STEM kits to alleviate the stress of children receiving medical treatment.
            </p>
            <Button size="lg" render={<Link href="/projects" />}>
              Explore our projects
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] bg-background p-3 shadow-sm">
              <Image
                src="/images/stem-kits-home.jpeg"
                alt="Rows of turquoise Smiles Through STEM kit bags ready for donation"
                width={2432}
                height={1824}
                priority
                sizes="(min-width: 768px) 50vw, calc(100vw - 40px)"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 md:py-28">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-primary">What we do</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Smiles Through STEM
        </h2>
        <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {"Smiles Through STEM is a student-led initiative that benefits children receiving medical treatment and care. Whether a check-up or an overnight stay, the STEM kits help ease the anxiety of children in an educational manner. Each STEM Kit contains four experiments, an instructional pamphlet outlining steps and lessons, and video tutorials accessible through scanning QR codes. These kits are donated to all kinds of medical facilities, spanning from children's hospitals to underserved clinics. These kits rely on donations and funds from fundraisers; therefore, any contribution is greatly appreciated."}
        </p>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">Growing together</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Our Impact</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {impact.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.label} className="flex flex-col items-center gap-4 rounded-2xl bg-background px-6 py-9 text-center shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className="font-heading text-4xl font-extrabold text-primary">{item.value}</p>
                  <p className="font-bold text-muted-foreground">{item.label}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
