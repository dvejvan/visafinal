'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
  Smartphone,
  Award,
  Headphones,
  TrendingUp
} from 'lucide-react'

export default function KEtaLightPage() {
  console.log('🇰🇷 South Korea K-ETA Light Landing Page rendered')

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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-red-100 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop&crop=center"
            alt="Jižní Korea"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇰🇷</span>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Oficiální K-ETA
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Korea Electronic<br />
              <span className="text-blue-600">Travel Authorization</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Korean Electronic Travel Authorization pro bezvízový vstup do Jižní Koreje. 
              Moderní online systém pro turistiku a obchodní cesty.
            </p>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 text-lg shadow-lg"
              >
                Začít žádost o K-ETA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">2 roky</div>
                <div className="text-sm text-gray-600">Platnost</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">90 dnů</div>
                <div className="text-sm text-gray-600">Max. pobyt</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">96%</div>
                <div className="text-sm text-gray-600">Úspěšnost</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur border border-blue-200 rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Podpora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Proč si vybrat Visapo.com?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialisté na víza s více než 15,000 spokojených klientů
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">15,000+ klientů</h3>
                <p className="text-gray-600">Důvěra tisíců spokojených cestovatelů</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">96% úspěšnost</h3>
                <p className="text-gray-600">Téměř všechny žádosti úspěšně schváleny</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 podpora</h3>
                <p className="text-gray-600">Vždy zde pro vás, kdykoli potřebujete</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bezpečné platby</h3>
                <p className="text-gray-600">SSL šifrování a zabezpečené transakce</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
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
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Jak to funguje?
              </h2>
              <p className="text-xl text-gray-600">
                Jednoduchý 3-krokový proces
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Vyplníte formulář</h3>
                <p className="text-gray-600">Jednoduše vyplníte online formulář s vašimi osobními údaji a cestovními informacemi.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Zpracujeme žádost</h3>
                <p className="text-gray-600">Naši experti zkontrolují údaje a podají žádost k korejským úřadům ve vašem zastoupení.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Obdržíte K-ETA</h3>
                <p className="text-gray-600">Schválenou K-ETA obdržíte na email. Můžete cestovat do Koreje až 2 roky.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Požadavky pro Korea K-ETA
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Potřebné dokumenty
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Platný pas (min. 6 měsíců)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Digitální fotografie</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Email adresa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Platební karta</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Kdo může žádat
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Občané vybraných zemí</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Česká republika je podporována</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Pobyt max. 90 dnů</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      <span>Bez kriminální minulosti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Często kladené otázky
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Na jak dlouho je K-ETA platná?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Korea K-ETA je platná po dobu 2 let od vydání nebo do vypršení platnosti pasu, podle toho, co nastane dříve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mohu s K-ETA pracovat?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ne, K-ETA neumožňuje práci. Je určená pouze pro turistiku, obchodní návštěvy a tranzit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kolikrát mohu vstoupit do Koreje?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    K-ETA umožňuje neomezený počet vstupů během doby platnosti, každý pobyt max. 90 dnů.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Co když je moja žádost zamítnuta?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    V případě zamítnutí budete muset žádat o standardní turistické vízum na velvyslanectví.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Objevte moderní Koreu ještě dnes
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Vyřídíme vaši Korea K-ETA rychle a spolehlivě. Více než 96% našich žádostí je úspěšně schváleno.
            </p>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-lg shadow-lg"
              >
                Začít žádost o K-ETA
                <ArrowRight className="w-5 h-5 ml-2" />
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}