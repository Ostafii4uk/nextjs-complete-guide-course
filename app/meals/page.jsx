import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals page</h1>
      <Link href='./'>Back</Link>
      <Link href='/meals/share'>Share</Link>
    </main>
  )
}