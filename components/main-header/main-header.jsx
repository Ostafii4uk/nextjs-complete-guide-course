import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'
import MainLink from './main-link'

import styles from './main-header.module.css'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={LogoImage} alt='logo' priority />
          Next level food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <MainLink href='/meals'>Browse meals</MainLink>
            </li>
            <li>
              <MainLink href='/community'>Foodies community</MainLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}