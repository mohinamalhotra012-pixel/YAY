import type { Metadata } from 'next'
import Image from 'next/image'
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
            <div className="relative mx-auto max-w-5xl">
              <div aria-hidden="true" className="absolute top-3 bottom-3 left-3 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
              <div className="flex flex-col gap-12 md:gap-16">
                {timeline.map((item, index) => (
                  <article key={`${item.date}-${index}`} className="relative grid pl-10 md:grid-cols-2 md:pl-0">
                    <span
                      aria-hidden="true"
                      className="absolute top-2 left-3 size-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary ring-2 ring-primary/20 md:left-1/2"
                    />
                    <div
                      className={
                        index % 2 === 0
                          ? 'md:col-start-1 md:pr-12 md:text-right'
                          : 'md:col-start-2 md:pl-12'
                      }
                    >
                      <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{item.date}</p>
                      <h2 className="mt-3 font-heading text-xl font-extrabold leading-snug text-balance sm:text-2xl">
                        {item.detail}
                      </h2>
                      <div className={index % 2 === 0 ? 'mt-5 md:ml-auto' : 'mt-5'}>
                        {index === 0 ? (
                          <div className="ml-0 max-w-sm overflow-hidden rounded-2xl bg-muted md:ml-auto">
                            <Image
                              src="/images/img-8711.jpg"
                              alt="Smiles Through STEM kits prepared for the June 2024 donation"
                              width={768}
                              height={576}
                              className="aspect-[4/3] w-full object-cover"
                              priority
                            />
                          </div>
                        ) : index === 1 ? (
                          <div className="max-w-sm overflow-hidden rounded-2xl bg-muted">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2303%20%281%29%20%281%29-TRHD9QbSh7bsVrEHz3hk0uTs5tfKYJ.jpg"
                              alt="Smiles Through STEM donation drop-off at Vanderbilt Children’s Hospital"
                              width={1008}
                              height={756}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                        ) : index === 2 ? (
                          <div className="max-w-xs overflow-hidden rounded-2xl bg-muted">
                            <Image
                              src="/images/mercy-community-healthcare-july-2026.png"
                              alt="Smiles Through STEM delivering kits to Mercy Community Healthcare in July 2026"
                              width={590}
                              height={719}
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="max-w-sm text-left">
                            <ImagePlaceholder label={`Insert photo for ${item.date}`} />
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="kits" className="min-h-72" aria-label="About the Kits content">
            <article className="mx-auto max-w-4xl rounded-3xl border border-border bg-background p-6 sm:p-8 md:p-10">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Inside every STEM kit
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Each STEM kit contains four hands-on experiments, an instructional pamphlet outlining the steps and lessons, and video tutorials accessible through scanning QR codes. The experiments expose the children to various STEM disciplines, including chemistry, computer science, engineering, and biotechnology. Past kits created and donated have included activities such as creating a DIY flashlight, designing chromatography flowers, and assembling a prosthetic hand.
              </p>
            </article>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
