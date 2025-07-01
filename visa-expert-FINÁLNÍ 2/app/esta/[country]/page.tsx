'use client'

import { notFound } from 'next/navigation'
import UsaEstaLandingPage from '@/components/usa-esta-landing-page'

console.log('🛂 ESTA Country Page - rendering for dynamic route')

const estaPages = {
  'us': UsaEstaLandingPage
}

interface EstaCountryPageProps {
  params: Promise<{ country: string }>
}

export default async function EstaCountryPage({ params }: EstaCountryPageProps) {
  console.log('🛂 ESTA Country Page params:', params)
  
  const { country } = await params
  const PageComponent = estaPages[country as keyof typeof estaPages]
  
  if (!PageComponent) {
    console.log('❌ ESTA page not found for country:', country)
    notFound()
  }
  
  console.log('✅ Rendering ESTA page for country:', country)
  return <PageComponent />
}