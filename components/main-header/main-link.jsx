'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './main-link.module.css'

export default function MainLink({ href, children }) {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  )
}
