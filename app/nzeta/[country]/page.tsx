'use client'

import { notFound, redirect } from 'next/navigation'

console.log('🛂 NZeTA Country Page - redirecting to light versions')

const nzetaRedirects = {
  'nz': '/nzeta-light'
}

interface NZetaCountryPageProps {
  params: Promise<{ country: string }>
}

export default async function NZetaCountryPage({ params }: NZetaCountryPageProps) {
  console.log('🛂 NZeTA Country Page params:', params)
  
  const { country } = await params
  const redirectPath = nzetaRedirects[country as keyof typeof nzetaRedirects]
  
  if (!redirectPath) {
    console.log('❌ NZeTA page not found for country:', country)
    notFound()
  }
  
  console.log('✅ Redirecting to light NZeTA page for country:', country, 'Path:', redirectPath)
  redirect(redirectPath)
}