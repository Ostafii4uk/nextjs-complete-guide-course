import Link from 'next/link';
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Delicious meals, created <span className={styles.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook</p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}