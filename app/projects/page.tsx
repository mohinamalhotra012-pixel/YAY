import type { Metadata } from 'next'
import Image from 'next/image'
import { CalendarDays } from 'lucide-react'

import { ImagePlaceholder } from '@/components/image-placeholder'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Projects | Smiles Through STEM',
  description: 'Follow the Smiles Through STEM project timeline and learn about the kits.',
}

const timeline = [
  { date: 'June 2024', detail: '10 kits donated to children receiving dialysis at Dialysis Clinic Inc (DCI)' },
  { date: 'July 2024', detail: 'Drop off of 90 STEM kits at Vanderbilt Children’s Hospital' },
  { date: 'July 2026', detail: 'Drop off of 30 STEM kits at Mercy Community Healthcare' },
  { date: 'August 2026', detail: 'Drop off of 70 STEM kits at Vanderbilt Children’s Hospital' },
]

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 md:py-20">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">Projects</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <Tabs defaultValue="timeline" className="gap-10">
          <TabsList className="mx-auto h-auto rounded-full bg-muted p-1.5">
            <TabsTrigger value="timeline" className="rounded-full px-5 py-2.5 sm:px-8">Timeline</TabsTrigger>
            <TabsTrigger value="kits" className="rounded-full px-5 py-2.5 sm:px-8">About the Kits</TabsTrigger>
          </TabsList>
          <TabsContent value="timeline">
            <div className="flex flex-col gap-8">
              {timeline.map((item, index) => (
                <article
                  key={`${item.date}-${index}`}
                  className="grid items-center gap-7 rounded-3xl border border-border bg-background p-5 sm:p-7 md:grid-cols-2 md:gap-10"
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : undefined}>
                    <div className="flex items-center gap-2 text-primary">
                      <CalendarDays aria-hidden="true" className="size-5" />
                      <p className="text-sm font-extrabold uppercase tracking-wider">{item.date}</p>
                    </div>
                    <h2 className="mt-4 font-heading text-2xl font-extrabold leading-snug text-balance sm:text-3xl">
                      {item.detail}
                    </h2>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : undefined}>
                    {index === 0 ? (
                      <div className="overflow-hidden rounded-3xl bg-muted">
                        <Image
                          src="/images/img-8711.jpg"
                          alt="Smiles Through STEM kits prepared for the June 2024 donation"
                          width={1536}
                          height={1152}
                          className="min-h-64 w-full object-cover"
                          priority
                        />
                      </div>
                    ) : index === 1 ? (
                      <div className="overflow-hidden rounded-3xl bg-muted">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2303%20%281%29%20%281%29-TRHD9QbSh7bsVrEHz3hk0uTs5tfKYJ.jpg"
                          alt="Smiles Through STEM donation drop-off at Vanderbilt Children’s Hospital"
                          width={4032}
                          height={3024}
                          className="min-h-64 w-full object-cover"
                        />
                      </div>
                    ) : index === 2 ? (
                      <div className="overflow-hidden rounded-3xl bg-muted">
                        <Image
                          src="/images/mercy-community-healthcare-july-2026.png"
                          alt="Smiles Through STEM delivering kits to Mercy Community Healthcare in July 2026"
                          width={1179}
                          height={1438}
                          className="min-h-64 w-full object-cover"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder label={`Insert photo for ${item.date}`} />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="kits" className="min-h-72" aria-label="About the Kits content" />
        </Tabs>
      </section>
    </main>
  )
}
