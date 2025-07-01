'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language-v2'
import { 
  Clock, 
  Shield, 
  CheckCircle, 
  Star, 
  Plane,
  Users,
  ArrowRight,
  Zap,
  Globe,
  Calendar,
  FileText,
  CreditCard,
  AlertTriangle,
  MapPin,
  Smartphone
} from 'lucide-react'

export default function SouthKoreaKEtaLandingPage() {
  console.log('🇰🇷 South Korea K-ETA Landing Page rendered')

  const handleApply = (plan: string) => {
    console.log('🚀 Applying for South Korea K-ETA plan:', plan)
    const params = new URLSearchParams({
      country: 'kr',
      type: 'keta',
      visaType: 'keta',
      plan: plan,
      price: plan === 'standard' ? '1050' : plan === 'express' ? '1450' : '1950'
    })
    window.location.href = `/application-form?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-red-800 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop&crop=center"
            alt="Jižní Korea"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-red-800/60 to-blue-800/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-7xl">🇰🇷</span>
              <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                K-ETA Online
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Korea K-ETA <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                za 2-4 dny
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Korean Electronic Travel Authorization pro bezvízový vstup do Jižní Koreje. 
              Moderní online systém pro turistiku a obchodní cesty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
              >
                Začít žádost (1,050 Kč)
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => handleApply('express')}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
              >
                Express (1,450 Kč)
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">2-4 dny</div>
                <div className="text-sm text-blue-200">Standardní vyřízení</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">24h</div>
                <div className="text-sm text-blue-200">Express služba</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">96%</div>
                <div className="text-sm text-blue-200">Úspěšnost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">90 dnů</div>
                <div className="text-sm text-blue-200">Délka pobytu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Key Information */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Co je Korea K-ETA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Korean Electronic Travel Authorization - moderní elektronické povolení pro vstup do Koreje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Rychlé vyřízení</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Standardně 2-4 dny, express do 24 hodin</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Dlouhá platnost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">2 roky platnost s vícenásobnými vstupy</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Bezvízový vstup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Až 90 dnů pobytu bez víza</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Moderní systém</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nejmodernější technologie</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vyberte si rychlost vyřízení
            </h2>
            <p className="text-xl text-gray-600">
              Všechny plány zahrnují kompletní zpracování a podporu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Standard</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">1,050 Kč</div>
                <p className="text-gray-600">2-4 pracovní dny</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Zpracování žádosti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Kontrola údajů</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Email podpora</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>SMS notifikace</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('standard')}
                  className="w-full mt-6"
                >
                  Vybrat Standard
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-emerald-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Nejoblíbenější
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Express</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">1,450 Kč</div>
                <p className="text-gray-600">Do 24 hodin</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Prioritní zpracování</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Kontrola údajů</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Telefonní podpora</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>SMS + email notifikace</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('express')}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700"
                >
                  Vybrat Express
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">VIP</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">1,950 Kč</div>
                <p className="text-gray-600">Do 12 hodin</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Nejrychlejší zpracování</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Dedikovaný konzultant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>24/7 podpora</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Všechny notifikace</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handleApply('vip')}
                  className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  Vybrat VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-900 via-red-800 to-blue-800 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Objevte moderní Koreu ještě dnes
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vyřídíme vaši Korea K-ETA rychle a spolehlivě. Více než 96% našich žádostí je úspěšně schváleno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApply('standard')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Standardní (1,050 Kč)
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => handleApply('express')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg"
            >
              Express (1,450 Kč)
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>96% úspěšnost</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Rychlé vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}