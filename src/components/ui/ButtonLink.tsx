import type { ComponentPropsWithoutRef } from 'react'

type ButtonLinkProps = ComponentPropsWithoutRef<'a'>

export function ButtonLink({ children, className = '', ...props }: ButtonLinkProps) {
  return (
    <a className={`button ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}
