'use client'

import { notFound, redirect } from 'next/navigation'

console.log('🛂 ETA Country Page - redirecting to light versions')

const etaRedirects = {
  'gb': '/uk-eta-light',
  'ca': '/canada-eta-light', 
  'lk': '/srilanka-eta-light'
}

interface EtaCountryPageProps {
  params: Promise<{ country: string }>
}

export default async function EtaCountryPage({ params }: EtaCountryPageProps) {
  console.log('🛂 ETA Country Page params:', params)
  
  const { country } = await params
  const redirectPath = etaRedirects[country as keyof typeof etaRedirects]
  
  if (!redirectPath) {
    console.log('❌ ETA page not found for country:', country)
    notFound()
  }
  
  console.log('✅ Redirecting to light ETA page for country:', country, 'Path:', redirectPath)
  redirect(redirectPath)
}