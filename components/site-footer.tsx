import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-07-07%20at%2010.06.37%E2%80%AFPM-G0M0UUEBn4Dgb3KYMcIBZqCtwxnVGB.png"
            alt="Smiles Through STEM logo"
            width={1024}
            height={1024}
            className="size-14 rounded-full object-cover"
          />
          <p className="font-heading font-bold text-foreground">Smiles Through STEM</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <Link className="transition-colors hover:text-primary" href="mailto:smilesthroughstem@gmail.com">
            smilesthroughstem@gmail.com
          </Link>
          <p>Student-led since 2024</p>
        </div>
      </div>
    </footer>
  )
}
