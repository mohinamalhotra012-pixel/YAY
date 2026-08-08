import { ImagePlus } from 'lucide-react'

export function ImagePlaceholder({ label = 'Add your image here' }: { label?: string }) {
  return (
    <div className="flex min-h-64 w-full items-center justify-center rounded-3xl border-2 border-dashed border-primary/30 bg-muted px-6 py-12 text-center">
      <div className="flex flex-col items-center gap-3 text-primary">
        <span className="flex size-12 items-center justify-center rounded-full bg-background">
          <ImagePlus aria-hidden="true" className="size-5" />
        </span>
        <span className="text-sm font-bold">{label}</span>
      </div>
    </div>
  )
}
