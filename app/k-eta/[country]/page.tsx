'use client'

import { notFound, redirect } from 'next/navigation'

console.log('🛂 K-ETA Country Page - redirecting to light versions')

const ketaRedirects = {
  'kr': '/k-eta-light'
}

interface KEtaCountryPageProps {
  params: Promise<{ country: string }>
}

export default async function KEtaCountryPage({ params }: KEtaCountryPageProps) {
  console.log('🛂 K-ETA Country Page params:', params)
  
  const { country } = await params
  const redirectPath = ketaRedirects[country as keyof typeof ketaRedirects]
  
  if (!redirectPath) {
    console.log('❌ K-ETA page not found for country:', country)
    notFound()
  }
  
  console.log('✅ Redirecting to light K-ETA page for country:', country, 'Path:', redirectPath)
  redirect(redirectPath)
}