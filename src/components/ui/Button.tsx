'use client'

import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>>

const variants = {
  primary:
    'bg-amber text-white shadow-amber hover:shadow-amber-hover hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'bg-white text-green-800 border border-border hover:border-green-700 hover:bg-green-50',
  ghost: 'bg-transparent text-green-800 hover:bg-green-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-5 py-3 text-sm gap-2',
  lg: 'px-7 py-4 text-base gap-2.5',
}

export function Button({ variant = 'primary', size = 'md', href, className, children, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 cursor-pointer select-none whitespace-nowrap',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
