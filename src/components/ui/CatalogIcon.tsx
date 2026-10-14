import { icons, type IconName } from '../../content/catalog/icons.js'

/** A catalogue line icon (see content/catalog/icons.ts), inherits currentColor. */
export function CatalogIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
