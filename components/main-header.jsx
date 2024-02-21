import Link from 'next/link'
import LogoImage from '@/assets/logo.png'

export default function MainHeader() {
  return (
    <header>
      <Link href='/'>
        <img src={LogoImage.src} alt='logo' />
        Next level food
      </Link>

      <nav>
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
  )
}