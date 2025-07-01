'use client'

import { notFound } from 'next/navigation'
import QatarHayyaLandingPage from '@/components/qatar-hayya-landing-page'

console.log('🛂 Hayya Country Page - rendering for dynamic route')

const hayyaPages = {
  'qa': QatarHayyaLandingPage
}

interface HayyaCountryPageProps {
  params: Promise<{ country: string }>
}

export default async function HayyaCountryPage({ params }: HayyaCountryPageProps) {
  console.log('🛂 Hayya Country Page params:', params)
  
  const { country } = await params
  const PageComponent = hayyaPages[country as keyof typeof hayyaPages]
  
  if (!PageComponent) {
    console.log('❌ Hayya page not found for country:', country)
    notFound()
  }
  
  console.log('✅ Rendering Hayya page for country:', country)
  return <PageComponent />
}