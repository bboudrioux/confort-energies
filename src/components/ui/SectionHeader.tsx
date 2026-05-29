import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  kicker: string
  title: string
  titleEm?: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({
  kicker,
  title,
  titleEm,
  description,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-10', align === 'center' && 'text-center')}>
      <p
        className={cn(
          'text-xs font-extrabold tracking-widest uppercase mb-3',
          light ? 'text-amber-light' : 'text-amber'
        )}
      >
        {kicker}
      </p>
      <h2
        className={cn(
          'font-serif font-light leading-tight tracking-tight',
          'text-[clamp(1.8rem,3.5vw,3rem)]',
          light ? 'text-green-50' : 'text-green-950'
        )}
      >
        {title}
        {titleEm && (
          <>
            {' '}
            <em className={cn('not-italic font-normal', light ? 'text-amber-light' : 'text-green-700')}>
              {titleEm}
            </em>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed max-w-xl',
            align === 'center' && 'mx-auto',
            light ? 'text-green-100' : 'text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
