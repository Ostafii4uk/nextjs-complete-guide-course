import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/assets/logo.png'
import MainHeaderBackground from './main-header-background'
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
              <Link href='/meals'>Browse meals</Link>
            </li>
            <li>
              <Link href='/community'>Foodies community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}