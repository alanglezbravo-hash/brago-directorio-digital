'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase transition-all duration-400 ease-brago focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed',
          {
            // variants
            'bg-brago-cream text-brago-black hover:bg-brago-cream/90 active:scale-[0.98]':
              variant === 'primary',
            'bg-transparent text-brago-cream hover:text-brago-gold border-b border-transparent hover:border-brago-gold pb-0.5':
              variant === 'ghost',
            'border border-brago-cream/20 text-brago-cream hover:border-brago-gold hover:text-brago-gold bg-transparent':
              variant === 'outline',
            'bg-brago-gold text-brago-black hover:bg-brago-gold-light active:scale-[0.98]':
              variant === 'gold',
            // sizes
            'text-2xs px-4 py-2':  size === 'sm',
            'text-xs px-6 py-3':   size === 'md',
            'text-sm px-8 py-4':   size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
