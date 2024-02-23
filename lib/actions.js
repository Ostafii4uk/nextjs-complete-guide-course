'use server'
import { saveMeal } from './meals'
import { redirect } from 'next/navigation'

export async function shareMeal(formData) {
  const meal = {
    creator: formData.get('name'),
    creator_email: formData.get('title'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  }

  await saveMeal(meal)
  redirect('/meals')
}