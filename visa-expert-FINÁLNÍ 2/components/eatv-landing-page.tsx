'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Shield,
  MapPin,
  Camera,
  Plane,
  FileCheck,
  Star,
  ArrowRight,
  Globe
} from 'lucide-react'

console.log('🌍 EATV Landing Page component loaded')

export default function EatvLandingPage() {
  const [isLoading, setIsLoading] = useState(false)

  console.log('🌍 EATV Landing Page rendered')

  const handleStartApplication = () => {
    console.log('🚀 Starting EATV application')
    setIsLoading(true)
    
    const params = new URLSearchParams({
      country: 'eatv',
      type: 'tourist',
      visaType: 'eatv',
      plan: 'standard',
      price: '3200'
    })
    
    window.location.href = `/application-form?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50/30 to-yellow-50/20">
      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1049500/pexels-photo-1049500.jpeg?auto=compress&cs=tinysrgb&h=600"
            alt="East Africa Safari"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl">🌍</span>
              <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Oficiální vízové služby
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              East Africa Tourist Visa
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Jedno vízum pro tři země - Keňa, Uganda a Rwanda. Objevte krásy východní Afriky s jedním turistickým vízem.
            </p>

            {/* Professional Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur border border-green-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-600">7-14 dnů</div>
                <div className="text-sm text-gray-600">Doba vyřízení</div>
              </div>
              <div className="bg-white/80 backdrop-blur border border-green-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-600">3 země</div>
                <div className="text-sm text-gray-600">Keňa, Uganda, Rwanda</div>
              </div>
              <div className="bg-white/80 backdrop-blur border border-green-200 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-600">90 dnů</div>
                <div className="text-sm text-gray-600">Platnost víza</div>
              </div>
            </div>

            <div className="pt-8">
              <Button 
                onClick={handleStartApplication}
                disabled={isLoading}
                className="bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? 'Načítání...' : 'Začít žádost o EATV'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* EATV Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Výhody East Africa Tourist Visa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jedno vízum, tři úžasné země plné divočiny, kultury a dobrodružství
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Tři země v jednom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Navštivte Keňu, Ugandu a Rwandu s jedním vízem. Žádné komplikace na hranicích.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Safari a příroda</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Masai Mara, Serengeti, Bwindi Forest - zažijte nejlepší africké safari.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">90 dnů platnost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Dostatek času na prozkoumání všech tří zemí bez spěchu.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak získat EATV
            </h2>
            <p className="text-xl text-gray-600">
              Jednoduchý proces v několika krocích
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Vyplňte formulář</h3>
              <p className="text-gray-600">Základní údaje a cestovní informace</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Nahrajte dokumenty</h3>
              <p className="text-gray-600">Pas, fotografie a další požadované dokumenty</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Zaplaťte poplatek</h3>
              <p className="text-gray-600">Bezpečná platba kartou nebo převodem</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Získejte vízum</h3>
              <p className="text-gray-600">Vyřídíme vše za vás během 7-14 dnů</p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Požadavky pro EATV
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-green-600" />
                  Požadované dokumenty
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Platný pas (min. 6 měsíců)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fotografii 45x35mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Doklad o ubytování</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Zpáteční letenka</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Očkování proti žluté zimnici</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  Platnost a použití
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Platnost 90 dnů od vydání</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Vícekrené vstupy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Keňa, Uganda, Rwanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Pouze turistické účely</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Nelze prodloužit</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Často kladené otázky
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-lg">Mohu vstoupit do všech tří zemí s EATV?</h3>
                <p className="text-gray-600">
                  Ano, EATV vám umožňuje volný pohyb mezi Keňou, Ugandou a Rwandou po dobu 90 dnů.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-lg">Kde mohu vstoupit s EATV?</h3>
                <p className="text-gray-600">
                  První vstup musí být do země, která vízum vydala. Poté můžete cestovat mezi všemi třemi zeměmi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-lg">Je nutné očkování?</h3>
                <p className="text-gray-600">
                  Ano, očkování proti žluté zimnici je povinné pro vstup do všech tří zemí.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-lg">Mohu vízum prodloužit?</h3>
                <p className="text-gray-600">
                  EATV nelze prodloužit. Po vypršení platnosti musíte zemi opustit nebo požádat o jiný typ víza.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proč si vybrat naše služby?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zkušený tým</h3>
              <p className="text-gray-600">Specializujeme se na africká víza přes 10 let</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Osobní poradce</h3>
              <p className="text-gray-600">Dedikovaný expert pro váš případ po celou dobu</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">92% úspěšnost</h3>
              <p className="text-gray-600">Vysoká úspěšnost díky pečlivé přípravě dokumentů</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-green-900 via-orange-900 to-yellow-800 text-white rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni na africké dobrodružství?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Začněte svou cestu do východní Afriky ještě dnes. Safari, kultura a nezapomenutelné zážitky vás čekají.
          </p>
          
          <Button 
            onClick={handleStartApplication}
            disabled={isLoading}
            className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isLoading ? 'Načítání...' : 'Začít žádost o EATV'}
            <Plane className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Bezpečné platby</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Rychlé vyřízení</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Expert podpora</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}