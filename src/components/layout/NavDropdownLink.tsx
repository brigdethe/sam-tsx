import { ArrowFillContent } from '../ui/ArrowFill.js'

export function currentLinkClass(baseClassName: string, href: string, currentPath: string) {
  return href === currentPath ? `${baseClassName} w--current` : baseClassName
}

type NavDropdownLinkProps = {
  href: string
  label: string
  currentPath: string
  /** Page the link belongs to, when href carries a #fragment */
  pagePath?: string
}

/**
 * Navbar dropdown item with an arrow-fill hover: the arrow circle on the right
 * expands to fill the item, the label turns white and the arrow slides through.
 */
export function NavDropdownLink({
  href,
  label,
  currentPath,
  pagePath = href,
}: NavDropdownLinkProps) {
  return (
    <a
      href={href}
      aria-current={pagePath === currentPath ? 'page' : undefined}
      className={currentLinkClass(
        'dropdown-link navbar-dl-link w-dropdown-link arrow-fill',
        pagePath,
        currentPath,
      )}
    >
      <ArrowFillContent label={label} />
    </a>
  )
}
