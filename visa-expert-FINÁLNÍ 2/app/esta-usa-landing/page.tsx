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
  Award,
  Headphones,
  TrendingUp
} from 'lucide-react'

export default function EstaUsaLandingPage() {
  console.log('🇺🇸 ESTA USA Landing Page rendered')

  const handleApply = (plan: string) => {
    console.log('🚀 Applying for USA ESTA plan:', plan)
    const params = new URLSearchParams({
      country: 'us',
      type: 'esta',
      visaType: 'esta',
      plan: plan,
      price: plan === 'standard' ? '890' : plan === 'express' ? '1290' : '1790'
    })
    window.location.href = `/application-form?${params.toString()}`
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop&crop=center"
            alt="USA"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🇺🇸</span>
              <Badge className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 border border-blue-600">
                <Shield className="w-4 h-4 mr-2" />
                Oficiální ESTA
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Electronic System for<br />
              <span className="text-blue-300">Travel Authorization</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Oficiální elektronické povolení k cestování do Spojených států amerických. 
              Bezpečné zpracování pro občany VWP zemí.
            </p>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-12 py-4 text-lg border border-blue-600"
              >
                Začít žádost o ESTA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center border border-slate-700 bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">2 roky</div>
                <div className="text-sm text-slate-300">Platnost</div>
              </div>
              <div className="text-center border border-slate-700 bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">90 dnů</div>
                <div className="text-sm text-slate-300">Max. pobyt</div>
              </div>
              <div className="text-center border border-slate-700 bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">98%</div>
                <div className="text-sm text-slate-300">Úspěšnost</div>
              </div>
              <div className="text-center border border-slate-700 bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-slate-300">Podpora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Trust Section */}
        <section className="py-16 bg-gray-50">
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
                <h3 className="text-xl font-semibold mb-2">98% úspěšnost</h3>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Co je USA ESTA?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Electronic System for Travel Authorization - elektronické povolení pro občany VWP zemí
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
                  <p className="text-gray-600">Standardně 1-3 dny, express do 12 hodin</p>
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
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">100% online</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Celý proces probíhá elektronicky</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
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
                <p className="text-gray-600">Naši experti zkontrolují údaje a podají žádost k americkým úřadům ve vašem zastoupení.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Obdržíte ESTA</h3>
                <p className="text-gray-600">Schválenou ESTA obdržíte na email. Můžete cestovat do USA až 2 roky.</p>
              </div>
            </div>
          </div>
        </section>



        {/* Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Požadavky pro USA ESTA
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
                      <span>Email adresa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Adresa pobytu v USA</span>
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
                      <span>Občané VWP zemí</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Česká republika je VWP země</span>
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Často kladené otázky
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Na jak dlouho je ESTA platná?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ESTA je platná po dobu 2 let od vydání nebo do vypršení platnosti pasu, podle toho, co nastane dříve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mohu s ESTA pracovat?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ne, ESTA neumožňuje práci. Je určená pouze pro turistiku, obchodní návštěvy a tranzit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kolikrát mohu vstoupit do USA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ESTA umožňuje neomezený počet vstupů během doby platnosti, každý pobyt max. 90 dnů.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Co když je moje žádost zamítnuta?</CardTitle>
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
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Začněte svou cestu do USA ještě dnes
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Vyřídíme vaši ESTA rychle a spolehlivě. Více než 98% našich žádostí je úspěšně schváleno.
            </p>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => handleApply('standard')}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-12 py-4 text-lg border border-blue-600"
              >
                Začít žádost o ESTA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>98% úspěšnost</span>
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